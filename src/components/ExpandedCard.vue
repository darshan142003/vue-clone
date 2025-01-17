<template>
  <div v-if="video" class="expanded-card">
    <!-- Video Cover Image (no background, just image) -->
    <div class="video-cover">
      <img :src="video.imgSrc" alt="Video thumbnail" class="cover-image" />
    </div>

    <!-- Video Title -->
    <h1 class="video-title">{{ video.title }}</h1>

    <!-- Views Count -->
    <p class="video-views">
      {{ video.views }} views
      <span v-if="likeCount > 10" class="tag popular">Popular</span>
      <span v-if="likeCount > 15" class="tag trending">Trending</span>
    </p>

    <!-- Channel Name -->
    <p class="channel-name">{{ video.creator.firstname }} {{ video.creator.lastname }}</p>

    <!-- Like/Dislike Buttons -->
    <div class="like-dislike-buttons">
      <button @click="likeVideo" class="like-button">
        <span class="like-icon">👍</span> Like
      </button>
      <button @click="dislikeVideo" class="dislike-button">
        <span class="dislike-icon">👎</span> Dislike
      </button>
      <p>Likes: {{ likeCount }}</p>
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
import videoData from '../assets/videos.json'; // Import video data

export default {
  name: 'ExpandedCard',
  data() {
    return {
      video: null, // Store the video data
      likeCount: 0, // Store the like count
      comment: '', // Store the user's comment
    };
  },
  mounted() {
    // Get the video id from route params and find the corresponding video
    const videoId = this.$route.params.id;
    this.video = videoData.find((video) => video.id === videoId);
    if (this.video) {
      this.likeCount = this.video.likes || 0; // Initialize the like count from the video data
    }
  },
  methods: {
    likeVideo() {
      this.likeCount++;
      this.video.likes = this.likeCount; // Update the like count in the video data
    },
    dislikeVideo() {
      if (this.likeCount > 0) {
        this.likeCount--;
        this.video.likes = this.likeCount; // Update the like count in the video data
      }
    },
    goToHome() {
      this.$router.push('/'); // Navigate to the Home page
    },
    goToProfile() {
      this.$router.push('/profile'); // Navigate to the Profile page
    },
  },
};
</script>

<style scoped>
.expanded-card {
  padding: 20px;
  color: white;
  margin: 20px auto;
  max-width: 900px;
}

/* Video Cover Image */
.video-cover .cover-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
}

/* Video Title */
.video-title {
  font-size: 24px;
  margin-top: 20px;
  font-weight: bold;
}

/* Views Count with Popular and Trending Tags */
.video-views {
  font-size: 16px;
  margin-top: 10px;
  color: #bbb;
}

.tag {
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 4px;
}

.popular {
  background-color: #f39c12;
  color: white;
}

.trending {
  background-color: #e74c3c;
  color: white;
}

/* Channel Name */
.channel-name {
  font-size: 18px;
  margin-top: 10px;
  color: #bbb;
}

/* Like/Dislike Buttons */
.like-dislike-buttons {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.like-button, .dislike-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #1db954;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.like-button:hover, .dislike-button:hover {
  background-color: #1aa04e;
}

.like-icon, .dislike-icon {
  margin-right: 8px;
}

/* Comment Section */
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

/* Navigation Buttons */
.navigation-buttons {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.home-button, .profile-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #1db954;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.home-button:hover, .profile-button:hover {
  background-color: #1aa04e;
}
</style>
