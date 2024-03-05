<script setup lang="ts"></script>

<template>
  <VContainer class="d-flex flex-column align-center justify-center" fluid>
    <div class="h-50 w-66 d-flex flex-column align-center justify-center">
      <VRow align="center" justify="center">
        <VCol cols="12">
          <div class="text-center">
            <h1>Welcome to Our Project Management Website</h1>
            <p>This is the best place to manage your projects efficiently and effectively.</p>
          </div>
        </VCol>
      </VRow>
      <VRow align="center" justify="center" class="flex-row">
        <VCol cols="12">
          <div class="text-center">
            <RouterLink to="/signup">
              <VBtn color="white" class="rounded-xl text-black text-none" size="x-large">
                Sign Up
              </VBtn>
            </RouterLink>
            <RouterLink to="/signin">
              <VBtn color="grey" class="rounded-xl ma-5 text-black text-none" size="x-large">
                Sign In
              </VBtn>
            </RouterLink>
          </div>
        </VCol>
      </VRow>
    </div>
  </VContainer>
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
