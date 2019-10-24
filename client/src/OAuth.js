import React, { useEffect, useState } from "react";

export default ({ socket }) => {
    const [user, setUser] = useState(undefined);
    const [popup, setPopup] = useState(undefined);

    const checkPopup = () => {
        const check = setInterval(() => {
            if (!popup || popup.closed || popup.closed === undefined) {
                clearInterval(check);
            }
        }, 1000);
    };

    const openPopup = () => {
        const width = 600,
            height = 600;
        const left = window.innerWidth / 2 - width / 2;
        const top = window.innerHeight / 2 - height / 2;
        const url = `api/auth/facebook?socketId=${socket.id}`;

        return window.open(
            url,
            "",
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
        );
    };

    const startAuth = () => {
        setPopup(openPopup());
        checkPopup();
    };

    const onReceiveUser = newUser => {
        popup.close();
        setUser(newUser);
        console.log(user);
    };

    useEffect(() => {
        socket.on("facebook", onReceiveUser);
    }, [socket, onReceiveUser]);

    return <button onClick={startAuth}>Log in</button>;
};
