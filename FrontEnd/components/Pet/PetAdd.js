import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PetAdd = ({}) => {
    const [dogFake, setDogFake] = useState({});
    const handleInput = (e) => {
        setDogFake((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    };
    const submitForm = async (e) => {
        e.preventDefault();
        if (!dogFake) return;
        axios.defaults.withCredentials = true;
        const res = await axios.post('http://localhost:8080/dog/edit', dogFake);
        // window.location.reload(false);
        console.log(res.data);
    };
    return (
        <>
            <div>
                <div className="grid grid-cols-2 laptop:grid-cols-3 gap-y-5 gap-x-4 px-[20px] mt-5 laptop:mt-0">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Tên chó</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-warning w-full max-w-xs"
                            name="nameDog"
                            value={dogFake.nameDog || ''}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Giới tính</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-warning w-full max-w-xs"
                            name="gender"
                            value={dogFake.gender || ''}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Giá</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-warning w-full max-w-xs"
                            name="price"
                            value={dogFake.price || ''}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Ngày sinh</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-warning w-full max-w-xs"
                            name="birthday"
                            value={dogFake.birthday || ''}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Đã tiêm vaccine?</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-warning w-full max-w-xs"
                            name="isVaccinated"
                            value={dogFake.isVaccinated || ''}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Chứng nhận</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-warning w-full max-w-xs"
                            name="cert"
                            value={dogFake.cert || ''}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Gắn chip định vị</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-warning w-full max-w-xs"
                            name="microchip"
                            value={dogFake.microchip || ''}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Đã được bán?</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-warning w-full max-w-xs"
                            name="isSell"
                            value={dogFake.isSell || ''}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Tuổi</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-warning w-full max-w-xs"
                            name="age"
                            value={dogFake.age || ''}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Kích thước</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-warning w-full max-w-xs"
                            name="breed"
                            value={dogFake.breed || ''}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Màu sắc</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-warning w-full max-w-xs"
                            name="color"
                            value={dogFake.color || ''}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Thông tin thêm</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-warning w-full max-w-xs"
                            name="informationMore"
                            value={dogFake.informationMore || ''}
                            onChange={handleInput}
                        />
                    </div>
                </div>
                <div className="flex justify-end m-4">
                    <button className="btn btn-info btn-sm" onClick={submitForm}>
                        Thêm
                    </button>
                </div>
            </div>
        </>
    );
};

export default PetAdd;
