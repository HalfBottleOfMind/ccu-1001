<template>
  <div v-if="loggedIn" class="flex flex-col flex-1">
    <Header @loggedOut="logout" />
    <div class="flex flex-1">
      <Sidebar :currentPage="currentPage" @navigate="setCurrentPage"/>
      <div class="bg-gray-light w-full">
        <ExampleTabs v-if="currentPage === 'example tabs'"/>
        <ExampleCards v-if="currentPage === 'example cards'"/>
      </div>
    </div>
  </div>
  <div v-else class="bg-gray-dark flex flex-1 justify-center items-center">
    <Card title="Please log in">
      <form @submit="login" class="flex flex-col items-end" >
        <input v-model="credentials.login" placeholder="Login" name="login" class="input-text mb-2" />
        <input v-model="credentials.password" placeholder="Password" type="password" name="password" class="input-text mb-2" />
        <Button :callback="login">Log in</Button>
      </form>
    </Card>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import {reactive, ref} from 'vue'
import {init} from "@/api/general";
import auth from '@/api/auth'
import ExampleTabs from "@/components/pages/ExampleTabs";
import ExampleCards from "@/components/pages/ExampleCards";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default {
  name: 'App',
  components: {
    Card,
    ExampleCards,
    ExampleTabs,
    Header,
    Sidebar,
    Button,
  },
  setup() {
    // Navigation
    const defaultPage = 'example tabs'
    const currentPage = ref(defaultPage)

    function setCurrentPage(page) {
      currentPage.value = page
    }

    // Auth
    const loggedIn = ref(true)
    const credentials = reactive({})

    function login() {
      if (auth.login(credentials)) {
        loggedIn.value = true
        credentials.login = ''
        credentials.password = ''
      }
    }
    function logout() {
      if (auth.logout()) {
        loggedIn.value = false
      }
    }

    // Initial setup
    init()

    return {
      // Navigation
      currentPage,
      setCurrentPage,
      // Auth
      loggedIn,
      credentials,
      login,
      logout,
    }
  }
}
</script>
