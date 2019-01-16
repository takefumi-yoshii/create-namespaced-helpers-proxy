<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="asyncIncrement">async +1</button>
    <button @click="mappedIncrement">mapped +1</button>
    <button @click="mappedDecrement">mapped -1</button>
    <button @click="mappedAsyncIncrement">mappedAsync +1</button>
    <p>count: {{count}}</p>
    <p>mappedCount: {{mappedCount}}</p>
    <p>countLabel: {{countLabel}}</p>
    <p>mappedCountLabel: {{mappedCountLabel}}</p>
    <p>expo2: {{expo2}}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// 1.import module definition
import Test from '../store/test'
// 2.use type proxy helper
import { createNamespacedHelpersProxy } from '../helper/index'
// 3.add "typeof" Generics
const TypeSafe = createNamespacedHelpersProxy<typeof Test>('test')
// 4.compare with UnTypeSafe helper
import { createNamespacedHelpers } from 'vuex'
const UnTypeSafe = createNamespacedHelpers('test')

const computed = {
  ...TypeSafe.mapState([
    'count'
  ]),
  ...TypeSafe.mapState({
    mappedCount: 'count',
    expo2: state => state.count ** 2
  }),
  ...TypeSafe.mapGetters([
    'countLabel'
  ]),
  ...TypeSafe.mapGetters({
    mappedCountLabel: 'countLabel'
  })
}
const methods = {
  ...TypeSafe.mapMutations([
    'increment',
    'decrement',
  ]),
  ...TypeSafe.mapMutations({
    mappedIncrement: 'increment',
    mappedDecrement: 'decrement'
  }),
  ...TypeSafe.mapActions([
    'asyncIncrement'
  ]),
  ...TypeSafe.mapActions({
    mappedAsyncIncrement: 'asyncIncrement'
  })
}

export default Vue.extend({ computed, methods })
</script>

