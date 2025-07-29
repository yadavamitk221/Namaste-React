import React, { useState } from "react";
import recipesData from "./recipesData.js";
import "./styles.css";

const RecipeFilterApp = () => {
    const [minRating, setMinRating] = useState(4);
    const [cart, setCart] = useState([]);

    const filteredRecipes = recipesData.filter(
        (recipe) => recipe.rating >= minRating
    );

    const averageRating =
        filteredRecipes.reduce((sum, recipe) => sum + recipe.rating, 0) /
        (filteredRecipes.length || 1);

    const addToCart = (recipe) => {
        setCart((prevCart) => [...prevCart, recipe]);
    };

    const totalCartItems = cart.length;

    return (
        <div className="app-container">
            <h2>🍲 Recipe Explorer</h2>
            <div className="filter-cart-section">
                <div>
                    <label htmlFor="ratingFilter">Filter by Rating: </label>
                    <select
                        id="ratingFilter"
                        value={minRating}
                        onChange={(e) => setMinRating(parseFloat(e.target.value))}
                    >
                        <option value={4.0}>4.0★</option>
                        <option value={4.3}>4.3★</option>
                        <option value={4.5}>4.5★</option>
                        <option value={4.7}>4.7★</option>
                        <option value={4.9}>4.9★</option>
                    </select>
                </div>
            </div>

            <h3 className="cart-items">🛒 Cart Items: {totalCartItems}</h3>

            <h3>
                Average Rating: {averageRating.toFixed(2)} (
                {filteredRecipes.length} recipes)
            </h3>

            <div className="recipe-cards-container">
                {filteredRecipes.map((recipe) => (
                    <div key={recipe.id} className="recipe-card">
                        <img
                            src={recipe.image}
                            alt={recipe.name}
                            className="recipe-card-img"
                        />
                        <h4>{recipe.name}</h4>
                        <p>🍴 Cuisine: {recipe.cuisine}</p>
                        <p>⭐ Rating: {recipe.rating} ({recipe.reviewCount} reviews)</p>
                        <button
                            onClick={() => addToCart(recipe)}
                            className="add-to-cart-btn"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecipeFilterApp;
