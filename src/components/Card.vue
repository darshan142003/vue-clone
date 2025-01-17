<template>
  <div class="card" @click="goToExtendedCard">
    <img :src="thumbnail" alt="Video thumbnail" class="thumbnail" />
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p class="views">{{ views }} views</p>
      <div class="card-footer">
        <p class="channel">{{ creator.firstname }} {{ creator.lastname }}</p>
        <p class="description">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    id: { // Add id prop
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      required: true,
    },
    creator: {
      type: Object,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  methods: {
    // Handle redirect to the extended card view
    goToExtendedCard() {
      // Emit an event to notify the parent that the card was clicked
      this.$emit('card-clicked');
      
      // Pass the video id to the router to navigate to the expanded view
      this.$router.push({ name: 'extendedCard', params: { id: this.id } });
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  background-color: #181818;
  padding: 10px;
  border-radius: 8px;
  color: white;
  gap: 15px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
}

.thumbnail {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}

.card-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

h3 {
  margin: 0;
  font-size: 18px;
}

.views {
  font-size: 14px;
  margin: 5px 0;
}

.card-footer {
  margin-top: auto;
  margin-bottom: 10px;
}

.channel {
  font-size: 14px;
  margin: 5px 0;
}

.description {
  font-size: 14px;
  color: #bbb;
  margin-top: 5px;
}
</style>
