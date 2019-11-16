import axios from "axios";

const createOrder = async order => {
    const response = await axios.post("/api/orders", { order });
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(`Couldn't post order: ${response.statusText}`);
    }
};

export default { createOrder };
