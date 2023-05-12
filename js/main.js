const { createApp } = Vue;

createApp({
  data() {
    return {
      products: [],
      loading: true,
    };
  },
  filters: {
    currency(value) {
      return value.toFixed(2) + " €";
    },
  },
  mounted() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => (this.products = data))
      .catch((error) => console.error(error))
      .finally(() => (this.loading = false));
  },
}).mount("#app");
