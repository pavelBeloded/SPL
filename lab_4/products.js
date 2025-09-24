class Products {
  products = new Map();

  constructor(productsList) {
    productsList.map((product, index) => {
      this.products.set(index, product);
    });
  }

  getCount() {
    let result = 0;
    for (let product of this.products.values()){
        result += product.count;
    }

    return result;
  }

  getPrice() {
    let result = 0;
    for (let product of this.products.values()){
        result += product.price;
    }

    return result;
  }

  addProduct(product) {
    this.products.set(this.products.size, product);
  }

  static createProduct() {
    let product = {};
    let userInput = prompt(
      "Enter student info, separated by ,: (name, product count, price)"
    );
    let productInfo = userInput.split(",");
    product.name = productInfo[0];
    product.count = +productInfo[1];
    product.price = +productInfo[2];

    return product;
  }

  deleteProductById(id) {
    return this.products.delete(id);
  }

  deleteProductByName(name) {
    for (let id of this.products.keys()) {
        if(this.products.get(id).name == name) {
            return this.deleteProductById(id);
        }
    }
  }

  setCountById(id, count) {
    this.products.get(id).count = count;
  }

  setPriceById(id, price) {
    return this.products.get(id).price = price;
  }
}


let products = [{
  name: "phone",
  count: 14,
  price: 1402
},
{
 name: "laptop",
 count: 3,
 price: 2422
}
];


let productsList = new Products(products);