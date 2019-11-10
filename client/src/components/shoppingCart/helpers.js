import store from "../../store";
import { toggleCartDrawer } from "../../actions/ui";

export const toggleDrawer = open => () => {
    store.dispatch(toggleCartDrawer(open));
};
