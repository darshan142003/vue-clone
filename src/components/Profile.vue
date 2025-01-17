<template>
  <div class="profile">
    <h1 class="profile-title">User Profile</h1>
    <p class="user-name">Full Name: {{ fullName }}</p>
    <!-- Other profile content -->
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      user: {
        firstname: 'John',
        lastname: 'Doe',
        // Add more user data as needed
      },
    };
  },
  computed: {
    fullName() {
      return `${this.user.firstname} ${this.user.lastname}`;
    },
  },
};
</script>

<style scoped>
.profile {
  padding: 20px;
  background-color: #121212;
  color: white;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 8px;
}

.profile-title {
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.user-name {
  font-size: 18px;
  color: #bbb;
  margin-top: 10px;
}
</style>
