import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Home from "../containers/Home";
import AuthUser from "../helpers/AuthUser";
import AuthRequest from "../helpers/Fetch";

export default function AdminRoute() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await AuthUser.GetAuth();
        setUser(userData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  AuthRequest.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
    if (401 === err.response.status) {
       navigate('/');
    } else if(403 === err.response.status) { // Access denied
        navigate('/Page403')
    } else if(404 === err.response.status) { // Page not found
        navigate('/Page404')
    }
    return Promise.reject(err);
});

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {user ? <Home /> : <Navigate to="/" />};
    </>
  );
}
