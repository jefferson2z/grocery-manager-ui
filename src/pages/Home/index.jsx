import { useState } from 'react';
import { StyledHome } from './styles';
import {
  AddProduct,
  getAllProducts,
} from '../../services/api/products/products';

export const Home = () => {
  const [name, setName] = useState('');
  const [products, setProducts] = useState([]);

  const handleAddProduct = async () => {
    await AddProduct(name);

    const allProducts = await getAllProducts();

    setProducts(allProducts);
  };

  return (
    <StyledHome>
      <h1>Home Page</h1>

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
