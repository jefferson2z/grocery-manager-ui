import API from '../api';

export const addProduct = async (name) => {
  await API.post('products/add-product', { name });
};

export const getAllProducts = async () => {
  const response = await API.get('products/get-products');

  return response.data;
};

export const deleteProduct = async (id) => {
  await API.post('products/delete-product', { id });
};
