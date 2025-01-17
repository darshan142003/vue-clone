<template>
  <div class="card">
    <img :src="thumbnail" alt="Video thumbnail" class="thumbnail" />
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p class="views">{{ views }}</p>
      <div class="card-footer">
        <p class="channel">{{ channel }}</p>
        <p class="description">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    views: {
      type: String,
      required: true,
    },
    channel: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
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
  gap: 15px; /* Increased gap for better spacing */
}

.thumbnail {
  width: 300px; /* Larger width */
  height: 200px; /* Larger height */
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
  font-size: 18px; /* Slightly larger font for title */
}

.views {
  font-size: 14px;
  margin: 5px 0;
}

.card-footer {
  margin-top: auto; /* Pushes the footer content down */
  margin-bottom: 10px; /* Adds space from the bottom */
}

.channel {
  font-size: 14px;
  margin: 5px 0;
}

.description {
  font-size: 14px;
  color: #bbb;
  margin-top: 5px; /* Added gap between channel and description */
}
</style>
