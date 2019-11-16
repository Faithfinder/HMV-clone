import axios from "axios";

const logOut = async () => {
    const response = await axios.post("api/auth/logout");
    if (response.status === 204) {
        return null;
    } else {
        throw new Error(`Couldn't log out: ${response.statusText}`);
    }
};

const checkLogIn = async () => {
    const response = await axios.get("/api/auth/check");

    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(
            `Couldn't check authentication status: ${response.statusText}`
        );
    }
};

export default { logOut, checkLogIn };
