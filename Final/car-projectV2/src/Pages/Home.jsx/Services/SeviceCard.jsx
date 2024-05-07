import React from 'react';
import { Link } from "react-router-dom";
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
                  <Link className='btn btn-primary' to={`/checkout/${data._id}`}>Book now</Link>
                </div>
            </div>
        </div>
    );
};

export default SeviceCard;