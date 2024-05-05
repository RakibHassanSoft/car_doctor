import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] rounded-xl">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full" />
    <div className="absolute flex  justify-end  text-white font-bold  transform h-full">
      <div className='p-10 flex justify-center flex-col  space-y-4  bg-gradient-to-r from-slate-700 to-slate-0'>
        <h2 className='text-4xl w-4/12'>This is a test This is a test</h2>
        <p className='w-8/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est reiciendis ipsa ea tempore dolorum eaque harum iste natus reprehenderit nihil.</p>
        <div className='space-x-4'>
        <button  className="btn btn-outline btn-primary">Primary</button>
<button  className="btn btn-outline btn-secondary">Secondary</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end right-5 bottom-5 gap-4 transform -translate-y-1/2  ">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute flex  justify-end  text-white font-bold  transform h-full">
      <div className='p-10 flex justify-center flex-col  space-y-4  bg-gradient-to-r from-slate-700 to-slate-0'>
        <h2 className='text-4xl w-4/12'>This is a test This is a test</h2>
        <p className='w-8/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est reiciendis ipsa ea tempore dolorum eaque harum iste natus reprehenderit nihil.</p>
        <div className='space-x-4'>
        <button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end right-5 bottom-5 gap-4 transform -translate-y-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute flex  justify-end  text-white font-bold  transform h-full">
      <div className='p-10 flex justify-center flex-col  space-y-4  bg-gradient-to-r from-slate-700 to-slate-0'>
        <h2 className='text-4xl w-4/12'>This is a test This is a test</h2>
        <p className='w-8/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est reiciendis ipsa ea tempore dolorum eaque harum iste natus reprehenderit nihil.</p>
        <div className='space-x-4'>
        <button  className="btn btn-outline btn-primary">Primary</button>
<button  className="btn btn-outline btn-secondary">Secondary</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end right-5 bottom-5 gap-4 transform -translate-y-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4}className="w-full" />
    <div className="absolute flex  justify-end  text-white font-bold  transform h-full">
      <div className='p-10 flex justify-center flex-col  space-y-4  bg-gradient-to-r from-slate-700 to-slate-0'>
        <h2 className='text-4xl w-4/12'>This is a test This is a test</h2>
        <p className='w-8/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est reiciendis ipsa ea tempore dolorum eaque harum iste natus reprehenderit nihil.</p>
        <div className='space-x-4'>
        <button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end right-5 bottom-5 gap-4 transform -translate-y-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;