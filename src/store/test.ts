import { wait } from '../utils/wait'
// ______________________________________________________
//
// @ State

interface State {
  count: number
}
const state = {
  count: 0
}
// ______________________________________________________
//
// @ Mutations

const mutations = {
  increment(state: State): void {
    state.count++
  },
  decrement(state: State): void {
    state.count--
  },
  setCount(state: State, count: number): void {
    state.count = count
  }
}
// ______________________________________________________
//
// @ Getters

const getters = {
  countLabel(state: State): string {
    return `count is ${state.count}`
  }
}
// ______________________________________________________
//
// @ Actions

const actions = {
  async asyncIncrement(context) {
    await wait(1000)
    context.commit('increment')
  }
}
// ______________________________________________________
//
// @ export

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
