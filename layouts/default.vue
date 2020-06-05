<template>
  <div>
    <header>
      <nav class="m-4">
        <ul class="flex space-x-4">
          <li>
            <nuxt-link
              to="/"
              class="inline-block px-4 py-2 bg-gray-200 rounded"
            >
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/blog"
              class="inline-block px-4 py-2 bg-gray-200 rounded"
            >
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
  @apply bg-gray-600 text-white;
}
</style>

<style>
html,
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
