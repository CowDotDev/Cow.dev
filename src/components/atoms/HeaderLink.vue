<template>
  <a :href="link" class="flex flex-row items-center py-2 px-4 sm:py-0 sm:px-2 md:py-2 md:px-6 rounded hover:bg-cool-gray-800 hover:text-gray-300">
    <span class="w-6 mr-2">
      <component :is="iconPath" />
    </span>
    <span>{{ label }}</span>
  </a>
</template>

<script>
export default {
  name: 'HeaderLink',
  props: {
    label: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    isIcon() {
      return typeof this.icon !== 'undefined' && this.icon !== ''
    },
    iconPath() {
      return `icon-${this.icon}`;
    }
  }
}
</script>
