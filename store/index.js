export const state = () => ({
  body: {
    // disabled scroll
    isFixed: true,
  },
  loading: {
    // loading is finish ?
    isShow: true,
  },
})

export const mutations = {
  scrollLockEnable(state) {
    state.body.isFixed = true
  },
  scrollLockDisable(state) {
    state.body.isFixed = false
  },
  loadingFinishAction(state) {
    state.loading.isShow = false
  },
}
