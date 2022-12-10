import React from 'react';

const genders = [
    { value: '0', display: 'Nữ' },
    { value: '1', display: 'Name' },
];
const breeds = [
    { value: 'small', display: 'Nhỏ' },
    { value: 'medium', display: 'Trung bình' },
    { value: 'large', display: 'Lớn' },
];
const colors = [
    {
        nameColor: 'Red',
        code: 'bg-[#FF564F]',
    },
    {
        nameColor: 'Apricot',
        code: 'bg-[#00171F]',
    },
    {
        nameColor: 'Black',
        code: 'bg-[#242B33]',
    },
    {
        nameColor: 'Black & White',
        code: 'colorBlackAndWhite',
    },
    {
        nameColor: 'Silver',
        code: 'bg-[#CECECE]',
    },
    {
        nameColor: 'Tan',
        code: 'bg-[#FFF7CE]',
    },
];
const DogsFilter = ({ params, setParams }) => {
    const handleFilter = (e) => {
        setParams((pre) => ({ ...pre, [e.target.name]: e.target.value, page: 1 }));
    };
    const resetFilter = (e) => {
        const field = e.target.name;
        delete params[field];
        setParams({ ...params });
    };
    return (
        <div className="">
            <div className="filterGender mt-[50px]">
                <div className="flex items-center justify-between ">
                    <h1 className="text-16-24-700 ">Gender</h1>
                    <button
                        className="btn btn-success btn-sm btn-outline"
                        name="gender"
                        onClick={resetFilter}
                    >
                        Reset
                    </button>
                </div>
                {genders.map((gender) => (
                    <div className="form-control">
                        <label className="cursor-pointer label">
                            <span className="label-text">{gender.display}</span>
                            <input
                                type="radio"
                                className="radio radio-warning"
                                onChange={handleFilter}
                                name={'gender'}
                                value={gender.value}
                                checked={gender.value == params.gender}
                            />
                        </label>
                    </div>
                ))}
            </div>

            <div className="filterColor my-[20px]">
                <div className="flex items-center justify-between">
                    <h1 className="text-16-24-700 ">Color</h1>
                    <button
                        className="btn btn-success btn-sm btn-outline "
                        name="color"
                        onClick={resetFilter}
                    >
                        Reset
                    </button>
                </div>
                {colors.map((color, index) => (
                    <div className="form-control">
                        <label className="cursor-pointer label">
                            <div className="flex">
                                <div className={`colorBall mr-[5px] ${color.code}`}></div>
                                <span className="label-text">{color.nameColor}</span>
                            </div>

                            <input
                                type="radio"
                                className="radio radio-warning"
                                onChange={handleFilter}
                                name={'color'}
                                value={color.nameColor.toLowerCase()}
                                checked={color.nameColor.toLocaleLowerCase() == params.color}
                            />
                        </label>
                    </div>
                ))}
            </div>

            <div className="filterPrice my-[10px]">
                <h1 className="text-16-24-700 ">Khoảng giá</h1>
                <div className="">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Giá nhỏ nhất</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                            name="min"
                            value={params.min || ''}
                            onChange={handleFilter}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Giá lớn nhất</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                            name="max"
                            value={params.max || ''}
                            onChange={handleFilter}
                        />
                    </div>
                </div>
            </div>

            <div className="filterBreed mt-[30px]">
                <div className="flex items-center justify-between">
                    <h1 className="text-16-24-700 ">Kích thước</h1>
                    <button
                        className="btn btn-success btn-sm btn-outline "
                        name="breed"
                        onClick={resetFilter}
                    >
                        Reset
                    </button>
                </div>
                {breeds.map((breed) => (
                    <div className="form-control">
                        <label className="cursor-pointer label">
                            <span className="label-text">{breed.display}</span>
                            <input
                                type="radio"
                                className="radio radio-warning"
                                onChange={handleFilter}
                                name={'breed'}
                                value={breed.value}
                                checked={breed.value == params.breed}
                            />
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DogsFilter;
