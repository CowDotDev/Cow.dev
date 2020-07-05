<template>
  <header class="relative z-20 flex flex-row md:flex-col md:items-center py-4 px-10 md:min-h-screen">
    <!-- Header Logo -->
    <h1 class="text-cool-gray-300 text-2xl md:text-center font-medium md:w-full md:pb-4 md:mb-4 md:border-cool-gray-700 md:border-b cursor-pointer transition duration-300 hover:text-yellow-400">
      <a href="/">Cow<span class="text-cool-gray-500 text-sm font-normal">.dev</span></a>
    </h1>

    <!-- Header Navigation Links -->
    <nav class="absolute sm:relative z-20 top-full sm:top-0 left-0 right-0 py-2 px-6 sm:p-0 flex flex-col sm:flex-row text-cool-gray-500 ml-auto md:flex-col md:w-full md:ml-0 space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-0 md:space-y-1 transition sm:transition-none duration-500 transform sm:transform-none sm:translate-x-0 sm:opacity-100" :class="isMobileNavOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'">
      <HeaderLink v-for="link in links" :key="link.label" :label="link.label" :link="link.href" :icon="link.icon" />
    </nav>

    <!-- Mobile Nav Menu Button -->
    <MobileMenu @click="toggleMobileNav" />
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import HeaderLink from '../atoms/HeaderLink.vue';
import MobileMenu from '../atoms/MobileMenu.vue';

export default {
  name: 'HeaderNavigation',
  components: {
    HeaderLink,
    MobileMenu
  },
  data() {
    return {
      links: [
        {
          href: '/',
          label: 'Chat',
          icon: 'chat'
        },
        {
          href: '/portfolio',
          label: 'Portfolio',
          icon: 'code'
        }
      ]
    }
  },
  computed: mapState(['isMobileNavOpen']),
  methods: mapActions(['toggleMobileNav'])
}
</script>
