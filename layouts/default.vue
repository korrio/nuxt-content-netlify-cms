<template>
  <div>
    <header class="max-w-3xl mx-auto">
      <nav class="p-4">
        <ul class="flex space-x-2">
          <li>
            <nuxt-link to="/" class="inline-block px-2 py-1 text-gray-500">
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/blog" class="inline-block px-2 py-1 text-gray-500">
              Blog
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
    <nuxt />
  </div>
</template>

<style scoped>
.nuxt-link-exact-active {
  @apply text-indigo-600;
}
</style>

<style>
html,
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html.dark-mode body {
  background-color: #091a28;
  color: #f2f8f7;
}
</style>
