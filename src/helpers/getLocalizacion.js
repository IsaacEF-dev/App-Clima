
export const getLocalizacion=()=>{
    return new Promise(async(resolve,reject)=>{
        navigator.geolocation.getCurrentPosition(
            (res)=>{
                // resolve([coords.longitude, coords.latitude])
                
                resolve(res);
            },
            (err)=>{
                alert("No se pudo obtener la geolocalizacion");
                console.log(err);
                reject();
            }
        )
    })
}