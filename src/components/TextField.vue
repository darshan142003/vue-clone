<template>
  <div class="textfield">
    <label :for="label">{{ label }}</label>
    <input type="text" v-bind="$attrs" v-model="inputValue" />
  </div>
</template>

<script>
export default {
  props: ['label'],
  data() {
    return {
      inputValue: ''
    };
  },
  watch: {
    inputValue(newValue) {
      this.$emit('input', newValue);
    }
  }
};
</script>

<style scoped>
.textfield {
  margin-bottom: 15px;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
