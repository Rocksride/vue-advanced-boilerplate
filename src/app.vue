<script>
import appConfig from '@src/app.config'
import TheNotificationBar from '@components/the-notification-bar'

export default {
  page: {
    // All subcomponent titles will be injected into this template.
    titleTemplate(title) {
      title = typeof title === 'function' ? title(this.$store) : title
      return title ? `${title} | ${appConfig.title}` : appConfig.title
    },
  },
  components: {
    TheNotificationBar
  },
  mounted() {
    this.$store.dispatch('theme/initColorTheme')
  }
}
</script>

<template>
  <div id="app">
    <TheNotificationBar />
    <RouterView :key="$route.fullPath" />
  </div>
</template>

<style lang="scss">

@import '~normalize.css/normalize.css';
@import '~nprogress/nprogress.css';
@import '@design';

</style>
