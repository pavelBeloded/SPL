class Product {
  products = new Set();

  addProduct(product) {
    this.products.add(product);
  }

  addProducts(products) {
    products.map((product) => {
      this.products.add(product);
    });
  }

  deletProduct(product) {
    return this.products.delete(product);
  }

  isHave(product) {
    return this.products.has(product);
  }

  count() {
    return this.products.size;
  }
}

let products = new Product();
