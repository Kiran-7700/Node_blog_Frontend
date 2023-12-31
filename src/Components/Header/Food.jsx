import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Food() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get("https://bloghsapi.onrender.com/api/categories/total")
    .then((response) => setData(response.data))
    .catch((error) => console.log("Error", error))
  },[])


  return (
    <div className='p1'>
    <div className='Main'>
    <section className='section1'>
      <h4 > Food</h4>
      <div className='head'></div>
      <div className="allPosts">
        {data.filter((e) => { return e.class === "food1" }).map((item, index) => (
          <div className="latest1">
            <Link to={`/details/${item.id}`} state={{ item }} key={index}><img src={item.cover} alt="" /></Link>
            <div>
              <Link to={`/details/${item.id}`} state={{ item }} key={index}><h4>{item.title}</h4></Link>
              <h6>{item.desc.slice(0, 180)}</h6>
              <h6>{item.category} / {item.date}</h6>
            </div>
          </div>
        ))
        }
      </div>
    </section>
    <section className='bollyS2'>
      <h4 > Top Posts</h4>
      <div className='head'></div>
      <img src="https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg" alt="" className='natureImg' />
      <div className="allTopPosts">
        {data.filter((e) => { return e.class === "food2" }).map((item, index) => (
          <div className="latest2">
            <Link to={`/details/${item.id}`} state={{ item }} key={index}><img src={item.cover} alt="" /></Link>
            <div>
              <Link to={`/details/${item.id}`} state={{ item }} key={index}><h4>{item.title}</h4></Link>
              <h6>{item.desc.slice(0, 180)}</h6>
              <h6>{item.category} / {item.date}</h6>
            </div>
          </div>
        ))
        }
      </div>
      <div className="advertisment">
        <h4>Advertisement</h4>
      </div>
    </section>
    </div>
  </div>
  )
}

export default Food