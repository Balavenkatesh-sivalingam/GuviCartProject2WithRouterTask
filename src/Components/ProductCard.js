import { useContext } from "react";
import CartContext from "../../utils/customHooks/userGlobal";

const ProductCard = ({ proList }) => {
  const { image, title, price, description, category, rating } = proList;

  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const isInCart = cart.find((item) => item.id === proList.id);

  return (
    <div className="pro-card sm:w-64 md:w-72 lg:w-80 bg-white p-4 shadow-md rounded-lg hover:shadow-lg transform hover:scale-105 transition">
      <img
        className="w-full h-48 object-contain mb-4"
        src={image}
        alt={title}
      />
      <h3 className="font-bold mb-2">{title.slice(0, 32)}...</h3>
      <p>
        <strong>Price:</strong> ${price.toFixed(2)}
      </p>
      <p>
        <strong>Category:</strong> {category}
      </p>
      <p>
        <strong>Description:</strong> {description.slice(0, 90)}...
      </p>
      <p>
        <strong>Rating:</strong> ⭐ {rating?.rate} ({rating?.count} reviews)
      </p>
      {isInCart ? (
        <button
          className="bg-red-500 text-white px-4 py-2 mt-3 rounded-xl hover:bg-red-600 w-full md:w-48 md:ml-12"
          onClick={() => removeFromCart(proList.id)}
        >
          Remove from cart
        </button>
      ) : (
        <button
          className="bg-amber-400 text-white px-4 py-2 mt-3 rounded-xl hover:bg-green-500 w-full md:w-48 md:ml-12"
          onClick={() => addToCart(proList)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};
export default ProductCard;
