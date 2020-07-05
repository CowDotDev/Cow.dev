<template>
  <div class="flex flex-col md:flex-row min-h-screen md:min-h-0">
    <!-- Header/Navigation -->
    <HeaderNavigation />
    <!-- Small Screen Header Border Line -->
    <div class="md:hidden w-1/2 mx-auto pb-6 border-cool-gray-700 border-t"></div>

    <!-- Content Area -->
    <div class="flex-grow md:min-h-screen pb-4 md:py-4 px-6">
      <!-- Mobile Nav Backdrop -->
      <div @click="toggleMobileNav" class="fixed sm:hidden z-10 inset-0 bg-cool-gray-900 duration-500 transform sm:translate-x-0" :class="isMobileNavOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'"></div>

      <!-- Main Content -->
      <main class="transition duration-500 sm:opacity-100" :class="isMobileNavOpen ? 'opacity-0' : 'opacity-100'">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import HeaderNavigation from './components/molecules/HeaderNavigation.vue';

export default {
  name: "Cow.dev",
  components: {
    HeaderNavigation
  },
  data() {
    return {}
  },
  computed: mapState(['isMobileNavOpen'])
}
</script>