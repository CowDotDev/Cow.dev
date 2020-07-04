<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="-ml-2 mr-2 flex items-center md:hidden">
            <!-- Mobile menu button -->
            <button @click="toggleMobileNav" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
              <!-- Icon when menu is closed. -->
              <svg v-if="!isMobileNavOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <!-- Icon when menu is open. -->
              <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div class="flex-shrink-0 flex items-center">
            <h1 class="text-2xl text-white font-medium">Cow<span class="text-sm text-gray-400">.dev</span></h1>
          </div>
          <div class="hidden md:ml-6 md:flex md:items-center">
            <a href="#" class="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Home</a>
          </div>
        </div>
      </div>
    </div>

    <!--
      Mobile menu, toggle classes based on menu state.

      Menu open: "block", Menu closed: "hidden"
    -->
    <div class="md:hidden" :class="{ block: isMobileNavOpen, hidden: !isMobileNavOpen }">
      <div class="px-2 pt-2 pb-3 sm:px-3">
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Home</a>
      </div>
    </div>
  </nav>
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