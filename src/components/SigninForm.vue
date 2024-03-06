<script setup lang="ts">
import { ref } from 'vue'
import { EmailValidator } from '../validation'
import type { oldUser } from '@/user'
import { useUsers } from '@/stores/users'
import router from '@/router'
const user = ref({ email: '', password: '' })
const showCard = ref(false)
const usersStore = useUsers()

const handleSubmit = async (user: oldUser) => {
  const result = await usersStore.login(user)
  console.log(result)
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
        <VCard v-if="showCard" title="User Login" class="w-100 pa-8" max-width="600">
          <form @submit.prevent="handleSubmit(user)">
            <VContainer>
              <VRow>
                <VCol cols="12">
                  <VTextField
                    label="Email"
                    type="email"
                    placeholder="Email"
                    variant="outlined"
                    :rules="[EmailValidator]"
                    v-model="user.email"
                    required
                  ></VTextField>
                </VCol>
                <VCol cols="12">
                  <VTextField
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    variant="outlined"
                    v-model="user.password"
                    required
                  ></VTextField>
                </VCol>
                <VCol cols="12">
                  <VBtn size="x-large" type="submit" color="blue-grey" class="text-none" block>
                    Log In
                  </VBtn>
                </VCol>
                <VDivider></VDivider>
                <VCol cols="12">
                  <p>
                    Don't have an account?
                    <RouterLink to="/signup"> Sign up </RouterLink>
                  </p>
                  <div>
                    <RouterLink to="/"> Home</RouterLink>
                  </div>
                </VCol>
              </VRow>
            </VContainer>
          </form>
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
