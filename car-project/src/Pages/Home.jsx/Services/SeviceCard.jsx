import React from 'react';

const SeviceCard = ({ data }) => {
    // console.log(data)
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="flex justify-between p-3">
                <div className=' '>
                    <h2 className="">Name</h2>
                    <p className=''> Price : </p>
                </div>
                <div className="">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SeviceCard;