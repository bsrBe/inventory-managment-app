import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../../card/Card";

import "./ProductForm.scss";

const ProductForm = ({
  product,
  description,
  setDescription,
  handleInputChange,
  saveProduct,
}) => {
  return (
    <div className="add-product">
      <Card cardClass={"card"}>
        <form onSubmit={saveProduct}>
          <div className="--form-control">
            <label>Product Name:</label>
            <input
              type="text"
              placeholder="Product name"
              name="name"
              value={product?.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="--form-control">
            <label>Product Category:</label>
            <input
              type="text"
              placeholder="Product Category"
              name="category"
              value={product?.category}
              onChange={handleInputChange}
            />
          </div>

          <div className="--grid-2">
            <div className="--form-control">
              <label>Product Price:</label>
              <input
                type="number"
                placeholder="Product Price"
                name="price"
                value={product?.price}
                onChange={handleInputChange}
              />
            </div>

            <div className="--form-control">
              <label>Product Quantity:</label>
              <input
                type="number"
                placeholder="Product Quantity"
                name="quantity"
                value={product?.quantity}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="--grid-2">
            <div className="--form-control">
              <label>Shelf Location:</label>
              <input
                type="text"
                placeholder="e.g. A1, Shelf 2"
                name="location"
                value={product?.location}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="--form-control">
              <label>Min Stock Amount:</label>
              <input
                type="number"
                placeholder="e.g. 5"
                name="minStock"
                value={product?.minStock}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="--form-control">
            <label>Product Description:</label>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={setDescription}
              modules={ProductForm.modules}
              formats={ProductForm.formats}
            />
          </div>

          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Save Product
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

ProductForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
ProductForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default ProductForm;
