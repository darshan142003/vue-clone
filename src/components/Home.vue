<template>
  <div class="home-container">
    <h1>Welcome to DsTube</h1>
    <div class="card-list">
      <Card
        thumbnail="https://via.placeholder.com/250"
        title="Sample Video 1"
        views="1.2M views"
        channel="Channel Name 1"
        description="This is a description of the video."
      />
    </div>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'Home',
  components: {
    Card,
  },
};
</script>

<style scoped>
.home-container {
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}

.card-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
