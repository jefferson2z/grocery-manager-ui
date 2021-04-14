import { useState, useEffect } from 'react';
import { StyledHome } from './styles';
import {
  addProduct,
  getAllProducts,
  deleteProduct,
} from '../../services/api/products/products';

export const Home = () => {
  const [name, setName] = useState('');
  const [products, setProducts] = useState([]);

  const updateProducsList = async () => {
    const allProducts = await getAllProducts();

    setProducts(allProducts);
  };

  const handleAddProduct = async () => {
    await addProduct(name);

    updateProducsList();
  };

  useEffect(() => {
    updateProducsList();
  }, []);

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId);
    } catch (e) {
      console.log(e);
    } finally {
      updateProducsList();
    }
  };

  return (
    <StyledHome>
      <h2>Add a new Product</h2>

      <div className="product-input-container">
        <div>
          <label for="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <button onClick={handleAddProduct}>Add</button>
      </div>

      <ul>
        {products.length ? (
          products.map((product) => (
            <li>
              {product.name}{' '}
              <button
                className="delete-button"
                onClick={() => handleDeleteProduct(product.id)}
              >
                X
              </button>
            </li>
          ))
        ) : (
          <div>No Products added</div>
        )}
      </ul>
    </StyledHome>
  );
};
