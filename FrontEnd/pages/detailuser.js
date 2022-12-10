import React from 'react';
import UserCard from '../components/User/UserCard';
import UserForm from '../components/User/UserForm';

const detailuser = () => {
    return (
        <div className="mt-[150px] flex">
            <UserCard />
            <UserForm />
        </div>
    );
};

export default detailuser;
