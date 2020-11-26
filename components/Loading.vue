<template>
  <transition name="fade" :duration="1000">
    <div
      v-if="!isFadeOut"
      class="content w-100 left-0 top-0 z-1000 d-flex align-items-center justify-content-center"
    >
      <div class="wrap" :class="{ play: isLoadingFinished }">
        <div class="loading text-primary text-center">
          <span>{{ loading }}</span> %
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isFadeOut: false,
      loading: 0,
    }
  },
  computed: {
    isLoadingFinished() {
      return this.loading >= 100
    },
  },
  mounted() {
    const percent = setInterval(() => {
      this.loading++
      if (this.loading >= 100) {
        this.loading = 100
        clearInterval(percent)
        this.closeLoading()
      }
    }, 25)

    setTimeout(() => {
      this.loading = 100
    }, 3000)
  },
  methods: {
    closeLoading() {
      setTimeout(() => {
        this.isFadeOut = true
        // this.$store.commit("scrollLockDisable");
        this.$store.commit('loadingFinishAction')
      }, 1500)
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  position: fixed;

  height: 100vh;

  background: #fff;
}

.wrap {
  width: 100%;

  .group {
    max-width: 600px;
  }
  .loading {
    animation: begin 0.6s 1s both;

    color: #525252;

    span {
      letter-spacing: 1px;

      font-size: 88px;
      font-weight: 700;
      line-height: 1.2;
    }
  }

  .arrc {
    transition: all 0.5s ease-in-out;

    opacity: 1;
  }
  .fly {
    transition: all 0.8s 0.3s cubic-bezier(1, 0.01, 0.84, 0.18);
    transform: translate3d(0, 0, 0);
  }

  &.play {
    .arrc {
      opacity: 0;
    }
    .fly {
      transform: translate3d(0, -200%, 0);
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
