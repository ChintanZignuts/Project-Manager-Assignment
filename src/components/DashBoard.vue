<script setup lang="ts">
import router from '@/router'
import { useUsers } from '@/stores/users'

const usersStore = useUsers()
const handleLogout = async () => {
  await usersStore.logout()
  localStorage.removeItem('token')
  router.push('/')
}
</script>
<template>
  <h1>
    <VBtn color="warning" @click="handleLogout">Log out</VBtn>
  </h1>
</template>
<style scoped></style>
