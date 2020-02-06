export const routes = {
  products: {
    index: "/products",
    productProfile: "/products/:productId",
    getProductUrl(id) {
      return `${this.index}/${id}`;
    }
  }
};
