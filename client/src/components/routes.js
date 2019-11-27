import {
    Checkout,
    Home,
    FullCategory,
    Item,
    Login,
    PageNotFound
} from "src/components/pages";

const routes = [
    {
        path: "/items/:itemId",
        component: Item,
        exact: true
    },
    {
        path: "/categories/:categoryName",
        component: FullCategory,
        exact: true
    },
    {
        path: "/checkout",
        component: Checkout,
        exact: true
    },
    {
        path: "/login",
        component: Login,
        exact: true
    },
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "*",
        component: PageNotFound
    }
];

export default routes;
