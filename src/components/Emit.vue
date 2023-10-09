<script setup>
import { inject } from 'vue';

const emit = defineEmits({
    accepted(payload) {
        return payload
    }
})

function clickEmit() {
    emit('accepted', {accept: 1})
}
// export default {
//     emits: ['accepted'],
//     setup(props, { emit }) {
//         const clickEmit = () => {
//             emit('accepted', {accept: 1})
//         }

//         return {clickEmit}
//     },

// }

const author_provide = inject("author_provide")
</script>

<template>
    <div>
        <PButton label="Primary" @click="clickEmit" rounded />
    </div>
</template>

<style lang="scss" scoped>

</style>
