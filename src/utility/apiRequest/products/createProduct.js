import {getAuth } from "firebase/auth";
import axiosInstance from "../axiosInstance";

const createProduct = async(productData) => {
const tokenId = await getAuth().currentUser.getIdToken();
const result = await axiosInstance.post("product", productData, {
    headers: {
        authorization: 'Bearer ${tokenId}',
    },
});
return result.data;

};
export default createProduct;