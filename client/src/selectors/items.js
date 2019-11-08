import { useSelector } from "react-redux";

export const useItemsByCategory = category => {
    const [items] = useSelector(state => [Object.values(state.items)]);
    return items.filter(item => item.category === category);
};

export const useFeaturedItems = () => {
    const [items] = useSelector(state => [Object.values(state.items)]);
    return items.filter(item => item.featured);
};
