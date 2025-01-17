<template>
  <div class="home">
    <!-- Add space between the navbar and the video list -->
    <div class="video-list">
      <!-- Loop through the 'videos' array and pass each video to the Card component -->
      <Card
        v-for="video in videos"
        :key="video.id"
        :id="video.id"
        :thumbnail="video.imgSrc"
        :title="video.title"
        :views="video.views"
        :creator="video.creator"
        :description="video.desc"
        @card-clicked="handleCardClicked"  
      />
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'; // Import Card component
import videoData from '../assets/videos.json'; // Import video data

export default {
  name: 'Home',
  components: {
    Card, // Ensure the Card component is registered here
  },
  data() {
    return {
      videos: videoData, // Assign the imported video data
    };
  },
  methods: {
    handleCardClicked() {
      this.$emit('expanded-card'); // Emit the expanded-card event to parent
    },
  },
};
</script>

<style scoped>
/* Add spacing between the navbar and the first card */
.video-list {
  display: flex;
  flex-direction: column;  /* Stack the cards vertically */
  gap: 20px;  /* Space between cards */
  padding: 20px 10px;
  margin-top: 40px; /* Adjust space between navbar and cards */
}

/* Ensure each card takes the full width */
.video-list .card {
  width: 100%;  /* Full width for each card */
}

/* For larger screens, still ensure full width for each card */
@media (min-width: 768px) {
  .video-list .card {
    width: 100%;  /* Keep each card taking the full width */
  }
}
</style>
