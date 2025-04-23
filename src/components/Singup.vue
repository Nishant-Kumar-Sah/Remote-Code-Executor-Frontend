<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-200">
    <form
      class="bg-gray-100 p-6 rounded shadow-md w-full max-w-sm"
      @submit.prevent="handleSignup"
    >
      <h2 class="text-2xl font-bold mb-4">Sign Up</h2>

      <div class="mb-3">
        <label class="block text-sm font-medium">Name</label>
        <input
          v-model="form.name"
          type="text"
          class="w-full p-2 border rounded mt-1"
          required
        />
      </div>

      <div class="mb-3">
        <label class="block text-sm font-medium">Email</label>
        <input
          v-model="form.email"
          type="email"
          class="w-full p-2 border rounded mt-1"
          required
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium">Password</label>
        <input
          v-model="form.password"
          type="password"
          class="w-full p-2 border rounded mt-1"
          required
        />
      </div>

      <button
        type="submit"
        class="w-full bg-green-600 hover:bg-blue-700 text-white p-2 rounded"
        :disabled="loading"
      >
        {{ loading ? "Signing up..." : "Sign Up" }}
      </button>

      <p v-if="error" class="text-red-500 mt-4 text-sm">
        {{ error }}
      </p>
      <p class="mt-6 text-sm text-center">
        Already have an account?
        <router-link to="/signin" class="text-blue-600 hover:underline">
          Sign In
        </router-link>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  password: '',
})

const loading = ref(false)
const error = ref('')

// This function is where the backend logic goes
const handleSignup = async () => {
  loading.value = true
  error.value = ''

  try {
    // 🔁 Replace this with your actual API call
    console.log('Sending signup data:', form.value)

    // Example:
    // const response = await axios.post('/api/signup', form.value)

   
     // ✅ Navigate to home page
     router.push('/')

  } catch (err) {
    // ❌ Handle errors from the backend
    error.value = 'Signup failed. Please try again.'
    console.error(err)
  } finally {
    loading.value = false
  }
}
</script>
