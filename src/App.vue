<template>
  <Header />
  <div class="flex flex-1 h-full">
    <Sidebar :currentPage="currentPage" @navigate="setCurrentPage" />
    <div class="bg-gray-light w-full">
      <Index v-if="currentPage === 'index'" />
      <Contacts v-if="currentPage === 'contacts'" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Index from "@/components/pages/Index";
import Contacts from "@/components/pages/Contacts";
import { ref } from 'vue'
import { init } from "@/api/general";

export default {
  name: 'App',
  components: {
    Contacts,
    Index,
    Header,
    Sidebar,
  },
  setup() {
    // Navigation
    const defaultPage = 'index'
    const currentPage = ref(defaultPage)

    function setCurrentPage(page) {
      currentPage.value = page
    }

    // Initial setup
    init()

    return {
      currentPage,
      setCurrentPage,
    }
  }
}
</script>
