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

      <!-- Profile button toggles name display -->
      <button class="profile-btn" @click="toggleName">
        {{ showName ? userName : 'Profile' }}
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
      default: 'Pranali DP', // Default name if no prop is passed
    },
  },
  data() {
    return {
      showName: false, // Determines whether to show the user's name or "Profile"
    };
  },
  methods: {
    // Emit an event to notify the parent component (App.vue) that the home button was clicked
    emitHomeClicked() {
      this.$emit('home-clicked');
    },
    // Toggles between showing "Profile" and the user's name
    toggleName() {
      this.showName = !this.showName;
    },
  },
};
</script>

<style scoped>
/* Navbar Style */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px 20px;
  height: 60px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.logo {
  background-color: red;
  color: white;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 18px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-bar {
  display: flex;
  align-items: center;
  width: 350px;
  background-color: #000;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #555;
}

.search-bar input {
  flex-grow: 1;
  background-color: #000;
  color: white;
  border: none;
  outline: none;
  padding: 8px;
}

.search-bar input::placeholder {
  color: #888;
}

.search-bar button.search-button {
  background-color: #333;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-left: 5px;
}

.search-bar button.search-button:hover {
  background-color: red;
}

.buttons {
  display: flex;
  gap: 10px;
}

.home-btn,
.profile-btn {
  padding: 8px 16px;
  background-color: transparent;
  color: white;
  border: 2px solid blue;
  cursor: pointer;
  border-radius: 5px;
}

.home-btn:hover,
.profile-btn:hover {
  background-color: #555;
}
</style>
