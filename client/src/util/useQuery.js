import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default () => {
    return queryString.parse(useLocation().search);
};
