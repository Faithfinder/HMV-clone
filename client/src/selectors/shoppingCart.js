import { useSelector } from "react-redux";

export const useCartCount = () => {
    const cart = useSelector(({ shoppingCart }) => shoppingCart.contents);
    return Object.values(cart).reduce(
        (result, item) => (result += item.amount),
        0
    );
};
