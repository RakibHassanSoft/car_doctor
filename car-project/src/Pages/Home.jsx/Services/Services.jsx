import React, { useEffect, useState } from 'react';
import SeviceCard from './SeviceCard';

const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
      fetch('services.json')
      .then(res => res.json())
      .then(data =>{
        // console.log(data)
        setServices(data)
      })
    },[])
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <h1 className='text-red-600 text-center'>Services</h1>
                <h3 className='text-3xl text-center'>Our services</h3>
                <p className='text-center w-1/2'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit voluptate illo autem eum sapiente perferendis fuga amet asperiores error voluptas?</p>
            </div>

            {/* card  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(data => <SeviceCard data={data} key={data._id}></SeviceCard>)
                }
            </div>
        </div>
    );
};

export default Services;