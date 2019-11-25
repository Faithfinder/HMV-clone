import { useSelector } from "react-redux";

export const useCurrentUser = () => {
    return useSelector(({ authentication }) => [
        authentication.user,
        authentication.refreshing
    ]);
};
