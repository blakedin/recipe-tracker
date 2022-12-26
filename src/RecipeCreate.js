import React, { useState } from "react";
import "./RecipeCreate.css";
function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const inputStyle = {
    backgroundColor: "bisque",
  };

  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
    console.log(formData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe({ ...formData });
    setFormData({ ...initialState });
  };

  return (
    <form name="create" style={inputStyle} onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <div className="form-container">
                <label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="name"
                  ></input>
                </label>

                <label>
                  <input
                    type="text"
                    name="cuisine"
                    value={formData.cuisine}
                    onChange={handleChange}
                    placeholder="cuisine"
                  ></input>
                </label>

                <label>
                  <input
                    name="photo"
                    type="url"
                    value={formData.photo}
                    onChange={handleChange}
                    placeholder="url"
                  ></input>
                </label>

                <label>
                  <textarea
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleChange}
                    placeholder="ingredients"
                  ></textarea>
                </label>

                <label>
                  <textarea
                    name="preparation"
                    value={formData.preparation}
                    onChange={handleChange}
                    placeholder="preparation"
                  ></textarea>
                </label>

                <button type="submit">Create</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
