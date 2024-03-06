<script setup lang="ts">
import router from '@/router'
import { useUsers } from '@/stores/users'
import { ref } from 'vue'

const usersStore = useUsers()
const rail = ref(true)
const drawer = ref(true)
const handleLogout = async () => {
  await usersStore.logout()
  localStorage.removeItem('token')
  router.push('/')
}
const routeToDashBoard=()=>{
  router.push('/dashboard')
}
</script>
<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/docs/images/brand-kit/v-logo.svg"
          title="Project Manger"
          nav
        >
          <template v-slot:append>
            <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail"></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="DashBoard"
            value="dashboard"
            @click.stop="routeToDashBoard()"
            active
          ></v-list-item>
          
        </v-list>
        <VList class="">
          <v-list-item
            prepend-icon="mdi-logout"
            title="LogOut"
            value="logout"
            @click.stop="handleLogout()"
          ></v-list-item>
        </VList>
      </v-navigation-drawer>
      <v-main style="height: 100vh"></v-main>
    </v-layout>
  </v-card>
</template>
