import { useState } from "react";
import Product from "../../services/Product";

function ProductForm() {
  const productService = new Product();
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleCreateProduct = async () => {
    try {
      await productService.createProduct(productData);
      setProductData({ name: "", description: "", price: "" });
    } catch (error) {
      // Handle the error here, e.g., log it or display a user-friendly message.
      console.error(
        "An error occurred while creating or fetching products:",
        error
      );
    }
  };

  return (
    <div>
      <h2>Create a New Product</h2>
      <input
        type="text"
        placeholder="Name"
        value={productData.name}
        onChange={(e) =>
          setProductData({ ...productData, name: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Description"
        value={productData.description}
        onChange={(e) =>
          setProductData({ ...productData, description: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Price"
        value={productData.price}
        onChange={(e) =>
          setProductData({ ...productData, price: e.target.value })
        }
      />
      <button onClick={handleCreateProduct}>Create Product</button>
    </div>
  );
}

export default ProductForm;
