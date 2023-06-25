export function product() {
  let productdata = fetch("https://fakestoreapi.com/products")
    .then((r) => r.json())
    .then((data) => data);
  return productdata;
}

export function mensProduct() {
  let productdata = fetch("https://fakestoreapi.com/products/category/men's%20clothing")
    .then((r) => r.json())
    .then((data) => data);
  return productdata;
}
export function womensProduct() {
  let productdata = fetch(
    "https://fakestoreapi.com/products/category/women's%20clothing"
  )
    .then((r) => r.json())
    .then((data) => data);
  return productdata;
}