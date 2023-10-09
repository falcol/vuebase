<script setup>
import { computed, onMounted, provide, reactive, ref } from 'vue';
import { useCounterStore } from '../stores/counter';
import Emit from './Emit.vue';
defineProps({
    msg: {
        type: String,
        required: true,
    },
})

const store = useCounterStore()
// const { count, doubleCount } = storeToRefs(store)
// const { increment } = store
// lifecycle hooks
onMounted(() => {
    console.log(`The initial count is ${store.count}.`)
})

const textData = ref('')
const books = reactive([ref('Vue 3 Guide')])
const map = reactive(new Map([['count', ref(0)]]))

const author = reactive({
    name: 'John Doe',
    books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery'],
})

// a computed ref
const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No'
})

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
    // getter
    get() {
        return firstName.value + ' ' + lastName.value
    },
    // setter
    set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        ;[firstName.value, lastName.value] = newValue.split(' ')
    },
}) // fullName.value = 'John Doe' -> firstName.value = 'John' and lastName.value = 'Doe'

const isActive = ref(true)
const error = ref(null)

const classObject = computed(() => ({
    active: isActive.value && !error.value,
    'text-danger': error.value && error.value.type === 'fatal',
}))

const checkEmit = (x) => {
    console.log(x);
}

provide('author_provide', author)
</script>

<template>
    <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
        <h3>
            You’ve successfully created a project with
            <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
            <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
        </h3>
        <br />
        <PButton @click="store.increment()" class="mr-2" outlined>Count is: {{ store.count }} - {{ store.doubleCount }}</PButton>
        <PButton @click="store.$reset" class="mr-2" outlined>Reset</PButton>
        <span>{{ textData }}</span>
        <InputText type="text" v-model="textData" />
        <div :class="classObject">{{ classObject }}</div>
        <div>{{ fullName }} - {{ publishedBooksMessage }}</div>
        <div>{{ books }} - {{ map.get('count') }}</div>
        <PButton type="button" label="Messages" icon="pi pi-users" badge="8" badgeClass="p-badge-danger" outlined />
        <Emit @accepted="checkEmit"/>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
    text-align: center;
}

@media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>
