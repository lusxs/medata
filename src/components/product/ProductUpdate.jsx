import { useState, useEffect } from "react";
import Product from "../../services/Product";

function ProductUpdate({ productId }) {
  const productService = new Product();
  const [productData, setProductData] = useState({});
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const existingProduct = productService.getProductById(productId);
    setProduct(existingProduct);
    setProductData(existingProduct);
  }, [productId]);

  const handleUpdateProduct = () => {
    productService.updateProduct(productId, productData);
    // Redirect to product detail or product list page
  };

  return (
    <div>
      <h2>Update Product</h2>
      {product ? (
        <div>
          <input
            type="text"
            placeholder="Name"
            value={productData.name || ""}
            onChange={(e) =>
              setProductData({ ...productData, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Description"
            value={productData.description || ""}
            onChange={(e) =>
              setProductData({ ...productData, description: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Price"
            value={productData.price || ""}
            onChange={(e) =>
              setProductData({ ...productData, price: e.target.value })
            }
          />
          <button onClick={handleUpdateProduct}>Update Product</button>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}

export default ProductUpdate;
