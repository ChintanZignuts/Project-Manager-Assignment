<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const password_confirmation = ref('')
</script>
<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <VCard class="mx-auto pa-10" max-width="600" title="User Registration">
      <VContainer>
        <VRow>
          <VCol cols="12">
            <VTextField
              label="Name"
              placeholder="Name"
              variant="outlined"
              v-model="name"
            ></VTextField>
          </VCol>
          <VCol cols="12">
            <VTextField
              label="Email"
              placeholder="Email"
              variant="outlined"
              v-model="email"
            ></VTextField>
          </VCol>
          <VCol cols="12">
            <VTextField
              label="Password"
              placeholder="Enter your password"
              variant="outlined"
              v-model="password"
            ></VTextField>
          </VCol>
          <VCol cols="12">
            <VTextField
              label="Confirm Password"
              placeholder="Confirm Password"
              variant="outlined"
              v-model="password_confirmation"
            ></VTextField>
          </VCol>
          <v-col cols="12">
            <v-btn size="x-large" type="submit" color="blue-grey" block>Register User</v-btn>
          </v-col>
          <v-divider></v-divider>
        </VRow>
      </VContainer>
    </VCard>
  </div>
</template>
<style scoped></style>
