import events from "../config/events";
import eventEmitter from "../loaders/eventemitter";

export default () => {
    eventEmitter.on(events.orders.created, console.log);
};
