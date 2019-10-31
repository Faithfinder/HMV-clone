import events from "../config/events";
import eventEmitter from "../loaders/eventemitter";

import { onOrderCreation } from "../handlers/events/orders";

export default () => {
    eventEmitter.on(events.orders.created, onOrderCreation);
};
