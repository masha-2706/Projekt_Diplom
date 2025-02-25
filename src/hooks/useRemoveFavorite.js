import { useDispatch } from "react-redux";
import { removeFavorite } from "../redux/slices/favoritesSlice";

export function useRemoveFavorite() {
    const dispatch = useDispatch();
    return (id) => dispatch(removeFavorite(id));
}
