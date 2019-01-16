import { createNamespacedHelpers } from 'vuex'
// ______________________________________________________
type M = {
  state: { [k: string]: unknown }
  getters: { [k: string]: Function }
  mutations: { [k: string]: Function }
  actions: { [k: string]: Function }
}
type HelperArgs<T> = (keyof T)[] | { [k: string]: keyof T }
// ______________________________________________________
type StateMapFunction<T> = (state: T) => unknown
type MapStateArgs<T> = (keyof T)[] | { [k: string]: keyof T | StateMapFunction<T> }
type MapState<T> = (stateMap: MapStateArgs<T>) => object
type MapMutations<T> = (mutationsMap: HelperArgs<T>) => object
type MapGetters<T> = (gettersMap: HelperArgs<T>) => object
type MapActions<T> = (gettersMap: HelperArgs<T>) => object
// ______________________________________________________
type CreateNamespacedHelpersReturn<T extends M> = {
  mapState: MapState<T['state']>
  mapMutations: MapMutations<T['mutations']>
  mapGetters: MapGetters<T['getters']>
  mapActions: MapActions<T['actions']>
}
// ______________________________________________________
export function createNamespacedHelpersProxy<T extends M>(namespace: string) {
  return createNamespacedHelpers(namespace) as CreateNamespacedHelpersReturn<T>
}
