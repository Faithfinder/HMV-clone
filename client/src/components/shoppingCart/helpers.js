import store from "src/redux/store";
import { toggleCartDrawer } from "src/actions/ui";

export const toggleDrawer = open => () => {
    store.dispatch(toggleCartDrawer(open));
};
