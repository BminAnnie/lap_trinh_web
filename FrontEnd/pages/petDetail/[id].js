import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PetInfo from '../../components/Pet/PetInfo';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
const PetDetail = () => {
    const router = useRouter();
    const [dog, setDog] = useState([]);
    useEffect(() => {
        const getDog = async () => {
            const { id } = router.query;
            if (!id) return;
            const res = await axios.get('http://localhost:8080/dog', {
                params: { id },
                withCredentials: true,
            });
            setDog(res.data);
        };
        getDog();
    }, [router]);
    const handleChangeAvatar = (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        formData.append('id', dog?.id);
        axios.defaults.withCredentials = true;
        const res = axios.post('http://localhost:8080/dog/upload', formData);
        e.target.value = null;
        window.location.reload(false);
    };

    return (
        <div className="mt-[50px]">
            <div className="grid laptop:grid-cols-2 relative">
                <div className="avavarUser ">
                    <div className="relative cursor-pointer">
                        <label htmlFor="change_avatar_dog">
                            <Image
                                src={dog?.avatar}
                                alt=""
                                height={700}
                                width={700}
                                className="w-full h-auto rounded-[20px]"
                            />
                            <div className="camera absolute top-0 left-0 w-full h-full  hidden bg-slate-200 rounded-[20px] opacity-50">
                                <CenterFocusStrongIcon />
                            </div>
                        </label>
                    </div>
                </div>
                <PetInfo dog={dog} />
                <input
                    type="file"
                    className="file-input file-input-bordered file-input-warning w-full max-w-xs hidden"
                    id="change_avatar_dog"
                    accept="image/png, image/gif, image/jpeg"
                    onChange={handleChangeAvatar}
                />
            </div>
        </div>
    );
};

export default PetDetail;
