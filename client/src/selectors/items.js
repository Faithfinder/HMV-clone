import { useSelector } from "react-redux";

export const useItemsByCategory = category => {
    const [items] = useSelector(({ items }) => [Object.values(items.byId)]);
    return items.filter(item => item.category === category);
};

export const useFeaturedItems = () => {
    const [items] = useSelector(({ items }) => [Object.values(items.byId)]);
    return items.filter(item => item.featured);
};
