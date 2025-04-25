<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-200">
    <form
      class="bg-gray-100 p-6 rounded shadow-md w-full max-w-sm"
      @submit.prevent="handleSignin"
    >
      <h2 class="text-2xl font-bold mb-4">Sign In</h2>

      <div class="mb-3">
        <label class="block text-sm font-medium">Email</label>
        <input
          v-model="form.email"
          type="email"
          placeholder="Email"
          class="w-full p-2 border rounded mt-1"
          required
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium">Password</label>
        <input
          v-model="form.password"
          type="password"
          placeholder="Password"
          class="w-full p-2 border rounded mt-1"
          required
        />
      </div>

      <button
        type="submit"
        class="w-full bg-green-600 hover:bg-blue-700 text-white p-2 rounded"
        :disabled="loading"
      >
        {{ loading ? "Signing in..." : "Sign In" }}
      </button>

      

      <p v-if="error" class="text-red-500 mt-4 text-sm">
        {{ error }}
      </p>
         <p class="mt-6 text-sm text-center">
        Don’t have an account?
        <router-link to="/signup" class="text-blue-600 hover:underline">
          Sign up
        </router-link>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  email: '',
  password: '',
})

const loading = ref(false)
const error = ref('')

// This is where you integrate backend login
const handleSignin = async () => {
  loading.value = true
  error.value = ''

  try {
    // 🔁 Replace with real API call
    console.log('Sending signin data:', form.value)

    // Example:
    // const response = await axios.post('/api/signin', form.value)
    // const token = response.data.token
    // localStorage.setItem('token', token)

      // ✅ Navigate to home page
      router.push('/')
  } catch (err) {
    error.value = 'Signin failed. Please check your credentials.'
    console.error(err)
  } finally {
    loading.value = false
  }
}
</script>
