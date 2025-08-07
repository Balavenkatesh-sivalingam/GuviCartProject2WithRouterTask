import { useContext } from "react";
import CartContext from "../../utils/customHooks/userGlobal";

const Cart = () => {
  const { cart, setCart, totalPrice } = useContext(CartContext);

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-start justify-center">
      <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-10 bg-white shadow-2xl rounded-2xl m-4">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">
          Cart ({cart.length} items)
        </h1>

        {cart.length === 0 ? (
          <p>Your cart is empty, please add something to the cart.</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-4 border-b pb-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
                  <p className="font-semibold w-full sm:max-w-xs break-words text-center sm:text-left">
                    {item.title}
                  </p>

                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <button
                      className="px-2 py-1 bg-blue-100 hover:bg-blue-300 rounded"
                      onClick={() => decreaseQty(item.id)}
                    >
                      ➖
                    </button>
                    <span>{item.quantity} items</span>
                    <button
                      className="px-2 py-1 bg-blue-100 hover:bg-blue-300 rounded"
                      onClick={() => increaseQty(item.id)}
                    >
                      ➕
                    </button>
                  </div>

                  <p className="text-rose-600 text-lg font-bold text-center sm:text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <div className="bg-sky-200 p-4 rounded-xl shadow mt-6 text-right">
            <p className="text-lg font-medium">
              Total Price:{" "}
              <span className="text-gray-800 font-semibold">
                ${totalPrice.toFixed(2)}
              </span>
            </p>
            <p className="text-lg font-semibold">
              Final Price (after 10% discount):{" "}
              <span className="text-rose-600">
                ${(totalPrice * 0.9).toFixed(2)}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
