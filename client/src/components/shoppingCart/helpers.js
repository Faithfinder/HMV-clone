import store from "../../store";
import { toggleCartDrawer } from "../../actions/ui";

export const toggleDrawer = open => event => {
    if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
    ) {
        return;
    }

    store.dispatch(toggleCartDrawer(open));
};
