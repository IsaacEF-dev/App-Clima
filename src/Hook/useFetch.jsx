import {useState,useEffect} from 'react'

export const useFetch = (url="") => {
    const [state, setState] = useState({
        data:null,
        isLoading: true,
    })

    const getFech=async()=>{
        try {
            const resp=await fetch(url);
        
            const data = await resp.json();

            setState({
                data,
                isLoading:false,
            })
        } catch (error) {
            setState({
                data:null,
                isLoading:false,
            })
        }
        
    }

    useEffect(() => {
        
      getFech();
      
    }, [url])
    

    return{
        data:state.data,
        isLoading:state.isLoading,
    }
}