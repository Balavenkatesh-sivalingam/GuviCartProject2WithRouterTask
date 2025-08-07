import CartContext from "../../utils/customHooks/userGlobal";
import useCartProvider from "../../utils/customHooks/useCartProvider";

const CartProvider = ({ children }) => {
  
  const {cart,
    setCart,
    totalQuantity,
    totalPrice,
    addToCart,
    removeFromCart,} = useCartProvider();

  return (
    <div>
      <CartContext.Provider
        value={{ cart, totalQuantity, totalPrice, setCart, addToCart, removeFromCart  }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};
export default CartProvider;
