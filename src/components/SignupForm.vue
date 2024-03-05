<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { EmailValidator, PasswordValidator } from '../validation'
import { useUsers } from '../stores/users'
import type { User } from '@/user'
import router from '@/router'

const newUser: Ref<User> = ref({ name: '', email: '', password: '', password_confirmation: '' })
const showCard = ref(false)
const usersStore = useUsers()

const ConfirmPasswordValidator = (value: string) => {
  if (value) {
    if (newUser.value.password === value) {
      return true
    }
    return 'Passwords do not match.'
  }
  return 'Confirm Password is required.'
}
const handleSubmit = async (newuser: User) => {
  const result = await usersStore.register(newuser)
  if (result) {
    localStorage.setItem('token', result.token)
    router.push('/dashboard')
  }
}
setTimeout(() => {
  showCard.value = true
}, 100)
</script>
<template>
  <div class="d-flex align-center justify-center h-100">
    <div class="w-75 d-flex justify-center">
      <transition name="fade">
        <VCard v-if="showCard" title="User Registration" class="w-100 pa-8" max-width="600">
          <form @submit.prevent="handleSubmit(newUser)">
            <VContainer>
              <VRow>
                <VCol cols="12">
                  <VTextField
                    label="Name"
                    placeholder="Name"
                    variant="outlined"
                    v-model="newUser.name"
                    required
                  ></VTextField>
                </VCol>
                <VCol cols="12">
                  <VTextField
                    label="Email"
                    placeholder="Email"
                    variant="outlined"
                    :rules="[EmailValidator]"
                    v-model="newUser.email"
                    required
                  ></VTextField>
                </VCol>
                <VCol cols="12">
                  <VTextField
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    variant="outlined"
                    v-model="newUser.password"
                    :rules="[PasswordValidator]"
                    required
                  ></VTextField>
                </VCol>
                <VCol cols="12">
                  <VTextField
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm Password"
                    variant="outlined"
                    v-model="newUser.password_confirmation"
                    :rules="[ConfirmPasswordValidator]"
                    required
                  ></VTextField>
                </VCol>
                <VCol cols="12">
                  <VBtn size="x-large" type="submit" color="blue-grey" class="text-none" block>
                    Register User
                  </VBtn>
                </VCol>
              </VRow>
            </VContainer>
          </form>
          <VDivider></VDivider>
          <VCol cols="12">
            <p>
              Don't have an account?
              <router-link to="/signin"> Sign in </router-link>
            </p>
            <div>
              <RouterLink to="/"> Home</RouterLink>
            </div>
          </VCol>
        </VCard>
      </transition>
    </div>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
