import React, { Component } from "react";

export default class OAuth extends Component {
    state = {
        user: {}
    };

    componentDidMount() {
        const { socket, provider } = this.props;

        socket.on(provider, user => {
            this.popup.close();
            this.setState({ user });
            console.log(user);
        });
    }

    checkPopup() {
        const check = setInterval(() => {
            const { popup } = this;
            if (!popup || popup.closed || popup.closed === undefined) {
                clearInterval(check);
                this.setState({ disabled: "" });
            }
        }, 1000);
    }

    openPopup() {
        const { socket } = this.props;
        const width = 600,
            height = 600;
        const left = window.innerWidth / 2 - width / 2;
        const top = window.innerHeight / 2 - height / 2;
        const url = `auth/facebook?socketId=${socket.id}`;

        return window.open(
            url,
            "",
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
        );
    }

    startAuth = () => {
        if (!this.state.disabled) {
            this.popup = this.openPopup();
            this.checkPopup();
        }
    };

    closeCard = () => {
        this.setState({ user: {} });
    };

    render() {
        const user = this.state.user;

        return <button onClick={this.startAuth}>Log in</button>;
    }
}
