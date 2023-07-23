import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

export default function Weather_Details() {
    let [mydata,setmydata]=useState({})
    let [loading,setloading]=useState(true)
   
    let {country}=useParams();
    console.log(country);
    const GetData=async ()=>{
        let {data}=await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=05b947964ec24636801223206232502&q=${country}&days=3&aqi=yes&alerts=yes`)
    console.log(data);
    setmydata(data)
    setloading(false)
    }
    useEffect(() => {
        GetData();
      } , []);

  return (
    <>
     {loading? <div className="d-flex justify-content-center align-items-center vh-100 w-100">
                    <div className="loading">
                    <i className='fas fa-spin fa-spinner text-success fs-1'></i>
                    </div>
                </div>:
               <div className="container">
       
               <div className="row">
                   <div className="col-md-4 mt-5">
                   <NavLink to="/Home">
                       <input type="button" className='btn btn-danger' value='Back' />
       
                       </NavLink>
                   </div>
               </div>
               <div className="row">
                   <div className="col-md-6 mt-5 mx-auto border">
                       <h5 className='fw-bolder text-center'>city Name :{mydata.location?.name}</h5>
                       <h5 className='fw-bolder text-center'>city region :{mydata.location?.region}</h5>
                       <h5 className='fw-bolder text-center'>country Name :{mydata.location?.country}</h5>
                       <h5 className='fw-bolder text-center'>tz_id Name :{mydata.location?.tz_id}</h5>
                       
                   </div>
               </div>
               <div className="row">
                   {
                       
                     
                       mydata.forecast?.forecastday?.map((x,y)=>{
                           return <div key={y} className="col-md-3 mt-5 border mx-auto">
                               <h5 className='text-center'>{x.date}</h5>
                               <h5 className='text-center'>sunrise : {x.astro?.sunrise}</h5>
                               <h5 className='text-center'>sunset : {x.astro?.sunset}</h5>
                               <h5 className='text-center'>maxtemp_c : {x.day?.maxtemp_c}</h5>
                               <h5 className='text-center'>mintemp_c : {x.day?.mintemp_c}</h5>
                               <h5 className='text-center'>Weather State : {x.day?.condition.text}</h5>
                               <div className="text-center">
                               <img src={x.day?.condition.icon} className='w-50' alt="" />

                               </div>
                           </div>
                       })
       
                   }
               </div>
           </div>
                }
   
    </>
  )
}
