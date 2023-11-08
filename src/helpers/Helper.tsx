import { useEffect, useState } from 'react'
import AuthUser from './AuthUser';

const Helper = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const userData = await AuthUser.GetAuth();
            setUser(userData);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchUserData();
    }, []);

    return user
}

export default Helper