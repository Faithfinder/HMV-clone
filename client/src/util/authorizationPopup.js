import { logIn, authRequest } from "src/redux/auth/actions";
import store from "src/redux/store";
import socket from "src/services/socket";

const openPopup = () => {
    const width = 600,
        height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    const url =
        window.location.origin + `/api/auth/facebook?socketId=${socket.id}`;

    return window.open(
        url,
        "auth",
        `toolbar=no, location=no, directories=no, status=no, menubar=no, 
  scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
  height=${height}, top=${top}, left=${left}`
    );
};

const attachOnAuthnticateToSocket = popup => {
    socket.once("facebook", ({ user }) => {
        popup.close();
        store.dispatch(logIn(user));
    });
};

export const startAuth = () => {
    store.dispatch(authRequest());
    const popup = openPopup();
    attachOnAuthnticateToSocket(popup);
};
