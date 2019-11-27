import { useLocation } from "react-router-dom";

export default () => {
    const location = useLocation();
    const { state = { redirectedProps: {} } } = { ...location };
    return state.redirectedProps;
};
