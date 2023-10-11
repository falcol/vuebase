<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { reactive } from 'vue';
// Create data for login form
const loginData = reactive({
    email: '',
    password: '',
    rememberme: false
})

const loginSubmit = () => {
    console.log(loginData)
}
</script>

<template>
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div class="text-center mb-5">
            <img src="src/assets/logo.svg" alt="Image" height="50" class="mb-3" />
            <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
            <span class="text-600 font-medium line-height-3">Don't have an account?</span>
            <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
        </div>

        <div>
            <label for="email" class="block text-900 font-medium mb-2">Email</label>
            <InputText v-model="loginData.email" id="email" type="text" class="w-full mb-3" />

            <label for="password" class="block text-900 font-medium mb-2">Password</label>
            <PasswordInput v-model="loginData.password" class="w-full mb-3" toggleMask inputClass="w-full" inputId="password" :inputProps="{ autocomplete: true }" />

            <div class="flex align-items-center justify-content-between mb-6">
                <div class="flex align-items-center">
                    <Checkbox inputId="rememberme" :binary="true" v-model="loginData.rememberme" class="mr-2"></Checkbox>
                    <label for="rememberme">Remember me</label>
                </div>
                <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
            </div>

            <Button label="Sign In" icon="pi pi-user" class="w-full" @click="loginSubmit()"></Button>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
