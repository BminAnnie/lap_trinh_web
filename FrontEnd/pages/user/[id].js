import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import OrderUser from '../../components/User/OrderUser';
import UserCard from '../../components/User/UserCard';
import UserForm from '../../components/User/UserForm';
const detailuser = () => {
    const router = useRouter();
    const [user, setUser] = useState({});
    useEffect(() => {
        const getUser = async () => {
            const { id } = router.query;
            if (!id) return;
            const res = await axios.get('http://localhost:8080/user', {
                params: { id },
                withCredentials: true,
            });
            setUser(res.data);
            console.log(res.data);
        };
        getUser();
    }, [router]);
    return (
        <div className="mt-[150px]">
            <div className="flex justify-center">
                <UserCard user={user} />
                <UserForm user={user} />
            </div>
            <OrderUser idOwner={user.id} />
        </div>
    );
};

export default detailuser;
