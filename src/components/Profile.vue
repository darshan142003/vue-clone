<template>
  <div class="profile">
    <h2>Edit Profile</h2>
    <form @submit.prevent="saveProfile">
      <TextField v-model="userName" label="Full Name" />
      <Button text="Save" />
    </form>
  </div>
</template>

<script>
import TextField from './TextField.vue';
import Button from './Button.vue';

export default {
  components: {
    TextField,
    Button
  },
  data() {
    return {
      userName: ''
    };
  },
  methods: {
    saveProfile() {
      alert(`Profile saved with name: ${this.userName}`);
    }
  }
};
</script>

<style scoped>
.profile {
  padding: 20px;
}

form {
  max-width: 500px;
  margin: 0 auto;
}

h2 {
  text-align: center;
}
</style>
