import store from "src/store";
import { toggleCartDrawer } from "src/actions/ui";

export const toggleDrawer = open => () => {
    store.dispatch(toggleCartDrawer(open));
};
