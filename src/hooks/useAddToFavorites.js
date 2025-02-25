import { useDispatch } from "react-redux";
import { addFavorite } from "../redux/slices/favoritesSlice";

export function useAddToFavorites() {
    const dispatch = useDispatch();
    return (product) => dispatch(addFavorite(product));
}
