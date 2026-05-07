<template>
  <header class="header">
    <div class="logo_div">
      <el-image class="logo" src="/logo.png"></el-image>
      <span class="logo_text">What IP | What is my IP</span>
    </div>
    <div class="right-buttons">
      <el-tooltip
        :effect="isDark ? 'light' : 'dark'"
        :content="isDark ? '白天模式' : '夜间模式'"
        placement="bottom-start"
      >
        <el-button circle @click="toggleDark" class="dark_choice">
          <el-icon>
            <i-ep-sunny v-if="isDark" />
            <i-ep-moon v-else />
          </el-icon>
        </el-button>
      </el-tooltip>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { UserFilled } from '@element-plus/icons-vue'

const router = useRouter()
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

onMounted(() => {
  theme_initer()
})
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: var(--header-color);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 100;
}

.logo_div {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  height: 40px;
  width: auto;
}

.logo_text {
  color: var(--logotext-color);
  font-size: 32px;
  font-weight: bold;
  white-space: nowrap;
  font-family: serif;
}
</style>