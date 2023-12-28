import React, { useState } from "react";
import { PizzaApi, PizzaMutation } from "../../types";
import { Link } from "react-router-dom";
import ButtonSpinner from "../Spinners/ButtonSpinner";

const initialState: PizzaMutation = {
  title: "",
  price: "",
  image: "",
};

interface Props {
  onSubmit: (pizza: PizzaApi) => void;
  existingPizza?: PizzaMutation;
  isEdit?: boolean;
  isLoading?: boolean;
}

const PizzaForm: React.FC<Props> = ({
  onSubmit,
  existingPizza = initialState,
  isEdit = false,
  isLoading = false,
}) => {
  const [pizza, setPizza] = useState<PizzaMutation>(existingPizza);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPizza((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoading) return;

    onSubmit({
      ...pizza,
      price: parseFloat(pizza.price),
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>{isEdit ? "Edit pizza" : "Add new pizza"}</h4>
      <div className="form-group">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={pizza.title}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="price"
          name="price"
          value={pizza.price}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="image" className="form-label">
          Image
        </label>
        <input
          type="text"
          className="form-control"
          id="image"
          name="image"
          value={pizza.image}
          onChange={onChange}
          required
        />
      </div>
      <p className="mt-4">Image preview:</p>
      <img
        className="preview-image"
        src={
          pizza.image
            ? pizza.image
            : "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
        }
        alt="preview"
      />
      <div className="mt-4">
        <button
          type="submit"
          className="btn btn-success me-3"
          disabled={isLoading}
        >
          {isLoading && <ButtonSpinner />}
          {isEdit ? "Update" : "Create"}
        </button>
        {!isLoading && (
          <Link to="/" className="btn btn-primary">
            Back
          </Link>
        )}
      </div>
    </form>
  );
};

export default PizzaForm;
