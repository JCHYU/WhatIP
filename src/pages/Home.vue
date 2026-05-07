<template>
  <div class="app-container">
    <Header />
    <main class="main">
      <h1>该网站正在施工…</h1>
      <p v-for="i in 20" :key="i">{{ i }}</p>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import router from '@/router'
import { ref, onMounted } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const currentYear = new Date().getFullYear()
const isDark = ref(false)

const toggleDark = () => {
  if (isDark.value) {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
    isDark.value = false
  } else {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    isDark.value = true
  }
}

const theme_initer = () => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark')
    isDark.value = false
  } else {
    document.documentElement.classList.add('dark')
    isDark.value = true
    if (!savedTheme) {
      localStorage.setItem('theme', 'dark')
    }
  }
}

const goto_register = () => {
  router.push('/register')
}

const goto_login = () => {
  router.push('/login')
}

onMounted(() => {
  document.title = "What is my IP address? | whatip.top"
  theme_initer()
})
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.main {
  flex: 1;
  padding: 20px;
  text-align: center;
  background-color: var(--bg-color);
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
}

h1 {
  color: var(--text-color);
}

p {
  color: var(--text-color);
}
</style>
