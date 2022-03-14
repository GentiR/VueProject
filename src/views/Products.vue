<template>
  <div class="main">
  <section>
    <form @submit.prevent="createProduct">
      <h1>Add Product</h1> <br>
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
        <NumberInput id="priceInput" v-model.number="form.price"/>
      </div>
    </div>
     <div>
      <div class="form-group">
        <label for="description" >Description:</label>
        <NumberInput id="description" v-model="form.description"/>
      </div>
    </div>
    <div class="form-group">
   <button class="button" type="submit"> Publish</button>
    </div>
    </form>
  </section>
  </div>
</template>

<script>

import Dropdown from "@/components/form/Dropdown.vue";
import NumberInput from "@/components/form/NumberInput.vue";

export default {
  components: {
    Dropdown,
    NumberInput,
  },
data(){
  return{
   form: {
     type: "flat",
     description: "",
     price: 0,
   }
  };
},
methods: {
  async createProduct(){
  // const result =  await apiRequests.createProduct({ ...this.form });

  // this.$router.puth({name: "View", params: {id: result._id } });
  },
},
};
</script>

<style>
.main{
 display: flex;
 justify-content: center;
}
form{
margin: 50px;
margin-top: 100px;
width: 600px;
height: 350px;
background-color:rgba(245, 166, 38, 0.486);
border-radius: 20px;
display: flex;
justify-content: center;
flex-direction: column;
}
h1{
  display: flex;
  justify-content: center;
}
.form-group{
margin: 15px;
margin-left:140px ;
}
#typeDropdown{
  margin-left:10px ;
  width: 250px;
  height: 30px;
}
#priceInput{
  margin-left:6px ;
  width: 250px;
  height: 30px;
}
#description{
  margin-left:6px ;
  width: 204px;
  height: 30px;
}
.button{
  margin-left:110px ;
}
</style>