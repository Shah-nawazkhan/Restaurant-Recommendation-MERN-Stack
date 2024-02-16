import { useContext } from "react";
import RestaurantContext from "../Context/useContext";

const useRestaurantContext = () => {
	return useContext(RestaurantContext);
};

export default useRestaurantContext;
