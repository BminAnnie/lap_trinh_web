import React from 'react';

const ConfirmOther = ({ params, setParams }) => {
    const handleInput = (e) => {
        setParams({ ...params, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text text-16-24-500">Phương thức thanh toán</span>
                </label>
                <select
                    className="select  select-warning  select-bordered"
                    name="methodPayment"
                    value={params.methodPayment}
                    onChange={handleInput}
                >
                    <option disabled selected>
                        Chọn phương thức thanh toán
                    </option>
                    <option value="cash">Cash</option>
                    <option value="momo">Momo</option>
                    <option value="zalopay">Zalo Pay</option>
                </select>
            </div>
            <div className="form-control w-full max-w-xs mt-[20px] text-16-24-500">
                <label className="label">
                    <span className="label-text">Số điện thoại liên hệ</span>
                </label>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-warning input-bordered w-full max-w-xs"
                    name="phone"
                    value={params.phone || ''}
                    onChange={handleInput}
                />
            </div>
            <div className="form-control w-full max-w-xs mt-[20px] text-16-24-500">
                <label className="label">
                    <span className="label-text">Địa chỉ nhận hàng</span>
                </label>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-warning input-bordered w-full max-w-xs"
                    name="address"
                    value={params.address || ''}
                    onChange={handleInput}
                />
            </div>
        </div>
    );
};

export default ConfirmOther;
