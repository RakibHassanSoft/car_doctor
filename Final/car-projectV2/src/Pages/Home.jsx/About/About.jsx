import React from 'react';
import parts from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'
const About = () => {
    return (
        <div className="hero bg-base-200 mb-20">
            <div className="flex ju flex-col lg:flex-row justify-between">
                <div className=' lg:w-1/2 relative md:mb-10 mb-20'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl " />
                    <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute right-12 -bottom-10 botrder-6 border-white"/>
                </div>
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;