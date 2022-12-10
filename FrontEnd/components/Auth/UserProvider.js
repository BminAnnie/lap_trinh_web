import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();
const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const getUserId = async () => {
            const res = await axios.get('http://localhost:8080/user/checkAccess', {
                withCredentials: true,
            });
            if (res.data.status === '200') setUserId(res.data.id);
            else setUserId(null);
        };
        getUserId();
    }, []);
    useEffect(() => {
        if (localStorage.getItem(`${userId}cart`)) {
            const cart = JSON.parse(localStorage.getItem(`${userId}cart`));
        }
        setCart(cart);
    }, [userId]);
    return (
        <UserContext.Provider value={{ userId, cart, setCart }}>{children}</UserContext.Provider>
    );
};

export { UserContext };
export default UserProvider;
