import React, { useEffect ,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Bollywood() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get("https://bloghsapi.onrender.com/api/categories/total")
    .then((response) => setData(response.data))
    .catch((error) => console.log("Error", error))
  },[])

  console.log(data);

  return (
    <div className='p1'>
    <div className='Main'>
      <section className='section1'>
        <h4 > Bollywood</h4>
        <div className='head'></div>
        <div className="allPosts">
          {data.filter((e) => { return e.class === "Bollywood1" }).map((item, index) => (
            <div className="latest1">
              <Link to={`/details/${item.id}`} state={{ item }}key={index}><img src={item.cover} alt="" /></Link>
              <div>
                <Link to={`/details/${item.id}`} state={{ item }}key={index}><h4>{item.title}</h4></Link>
                <h6>{item.desc}</h6>
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
        <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" alt=""  className='natureImg'/>
        <div className="allTopPosts">
          {data.filter((e) => { return e.class === "Bollywood2"}).map((item,index)=>(
            <div className="latest2">
              <Link to={`/details/${item.id}`} state={{ item }}key={index}><img src={item.cover} alt="" /></Link>
              <div>
                <Link to={`/details/${item.id}`} state={{ item }}key={index}><h4>{item.title}</h4></Link>
                <h6>{item.desc}</h6>
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

export default Bollywood;