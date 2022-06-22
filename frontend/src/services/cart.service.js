import axios from "axios";

const CART_REST_API_URL = "http://localhost:8080/api/cart/";

const getCart = (userId) => {
    return axios.get(CART_REST_API_URL + userId);
};

const CartService = {
    getCart
}

export default CartService;
