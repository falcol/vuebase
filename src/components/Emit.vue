<script setup>
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
</script>

<template>
    <div>
        <PButton label="Primary" @click="clickEmit" rounded />
    </div>
</template>

<style lang="scss" scoped>

</style>
