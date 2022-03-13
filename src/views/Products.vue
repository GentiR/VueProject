<template>
  <div class="products">
    <div class="row">
      <div class="col-md-3 order-md-1 mb-4">
        <product-filter :categories="categories" :sellers="sellers" />
      </div>
      <div class="col-md-9 order-md-2">
        <!-- <h4 class="mb-3">Billing address</h4> -->
        <card-loader :loopCount="8" v-if="loading" />
        <products-list :products_list="product_duplicate" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductsList from "@/components/products/ProductsList";
import CardLoader from "@/components/shared/CardLoader";
import axios from "axios";
import _ from "lodash";

export default {
  name: "allProducts",
  components: { ProductsList, CardLoader },
  data() {
    return {
      categories: [],
      sellers: [],
      products_list: [],
      product_duplicate: [],
      loading: false,
    };
  },
  methods: {
    getAllProducts: function() {
      this.loading = true;
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/products`)
        .then((response) => {
          this.loading = false;
          this.products_list = response.data;
          this.product_duplicate = response.data;
          // getting all products and getting the unique value for
          // productCategory and returning the productCategory property only
          this.categories = _.uniqBy(
            _.map(this.products_list, function(object) {
              return _.pick(object, ["productCategory"]);
            }),
            "productCategory"
          );
          this.categories.unshift({ productCategory: "All" });

          this.sellers = _.uniqBy(
            _.map(this.products_list, function(object) {
              return _.pick(object, ["productSeller"]);
            }),
            "productSeller"
          );
          this.sellers.unshift({ productSeller: "All" });
        })
        .catch((error) => {
          console.log(error);
        });
    },

  },

  created() {
    this.getAllProducts();
  },
};
</script>

<style lang="css">
.products {
  margin-top: 40px;
}
</style>
