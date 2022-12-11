import React, { useEffect, useState } from 'react';
import axios from 'axios';
import notify from '../../helpers/notify';
import { useRouter } from 'next/router';
const PetAdd = ({}) => {
    const router = useRouter();
    const [dogFake, setDogFake] = useState({
        gender: 0,
        isVaccinated: 0,
        cert: 0,
        breed: 'small',
        color: 'black',
    });
    const handleInput = (e) => {
        setDogFake((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    };
    const submitForm = async (e) => {
        e.preventDefault();
        if (!dogFake) return;
        axios.defaults.withCredentials = true;
        const res = await axios.post('http://localhost:8080/dog/add', dogFake);
        notify('Bạn đã thêm thành công');
        // setTimeout(() => {
        //     window.location.reload(false);
        // }, 300);
        const id = res.data.id;
        router.push(`/petDetail/${id}`);
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
                            <span className="label-text">Giới tính?</span>
                        </label>
                        <select
                            className="select select-warning w-full max-w-xs place-self-end "
                            name="gender"
                            onChange={handleInput}
                            value={dogFake.gender || ''}
                        >
                            <option value="0" selected>
                                Nữ
                            </option>
                            <option value="1">Nam</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Vắc xin?</span>
                        </label>
                        <select
                            className="select select-warning w-full max-w-xs place-self-end "
                            name="isVaccinated"
                            onChange={handleInput}
                            value={dogFake.isVaccinated || ''}
                        >
                            <option value="0" selected>
                                Chưa
                            </option>
                            <option value="1">Rồi</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Giấy chứng nhận</span>
                        </label>
                        <select
                            className="select select-warning w-full max-w-xs place-self-end "
                            name="cert"
                            onChange={handleInput}
                            value={dogFake.cert || ''}
                        >
                            <option value="0" selected>
                                Không
                            </option>
                            <option value="1">Có</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Gắn chip định vị</span>
                        </label>
                        <select
                            className="select select-warning w-full max-w-xs place-self-end "
                            name="microchip"
                            onChange={handleInput}
                            value={dogFake.microchip || ''}
                        >
                            <option value="0" selected>
                                Chưa
                            </option>
                            <option value="1">Rồi</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Kích cỡ</span>
                        </label>
                        <select
                            className="select select-warning w-full max-w-xs place-self-end "
                            name="breed"
                            onChange={handleInput}
                            value={dogFake.breed || ''}
                        >
                            <option value="small" selected>
                                Nhỏ
                            </option>
                            <option value="medium">Trung bình</option>
                            <option value="large">Lớn</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Màu sắc</span>
                        </label>
                        <select
                            className="select select-warning w-full max-w-xs place-self-end "
                            name="color"
                            onChange={handleInput}
                            value={dogFake.color || ''}
                        >
                            <option value="black" selected>
                                Đen
                            </option>
                            <option value="red">Đỏ</option>
                            <option value="tan">vàng</option>
                            <option value="silver">Bạc</option>
                        </select>
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
