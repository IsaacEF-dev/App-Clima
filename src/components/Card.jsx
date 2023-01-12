import moment from 'moment/moment';
import React, { useState } from 'react'
import { useFetch } from '../Hook/useFetch'
import {RxDividerVertical} from "react-icons/rx"

export const Card = ({clima}) => {
    const{data,isLoading}=useFetch(`https://timezone.abstractapi.com/v1/current_time?api_key=cdba85c39667468090ff078e7eee0a40&location=${clima.name}, ${clima.sys.country}`)
    const {main,weather}=clima;
    
    let time="";
    if(!isLoading){
        let hora=moment(data.datetime);
        time=hora.format("LLL")
    }
    return (
    !isLoading&&
    <div className='information__card'>
        <div className="col__one">
            <h1 className='cuidad'>{clima.name}</h1>
            <p className='fecha'>{time}</p>
            <div className="c">
                <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="" />
                
            </div>
        </div>
        <div className="col__two">
            <h2 className="temperatura">{parseInt(main.temp-273.15)}&#176;</h2>
        </div>
    </div>
  )
}
