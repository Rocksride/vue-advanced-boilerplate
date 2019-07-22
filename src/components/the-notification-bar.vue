<template>
  <div class="notification-bar">
    <keep-alive>
      <transition-group name="list" tag="div">
        <Notification
          v-for="notification in notifications"
          :key="notification.id"
          :notification="notification"
        ></Notification>
      </transition-group>
    </keep-alive>
  </div>
</template>

<script>
import Notification from '@components/notification'
import { mapState } from 'vuex'
export default {
  components: {
    Notification
  },
  computed: mapState({
    notifications: state => state.notification.notifications
  })
}
</script>

<style lang="scss" scoped>
@import '@design';

.notification-bar {
  margin: 1rem;
  width: 40%;
  position: fixed;
  z-index: $layer-tooltip-z-index;
  // overflow-y: auto;
  max-height: 90%;
  bottom: 0;
  left: 0;
}
</style>