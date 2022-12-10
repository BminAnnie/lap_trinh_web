import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
const PetDetail = () => {
    const router = useRouter();
    const [dogs, setDogs] = useState([]);
    useEffect(() => {
        const getDogs = async () => {
            const { id } = router.query;
            if (!id) return;
            const res = await axios.get('http://localhost:8080/dog', {
                params: { id },
                withCredentials: true,
            });
            setDogs(res.data);
            console.log(res.data);
        };
        getDogs();
    }, [router]);
    return (
        <div className="mt-[150px]">
            <div className="grid grid-cols-2">
                <div className="">
                    <Image src={}/>
                </div>
            </div>
        </div>
    );
};

export default PetDetail;
