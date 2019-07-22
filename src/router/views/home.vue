<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
}
</script>

<template>
  <Layout>
    <h1 class="heading">Home Page</h1>
    <img src="@assets/images/logo.png" alt="Logo" />
    <BaseButton @click="$store.dispatch('theme/setColorTheme', 'primary')">Primary theme</BaseButton>
    <BaseButton @click="$store.dispatch('theme/setColorTheme', 'secondary')">secondary theme</BaseButton>
    <BaseButton @click="$store.dispatch('theme/setColorTheme', 'tertiary')">tertiary theme</BaseButton>
  </Layout>
</template>


<style lang="scss" scoped>
@import '@design';
.heading {
	@extend %font-heading;
}
</style>