<template>
  <div class="main">
    <Header />
    <div class="full-height">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Footer,
  },
  head() {
    return {
      bodyAttrs: {
        class: this.$store.state.body.isFixed ? 'scroll-lock' : '',
      },
      htmlAttrs: {
        class: this.$store.state.body.isFixed ? 'scroll-lock' : '',
      },
    }
  },
}
</script>

<style></style>
