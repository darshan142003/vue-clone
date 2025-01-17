<template>
  <div v-if="video" class="view">
    <h1 class="video-title">{{ video.title }}</h1>

    <!-- Views Count with commas -->
    <p class="video-views">{{ formatNumber(video.views) }} views</p>

    <!-- Display tags based on like count -->
    <p class="video-tags" v-if="video.likes > 15">Trending</p>
    <p class="video-tags" v-else-if="video.likes > 10">Popular</p>

    <!-- Channel Name -->
    <p class="channel-name">{{ video.creator.firstname }} {{ video.creator.lastname }}</p>

    <!-- Like/Dislike Buttons and Count -->
    <div class="like-buttons">
      <button @click="incrementLike" class="like-button">Like ({{ video.likes }})</button>
      <button @click="decrementLike" class="dislike-button">Dislike</button>
    </div>

    <!-- Comment Section -->
    <div class="comment-section">
      <textarea v-model="comment" placeholder="Add a comment..." class="comment-input"></textarea>
    </div>

    <!-- Navigation Buttons -->
    <div class="navigation-buttons">
      <button @click="goToHome" class="home-button">Home</button>
      <button @click="goToProfile" class="profile-button">Profile</button>
    </div>
  </div>

  <div v-else>
    <p>Video not found.</p>
  </div>
</template>

<script>
import videoData from '../assets/videos.json'; // Import the video data

export default {
  name: 'View',
  data() {
    return {
      video: null, // Store the video data
      comment: '', // Store the user's comment
    };
  },
  mounted() {
    // Get the id from the route parameters
    const videoId = this.$route.params.id;

    // Find the video by id
    this.video = videoData.find((video) => video.id === videoId);

    // If the video is not found, handle it (optional)
    if (!this.video) {
      console.error('Video not found');
    }
  },
  methods: {
    incrementLike() {
      this.video.likes++; // Increment like count
    },
    decrementLike() {
      if (this.video.likes > 0) {
        this.video.likes--; // Decrement like count
      }
    },
    goToHome() {
      this.$router.push('/');
    },
    goToProfile() {
      this.$router.push('/profile');
    },
    formatNumber(value) {
      return new Intl.NumberFormat().format(value);
    },
  },
};
</script>

<style scoped>
.view {
  padding: 20px;
  color: white;
  background-color: #121212;
  margin: 40px auto;
  max-width: 900px;
  border-radius: 8px;
}

.video-title {
  font-size: 24px;
  margin-top: 20px;
  font-weight: bold;
}

.video-views {
  font-size: 16px;
  margin-top: 10px;
  color: #bbb;
}

.video-tags {
  font-size: 16px;
  color: #ff6347;
  margin-top: 10px;
}

.channel-name {
  font-size: 18px;
  margin-top: 10px;
  color: #bbb;
}

.like-buttons {
  margin-top: 20px;
  display: flex;
  gap: 20px;
}

.like-button, .dislike-button {
  padding: 10px 20px;
  background-color: #1db954;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.like-button:hover, .dislike-button:hover {
  background-color: #1aa04e;
}

.comment-section {
  margin-top: 30px;
}

.comment-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #333;
  background-color: #222;
  color: white;
  height: 100px;
}

.comment-input::placeholder {
  color: #888;
}
</style>
