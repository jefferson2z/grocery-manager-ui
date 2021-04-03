import API from '../api'

export const AddProduct = async (name) => {
    await API.post('products/add-product', { name });
};

export const getAllProducts = async () => {
    const response = await API.get(
        'products/get-products'
    );

    return response.data;
};