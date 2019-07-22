<template>
  <div role="alert" class="notification-item" :class="getType" @click.self="removeNotification(notification)">
    <BaseIcon class="notification-item__icon" :name="iconName" />
    <h3 class="notification-item__text">{{ notification.message }}</h3>
    <span
      role="button"
      @click="removeNotification(notification)"
      class="notification-item__close-button"
    >
      &times;
    </span>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: {
    notification: {
      required: true,
      type: Object,
      validator: t => ['error', 'success', 'warning', 'info'].includes(t.type)
    }
  },
  computed: {
    ...mapState({
      timeout: state => state.notification.timeout
    }),
    getType() {
      return `notification-item--${this.notification.type}`
    },
    iconName() {
      switch(this.notification.type) {
        case 'warning':
          return 'exclamation-triangle';
        case 'info':
          return 'exclamation-circle';
        case 'success':
          return 'check-circle';
        case 'error':
          return 'bomb';
        default:
          return 'exclamation-circle';
      }
    }
  },
  created() {
    document.documentElement.style.setProperty('--timeout', this.timeout)
    const subsrc = setTimeout(() => {
      this.removeNotification(this.notification)
    }, this.timeout)
    // this.$on('hook:destroyed', () => {
    //   clearTimeout(subsrc)
    // })
  },
  methods: mapActions('notification', ['removeNotification'])
}
</script>

<style lang="scss" scoped>
@import '@design';

.notification-item {
  cursor: pointer;
  min-width: 100%;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  padding: 1rem 5rem;
  position: relative;
  font-weight: 400;
  position: relative;
  background-color: $color-notification-background;
  color: $white;
  border-left: 0.5rem solid $white;
  box-shadow: $box-shadow-easy;
  display: flex;
  align-items: flex-start;
  transition: all 1s, filter 0.3s;
  opacity: 1;
  &:hover {
    filter: brightness(75%);
  }
  &:hover &__close-button {
    color: red;
  }
  &::before {
    content: '';
    width: 0%;
    height: 3px;
    position: absolute;
    bottom: -2px;
    right: 0;
    animation: dissapearLeft calc(var(--timeout) * 1ms - 100ms) linear forwards;
    background-color: darken($color-notification-background, 0%);
    z-index: $layer-modal-z-index;
    display: inline-block;
  }
  &__close-button {
    user-select: none;
    cursor: pointer;
    position: absolute;
    top: 1.8rem;
    right: 1.5rem;
    font-size: 2.2rem;
    transform: translate(-50%, -50%);
    padding: 3px;
    transition: all 0.3s ease-out;
    &:hover {
      color: $white;
    }
  }
  &__text {
    font-size: inherit;
    font-weight: inherit;
    padding: 0;
    margin: 0;
  }
  &__icon {
    position: absolute;
    top: 1.3rem;
    left: 1.5rem;
    font-size: 2rem;
  }
  &--error {
    @include notificationFactory($danger);
    .notification-item__icon {
      color: $danger;
    }
  }
  &--warning {
    @include notificationFactory($warning);
    .notification-item__icon {
      color: $warning;
    }
  }
  &--success {
    @include notificationFactory($success);
    .notification-item__icon {
      color: $success;
    }
  }
  &--info {
    @include notificationFactory($info);
    .notification-item__icon {
      color: $info;
    }
  }
  @keyframes dissapearLeft {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
}
</style>