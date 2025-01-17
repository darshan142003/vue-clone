<template>
  <div v-if="video" class="expanded-card">
    <!-- Video Cover Image (no background, just image) -->
    <div class="video-cover">
      <img :src="video.imgSrc" alt="Video thumbnail" class="cover-image" />
    </div>

    <!-- Video Title -->
    <h1 class="video-title">{{ video.title }}</h1>

    <!-- Views Count with commas -->
    <p class="video-views">{{ formatNumber(video.views) }} views</p>

    <!-- Channel Name -->
    <p class="channel-name">{{ video.creator.firstname }} {{ video.creator.lastname }}</p>

    <!-- Comment Section -->
    <div class="comment-section">
      <textarea id="comment" v-model="comment" placeholder="Add a comment..." class="comment-input"></textarea>
    </div>
  </div>

  <div v-else>
    <p>Video not found.</p>
  </div>
</template>

<script>
import videoData from '../assets/videos.json'; // Import the video data

export default {
  name: 'ExpandedCard',
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
    goToHome() {
      this.$router.push('/');
    },
    goToProfile() {
      this.$router.push('/profile');
    },
    // Format the number with commas
    formatNumber(value) {
      return new Intl.NumberFormat().format(value);
    },
  },
};
</script>

<style scoped>
.expanded-card {
  padding: 20px;
  color: white;
  background-color: #121212; /* Set the background to black */
  margin: 40px auto; /* Added margin to add space between header and the expanded card */
  max-width: 900px;
  border-radius: 8px;
}

/* Video Cover Image (no background) */
.video-cover .cover-image {
  width: 100%; /* Full width */
  height: 400px; /* Adjust height as per preference */
  object-fit: cover;
  border-radius: 8px;
}

/* Video Title (Smaller font size) */
.video-title {
  font-size: 22px; /* Smaller font size */
  margin-top: 20px;
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7); /* Added shadow for better visibility */
}

/* Views Count */
.video-views {
  font-size: 16px;
  margin-top: 10px;
  color: #bbb;
}

/* Channel Name */
.channel-name {
  font-size: 18px;
  margin-top: 10px;
  color: #bbb;
}

/* Comment Section */
.comment-section {
  margin-top: 30px;
  margin-bottom: 20px; /* Ensures it's not too close to the bottom */
}

.comment-input {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #333;
  background-color: #222;
  color: white;
  height: 40px; /* Reduced height of the comment box */
  resize: none;
  font-size: 16px; /* Same font size as the rest of the text */
  font-weight: normal; /* Same font weight as the rest of the text */
}

.comment-input::placeholder {
  color: #bbb; /* Placeholder color */
  font-size: 16px; /* Same font size as other text */
  font-weight: normal; /* Same font weight as the other text */
  font-style: italic;
}

.comment-input:focus {
  border-color: #1db954;
  outline: none;
  background-color: #333;
}

.comment-input::-webkit-scrollbar {
  width: 8px;
}

.comment-input::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 10px;
}

.comment-input::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
</style>
