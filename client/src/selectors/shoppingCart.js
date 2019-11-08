import { useSelector } from "react-redux";

export const useCartCount = () => {
    const cart = useSelector(({ shoppingCart }) => shoppingCart.contents);
    return Object.values(cart).reduce(
        (result, item) => (result += item.amount),
        0
    );
};

export const useCartContents = () => {
    const [cart, items] = useSelector(({ shoppingCart, items }) => [
        shoppingCart.contents,
        items
    ]);

    return Object.values(cart).map(item => {
        const { title, price, image } = items[item.id];
        return { ...item, title, price, image };
    });
};
