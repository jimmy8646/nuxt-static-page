<template>
  <div>
    <Loading v-if="loadingFinish" @loadingFinishFrom="loadingFinish = false" />
    <Header />
    <div class="overflow-x">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Loading from '~/components/Loading'

export default {
  components: {
    Header,
    Footer,
    Loading,
  },
  data() {
    return {
      loadingFinish: true,
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.$store.state.body.isFixed ? 'is-fixed' : '',
      },
    }
  },
}
</script>

<style>
.is-fixed {
  height: 100vh;
  overflow-y: hidden;
}

.overflow-x {
  position: relative;
  overflow-x: hidden;
}
</style>
