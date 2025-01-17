<template>
  <button @click="handleClick" class="button">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ['text'],
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
};
</script>

<style scoped>
.button {
  background-color: #42b983;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}

.button:hover {
  background-color: #38a370;
}
</style>
