import axios from "axios";

const CATEGORIES_REST_API_URL = "http://localhost:8080/api/categories";

const getAllCategories = () => {
    return axios.get(CATEGORIES_REST_API_URL + "/all");
};

const CategoryService = {
    getAllCategories
}

export default CategoryService;
