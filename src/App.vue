
<template>
  <div class="resume">
    <!-- <div style="font-size: 20px;">
      <header >
        <router-link style="text-decoration: none; font-weight: 600; padding:10px; " to="/" :class=" isActive('/')? 'activelink' : 'router-link' " @click="makeLinkActive('/')">Home</router-link>
        <router-link style="text-decoration: none; font-weight: 600;" to="/about" :class=" isActive('/about')? 'activelink' : 'router-link' " @click="makeLinkActive('/about')">About</router-link>
        
      </header>
    </div> -->
    <!-- <router-view></router-view> -->
    <router-view />
  </div>  
</template>
<script>
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

  export default {
  name: "App",
  data() {
    return {
      test: 1,
    };
  },
  watch: {
    to() {},
  },
  created() {
    setTimeout(function () {
      this.test = 2;
    });
  },
  // methods: {
  //   isActive(path) {
  //     return this.$route.path === path
  //   },
  //   makeLinkActive(path) {
  //     this.$router.push(path)
  //   }
  // }
};
</script>

<style>
  /* .activelink{
    color: green;
  }
  .activelink:hover{
    color: green;
  }
  .router-link{
    color: black;
  }
    .router-link:hover{
        color: green;
  } */
</style>
