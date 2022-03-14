<template>
  <div>
  <section>
    <form @submit.prevent="createProduct">
    <div class="form-group">
      <label for="typeDropdown">Type</label>
     <Dropdown
       id="typeDropdown"
       v-model="form.type"
     :options="[
       {value: 'salad', label: 'Salad'},
       {value: 'cake', label: 'Cake'},
       {value: 'pica', label: 'Pica'},
     ]"
     />
    </div>
    <div>
      <div class="form-group">
        <label for="priceInput" >Price:</label>
        <input id="priceInput" v-model="form.price"/>
      </div>
    </div>

    </form>
  </section>
  </div>
</template>

<script>

import Dropdown from '@/components/form/Dropdown.vue';
export default {
  components: {
    Dropdown
  },
data(){
  return{
   form: {
     type: "flat",
     description: 0,
     price: 0,
   }
  };
}
};
</script>

<style>

</style>