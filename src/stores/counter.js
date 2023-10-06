import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore(
    'counter',
    () => {
        const count = ref(0) // state
        const doubleCount = computed(() => count.value * 2) // getter
        function increment() {
            // action
            count.value++
        }

        function $reset() {
            count.value = 0
        }

        return { count, doubleCount, increment, $reset }
    },
    { persist: true }
)
