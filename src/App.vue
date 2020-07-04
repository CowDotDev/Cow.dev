<template>
  <div class="flex flex-col md:flex-row">
    <header class="relative z-20 flex flex-row md:flex-col md:items-center bg-gray-700 shadow-md md:shadow-inner py-2 px-6 md:p-0 md:h-screen">
      <h1 class="text-gray-200 text-2xl font-medium md:py-2 md:px-10 md:mb-4 md:border-gray-600 md:border-b">Cow<span class="text-cool-gray-400 text-sm font-normal">.dev</span></h1>
      <nav class="absolute sm:relative z-20 top-full sm:top-0 left-0 right-0 bg-gray-700 shadow-md sm:shadow-none py-2 px-6 sm:p-0 flex flex-col sm:flex-row text-cool-gray-400 ml-auto md:flex-col md:w-full md:ml-0 space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-0 md:space-y-1 transition sm:transition-none duration-300 transform sm:transform-none sm:translate-x-0 sm:opacity-100" :class="isMobileNavOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'">
        <a href="#chat" class="flex flex-row items-center py-2 px-2 sm:py-0 md:py-2 md:px-6 rounded md:rounded-none hover:bg-gray-800 hover:text-gray-200">
          <svg class="w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
          </svg>
          <span>Chat</span>
        </a>
        <a href="#portfolio" class="flex flex-row items-center py-2 px-2 sm:py-0 md:py-2 md:px-6 rounded md:rounded-none hover:bg-gray-800 hover:text-gray-200">
          <svg class="w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
          <span>Portfolio</span>
        </a>
      </nav>
      <button @click="toggleMobileNav" class="sm:hidden ml-auto text-cool-gray-400 focus:outline-none rounded px-1 hover:bg-gray-800 hover:text-gray-200">
        <svg class="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
        </svg>
      </button>
    </header>
    <div @click="toggleMobileNav" class="fixed sm:hidden z-10 inset-0 bg-black transition duration-300 transform sm:translate-x-0" :class="isMobileNavOpen ? 'translate-x-0 opacity-25' : '-translate-x-full opacity-0'"></div>
    <main class="flex-grow py-4 px-6 md:shadow-md">
      <p>Test</p>
    </main>
  </div>
</template>

<script>
export default {
  name: "Cow.dev",
  data() {
    return {
      isMobileNavOpen: false
    }
  },
  methods: {
    toggleMobileNav: function() {
      this.isMobileNavOpen = !this.isMobileNavOpen;
    }
  }
}
</script>