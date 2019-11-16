import axios from "axios";

const setCart = async cart => {
    const response = await axios.put("/api/cart", { cart });
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(
            `Couldn't sync cart with server: ${response.statusText}`
        );
    }
};

const checkCart = async () => {
    const response = await axios.get("/api/cart");
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(
            `Couldn't get cart from server: ${response.statusText}`
        );
    }
};

export default { setCart, checkCart };
