<template>
  <nav class="p-4 bg-yellow-400 text-black flex justify-between">
    <router-link to="/">Home</router-link>
    <div class="space-x-4 text-black">
      <router-link to="/signin">Sign In</router-link>
      <router-link to="/signup">Sign Up</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script setup></script>
