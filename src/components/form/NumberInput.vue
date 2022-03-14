<template>
   <input class="form-controll" type="number"  :value="value" @input="$emit('input', $event.target.value)"/>
</template>

<script>
export default {
  props: {
      value: Number,
  }
}
</script>

<style>

</style>