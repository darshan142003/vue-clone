<template>
  <div class="view-page">
    <div class="video-player">
      <button class="home-button" @click="goHome">Home</button>
      <h2>{{ video.title }}</h2>
      <div class="video-container">
        <img :src="video.thumbnail" alt="Video Thumbnail" class="video-thumbnail" />
        <p>{{ video.creator }} - {{ video.views }} views</p>
        <p>{{ video.description }}</p>
      </div>

      <!-- Comment Section -->
      <div class="comment-section">
        <h3>Comments</h3>
        <ul>
          <li v-for="(comment, index) in comments" :key="index">{{ comment }}</li>
        </ul>
        <input v-model="newComment" type="text" placeholder="Add a comment..." />
        <button @click="addComment">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import videosData from '../data/videos.json';

export default {
  data() {
    const videoId = this.$route.params.id;
    const video = videosData.find(v => v.id == videoId);
    return {
      video,
      comments: video.comments || [],
      newComment: "",
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    addComment() {
      if (this.newComment.trim()) {
        this.comments.push(this.newComment);
        this.newComment = "";
      }
    },
  },
};
</script>

<style scoped>
.view-page {
  padding: 20px;
  background-color: #121212;
  color: #fff;
}

.video-player {
  text-align: center;
}

.video-container {
  position: relative;
  display: inline-block;
}

.video-thumbnail {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.home-button {
  background-color: #333;
  color: white;
  border: 1px solid #444;
  padding: 10px 20px;
  margin-bottom: 20px;
  cursor: pointer;
}

.home-button:hover {
  background-color: #555;
}

.comment-section {
  margin-top: 20px;
}

.comment-section input {
  padding: 10px;
  width: 80%;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #444;
}

.comment-section button {
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
}

.comment-section button:hover {
  background-color: #38a370;
}
</style>
