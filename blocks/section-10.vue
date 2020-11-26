<template>
  <div
    id="section-10"
    ref="section-10"
    :class="{ animated: isEnterScene && isReady }"
  >
    section-10
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEnterScene: false,
    }
  },

  computed: {
    isReady() {
      return !this.$store.state.loading.isShow
    },
  },

  mounted() {
    this.ScrollMagic()
  },

  methods: {
    ScrollMagic() {
      const target = this.$refs['section-10']
      const controller = new this.$ScrollMagic.Controller()
      const scene = new this.$ScrollMagic.Scene({
        triggerElement: target,
        triggerHook: 1,
        offset: 0,
      })

      scene.on('enter', () => {
        this.isEnterScene = true
      })

      scene.reverse(false).addTo(controller)
    },
  },
}
</script>

<style lang="scss" scoped>
#section-10 {
  transition: all 1.5s ease;
  transform: translate(-200%, 200%);
}
</style>

<style lang="scss" scoped>
.animated {
  &#section-10 {
    transform: translate(0, 0);
  }
}
</style>
