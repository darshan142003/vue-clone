<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer /> <!-- Footer component placed here -->
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'; // Import Footer component

export default {
  name: 'App',
  components: {
    Header,
    Footer, // Register Footer component
  },
};
</script>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #121212; /* Dark background */
  color: white; /* Light text */
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the app stretches to full height */
}

h1 {
  color: white;
}

footer {
  margin-top: auto; /* Push footer to the bottom of the page */
  background-color: #181818; /* Darker shade for footer */
  color: white;
  text-align: center;
  padding: 10px 0;
}

footer p {
  margin: 0;
  font-size: 14px;
  color: #bbb;
}
</style>
