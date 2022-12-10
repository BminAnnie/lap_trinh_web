import React, { useEffect, useState } from 'react';

const PetInfo = ({ dog = {} }) => {
    const [dogFake, setDogFake] = useState({});
    console.log(dogFake);
    useEffect(() => {
        setDogFake({ ...dog });
    }, [dog]);
    const handleInput = (e) => {
        setDogFake((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    };
    return (
        <div className="grid grid-cols-3 gap-y-5 gap-x-4 px-[20px]">
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Tên chó</span>
                </label>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-warning w-full max-w-xs"
                    name="nameDog"
                    value={dogFake.nameDog}
                    onChange={handleInput}
                />
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">What is your name?</span>
                </label>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-warning w-full max-w-xs"
                />
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">What is your name?</span>
                </label>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-warning w-full max-w-xs"
                />
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">What is your name?</span>
                </label>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-warning w-full max-w-xs"
                />
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">What is your name?</span>
                </label>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-warning w-full max-w-xs"
                />
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">What is your name?</span>
                </label>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-warning w-full max-w-xs"
                />
            </div>
        </div>
    );
};

export default PetInfo;
