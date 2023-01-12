import React, { useEffect, useState } from 'react'
import { Card } from './components/Card';
import { getLocalizacion } from './helpers/getLocalizacion';
import { useFetch } from './Hook/useFetch';
import { useForm } from './Hook/useForm';
import {BiSearch,BiCopyright} from "react-icons/all"
import { NotConnection } from './components/NotConnection';
import No from "./assets/No.png";
import internet from "./assets/internet.png"

export const AppClima = () => {
  const {city,inputChange} = useForm({city:""})
  // const [state, setState] = useState("Mexico");
  const [api, setApi] = useState(`https://api.openweathermap.org/data/2.5/weather?q=Mexico&appid=6c6a896cdc61dfed9a71fea939137935`);
  
  const localizacion=async()=>{
     getLocalizacion()
    .then(res=>{
      setApi(`https://api.openweathermap.org/data/2.5/weather?lat=${res[1]=23.0000000}&lon=${res[0]=-102.0000000}&appid=6c6a896cdc61dfed9a71fea939137935`)
      }).catch(error=>{
        setApi(`https://api.openweathermap.org/data/2.5/weather?q=Mexico&appid=6c6a896cdc61dfed9a71fea939137935`)
      })
      console.log("no funciona")
  }
  

  useEffect(() => {
    localizacion();
    
  }, [])
  
  
  const searchCity=async (e)=>{
    e.preventDefault();
   
    setApi(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6c6a896cdc61dfed9a71fea939137935`);
  }

  const {data,isLoading}=useFetch(api)

  

  return (
    <>
    <div className="container">
      <div className="content__card">
      <form action="" className="content__form" onSubmit={searchCity}>
            <input type="text" className="buscador" name='city' onChange={inputChange}/>
            <button type='submit' className='btn__search'><BiSearch/></button>
          </form>
        <main className="card">
          {
            navigator.onLine ?
            !isLoading 
            && data.cod==200?
              <Card clima={data}/>
             :
             <>
              <div className="content__error">
                <h2 className="message">{`${data==undefined?"":data.message}`}</h2>
                <img src={No} className='img__error' alt="" />
              </div>
             </>: 
             <div className="content__error">
              <h2 className="message">No connection</h2>
              <img src={internet} className='img__error' alt="" />
             </div>
          }
         
        </main>
        {/* <p className='author'><BiCopyright/>Isaac Escutia Flores</p> */}
      </div>
      
    </div>
    </>
  )
}
