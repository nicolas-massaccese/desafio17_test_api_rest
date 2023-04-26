const axios = require('axios');

const apiUrl = 'https://localhost:3000/api/productos';

async function getProductById(id) {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getAllProducts() {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function createProduct(product) {
  try {
    const response = await axios.post(apiUrl, product);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function updateProduct(id, product) {
  try {
    const response = await axios.put(`${apiUrl}/${id}`, product);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function deleteProduct(id) {
  try {
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Example usage:
getProductById(1).then(console.log); // GET https://api.example.com/products/1
getAllProducts().then(console.log); // GET https://api.example.com/products
createProduct({ name: 'New Product', price: 9.99 }).then(console.log); // POST https://api.example.com/products
updateProduct(1, { name: 'Updated Product', price: 14.99 }).then(console.log); // PUT https://api.example.com/products/1
deleteProduct(1).then(console.log); // DELETE https://api.example.com/products/1
