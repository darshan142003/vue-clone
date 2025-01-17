<template>
    <div class="expanded-card">
      <h1>{{ title }}</h1>
      <p>{{ viewCount }} views</p>
      <p>{{ creator }}</p>
      <button @click="like">Like</button>
      <button @click="dislike">Dislike</button>
      <p>Likes: {{ likes }}</p>
      <span v-if="likes > 10">Popular</span>
      <span v-if="likes > 15">Trending</span>
    </div>
  </template>
  
  <script>
  export default {
    props: ['title', 'viewCount', 'creator'],
    data() {
      return {
        likes: 0,
      };
    },
    methods: {
      like() {
        this.likes++;
      },
      dislike() {
        if (this.likes > 0) this.likes--;
      },
    },
  };
  </script>
  