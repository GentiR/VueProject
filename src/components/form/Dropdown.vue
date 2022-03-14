<template>
  <select class="form-controll" :value="value"
  @input="$emit('input', $event.target.value)"
  >
      
      <option v-for="entry in options" :key="entry.value" :value="entry.value" >{{entry.label}}</option>
  </select>
</template>

<script>
export default {
  propr: {
      options: Array,
      value: String
  }
};
</script>

<style>

</style>