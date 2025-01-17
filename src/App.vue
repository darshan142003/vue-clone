<template>
  <div id="app">
    <!-- Header with dynamic buttons -->
    <Header :show-home-profile="showHomeProfile" @home-clicked="homeClicked" />
    <router-view @expanded-card="onExpandedCard" /> <!-- Listen for expanded-card event -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showHomeProfile: false, // Track if Home and Profile buttons should be displayed
    };
  },
  methods: {
    // Method to update the header when an expanded card is shown
    onExpandedCard() {
      this.showHomeProfile = true; // Show Home and Profile buttons when expanded card is clicked
    },
    // Method to handle the home button click and redirect
    homeClicked() {
      this.showHomeProfile = false; // Hide the home button
      this.$router.push({ name: 'home' }); // Navigate to the home page
    },
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
