<script setup lang="ts"></script>

<template>
  <v-container class="d-flex flex-column align-center justify-center" fluid>
    <div class="h-50 w-66 d-flex flex-column align-center justify-center">
      <v-row align="center" justify="center">
        <v-col cols="12">
          <div class="text-center">
            <h1>Welcome to Our Project Management Website</h1>
            <p>This is the best place to manage your projects efficiently and effectively.</p>
          </div>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" class="flex-row">
        <v-col cols="12">
          <div class="text-center">
            <VBtn color="grey" class="rounded-xl ma-5 text-black text-none" size="x-large"
              >Sign In</VBtn
            >
            <VBtn color="white" class="rounded-xl text-black text-none" size="x-large"
              >Sign Up</VBtn
            >
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<style scoped>
.v-container {
  background: url('../assets/background2.jpg') no-repeat center center;
  background-size: cover;
  height: 100vh;
  color: white;
}
h1 {
  font-family: 'Arial', sans-serif;
  font-size: 3rem;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

p {
  font-family: 'Arial', sans-serif;
  font-size: 1.2em;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
</style>
