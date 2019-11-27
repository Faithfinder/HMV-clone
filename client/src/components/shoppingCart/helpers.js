import store from "src/redux/store";
import { toggleCartDrawer } from "src/redux/ui/actions";

export const toggleDrawer = open => () => {
    store.dispatch(toggleCartDrawer(open));
};
