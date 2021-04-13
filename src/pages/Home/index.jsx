import { useState, useEffect } from 'react';
import { StyledHome } from './styles';
import {
  AddProduct,
  getAllProducts,
} from '../../services/api/products/products';

export const Home = () => {
  const [name, setName] = useState('');
  const [products, setProducts] = useState([]);

  const updateProducsList = async () => {
    const allProducts = await getAllProducts();

    setProducts(allProducts);
  };

  const handleAddProduct = async () => {
    await AddProduct(name);

    updateProducsList();
  };

  useEffect(() => {
    updateProducsList();
  }, []);

  return (
    <StyledHome>
      <p>Add a new Product</p>

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

      <ul>
        {products.length ? (
          products.map((product) => <li>{product.name}</li>)
        ) : (
          <div>No Products added</div>
        )}
      </ul>
    </StyledHome>
  );
};
