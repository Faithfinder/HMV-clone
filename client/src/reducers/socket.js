import io from "socket.io-client";

const socket = io();

export default (state = socket, { type, payload }) => {
    return state;
};
