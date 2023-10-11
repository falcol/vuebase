<!-- eslint-disable vue/multi-word-component-names -->
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
console.log(author_provide);
</script>

<template>
    <div>
        <Button label="Primary" @click="clickEmit" rounded />
    </div>
</template>

<style lang="scss" scoped>

</style>
