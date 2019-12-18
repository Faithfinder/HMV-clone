import {
    Checkout,
    Home,
    FullCategory,
    Item,
    Login,
    PageNotFound,
    NewItem,
    EditItem
} from "src/components/pages";

const routes = [
    {
        path: "/items/new",
        component: NewItem,
        exact: true,
        mode: "admin"
    },
    {
        path: "/items/:itemId/edit",
        component: EditItem,
        exact: true,
        mode: "admin"
    },
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
