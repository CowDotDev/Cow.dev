<template>
  <div class="flex flex-col md:flex-row min-h-screen md:min-h-0">

    <!-- Header/Navigation -->
    <header class="relative z-20 flex flex-row md:flex-col md:items-center py-4 px-10 md:min-h-screen">
      <h1 class="text-cool-gray-300 text-2xl md:text-center font-medium md:w-full md:pb-4 md:mb-4 md:border-cool-gray-700 md:border-b">Cow<span class="text-cool-gray-500 text-sm font-normal">.dev</span></h1>
      <nav class="absolute sm:relative z-20 top-full sm:top-0 left-0 right-0 py-2 px-6 sm:p-0 flex flex-col sm:flex-row text-cool-gray-500 ml-auto md:flex-col md:w-full md:ml-0 space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-0 md:space-y-1 transition sm:transition-none duration-500 transform sm:transform-none sm:translate-x-0 sm:opacity-100" :class="isMobileNavOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'">
        <a href="#chat" class="flex flex-row items-center py-2 px-4 sm:py-0 sm:px-2 md:py-2 md:px-6 rounded hover:bg-cool-gray-800 hover:text-gray-300">
          <svg class="w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
          </svg>
          <span>Chat</span>
        </a>
        <a href="#portfolio" class="flex flex-row items-center py-2 px-4 sm:py-0 sm:px-2 md:py-2 md:px-6 rounded hover:bg-cool-gray-800 hover:text-gray-300">
          <svg class="w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
          <span>Portfolio</span>
        </a>
      </nav>
      <button @click="toggleMobileNav" class="sm:hidden ml-auto text-cool-gray-500 focus:outline-none rounded px-1 hover:bg-gray-800 hover:text-gray-300">
        <svg class="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
        </svg>
      </button>
    </header>
    <!-- Small Screen Header Border Line -->
    <div class="md:hidden w-1/2 mx-auto pb-8 border-cool-gray-700 border-t"></div>

    <div class="flex-grow md:min-h-screen pb-4 md:py-4 px-6">
      <!-- Mobile Nav Backdrop -->
      <div @click="toggleMobileNav" class="fixed sm:hidden z-10 inset-0 bg-cool-gray-900 duration-500 transform sm:translate-x-0" :class="isMobileNavOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'"></div>

      <!-- Main Content -->
      <!-- Transition Main Content to Fade Out when Mobile Nav Shown -->
      <main class="transition duration-500 sm:opacity-100" :class="isMobileNavOpen ? 'opacity-0' : 'opacity-100'">
        <div class="min-h-56 text-gray-300 font-medium bg-cool-gray-800 rounded shadow-2xl px-4 py-2">
          <p>Test</p>
        </div>
      </main>
    </div>
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