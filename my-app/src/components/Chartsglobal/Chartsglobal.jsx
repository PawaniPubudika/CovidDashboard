import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';


  const Chartsglobal=({data})=>{
    console.log(data);
    const[charData,setCharData]=useState("")
          useEffect(()=>{
          setCharData({labels: ["Total", "Recovered","Deaths"],
          datasets: [{
              label: "Current Status",
              // borderWidth: 2,
              data:[
                  data?.data?.global_total_cases,
                  data?.data?.global_recovered,
                  data?.data?.global_deaths,


              ],
              backgroundColor: [
                "rgb(215,65,54)",
                "rgb(255,255,0)",
                "rgb(245,222,179)",
              ],
          }]
        })
      },[data])


        return(
          <div className="chart">
            <Bar
            data={charData}
            width={'100%'}
            height={'25%'}
            options={{}}

            />
          </div>
        );

}       
  
export default Chartsglobal;



