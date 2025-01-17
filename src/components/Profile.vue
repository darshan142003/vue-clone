<template>
  <div class="navbar">
    <!-- Logo Section -->
    <div class="logo">
      <span>DsTube</span>
    </div>

    <!-- Search Bar -->
    <div class="search-bar">
      <input type="text" placeholder="Search..." />
      <button class="search-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="white"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.3 1.658a5.5 5.5 0="
          />
        </svg>
      </button>
    </div>

    <!-- Profile Section and Home Button -->
    <div class="buttons">
      <!-- Only show home button when showHomeProfile is true -->
      <button v-if="showHomeProfile" @click="emitHomeClicked" class="home-btn">Home</button>
      <!-- Display name dynamically inside the Profile button -->
      <button class="profile-btn" @click="goToProfile">
        Profile {{ fullName }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    showHomeProfile: {
      type: Boolean,
      required: true,
    },
    userName: {
      type: String,
      default: 'Pranali', // Default name if no prop is passed
    },
  },
  computed: {
    // Compute the full name dynamically
    fullName() {
      return this.userName; // Replace this logic if needed
    },
  },
  methods: {
    // Emit an event to notify the parent component (App.vue) that the home button was clicked
    emitHomeClicked() {
      this.$emit('home-clicked');
    },
    // Redirect to the profile page
    goToProfile() {
      this.$router.push('/profile'); // Navigates to the profile route
    },
  },
};
</script>

<style scoped>
/* Same as before */
</style>
