import axios from "axios";
import ApiConstant from "../constants/ApiConstant";


const AuthRequest = axios.create({
    baseURL: ApiConstant.BACKEND_API.BASE_API_URL,
    timeout: 100000,
    headers: { 'content-type': 'application/json' }
});



AuthRequest.interceptors.response.use((response) => {
	return response;
}, (error: any) => {
	return Promise.reject(error);
}); 

export default AuthRequest
