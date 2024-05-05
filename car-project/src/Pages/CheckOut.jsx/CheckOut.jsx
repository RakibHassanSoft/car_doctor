import React, { useCallback, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData()
    const { title, _id ,price,img} = service
    // console.log(title, _id)
    const {user} = useContext(AuthContext)
    
    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const email= form.email.value;
        const price= form.price.value;
        const date= form.date.value;
        const booking = {
           customerName: name,
           email,
           price,
           img,
           date,
           staus:'',
           service_id:_id,
           service:title,
           Price:price

        }
        console.log(booking)

        fetch('http://localhost:5000/booking',{
            method:"POST",
            headers: {
              'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                alert("Done succssfully")
            }
        })
     


    
    }
    return (
        <div>
            <h1 className='text-3xl text-orange-600 text-center'>{title}</h1>
            <form className="card-body" onSubmit={handleBookService}>
                {/* 1  */}
                <div className='flex justify-between w-full gap-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        {/* input 1  */}
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Nam e</span>
                        </label>
                              {/* input 2  */}
                        <input type="date" placeholder="" className="input input-bordered" name="date" required />
                    </div>
                </div>
                <div className='flex justify-between w-full gap-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                              {/* input 3  */}
                        <input type="text" placeholder="+880" defaultValue={price} className="input input-bordered" name="price" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                              {/* input 4  */}
                        <input type="email" 
                         name= "email"placeholder="email" className="input input-bordered" defaultValue={user?.email} required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className='btn btn-block' type="submit" value="Checkout" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;