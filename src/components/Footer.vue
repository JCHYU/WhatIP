<template>
  <footer class="footer">
    <div class="footer-content">
      <p>© 2025-{{ currentYear }} FunnaVerse Studio 保留所有权利</p>
      <p class="footer-links">
        <a href="#" @click.prevent="gotoMain">前往FunnaVerse网页</a>
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentYear = new Date().getFullYear()

const gotoMain = () => {
  window.open('https://www.funnaverse.com/', '_blank')
}
</script>

<style scoped>
.footer {
  background-color: var(--bg-color);
  color: var(--text-color);
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid rgba(128, 128, 128, 0.2);
}

.footer-content p {
  margin: 5px 0;
  font-size: 14px;
}

.footer-links a {
  color: var(--text-color);
  text-decoration: none;
  margin: 0 8px;
}

.footer-links a:hover {
  text-decoration: underline;
  color: #409eff;
}
</style>