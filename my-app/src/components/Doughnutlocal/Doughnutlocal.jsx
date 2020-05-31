import React, {useState, useEffect} from 'react';
import {Bar, Doughnut} from 'react-chartjs-2';


  const Doughnutlocal=({data})=>{
    console.log(data);
    const[charData,setCharData]=useState("")
          useEffect(()=>{
          setCharData({labels: ["Active", "Recovered"],
          datasets: [{
              label: "Current Status",
              // borderWidth: 2,
              data:[
                  data?.data?.local_active_cases,
                  data?.data?.local_recovered,
                //   data?.data?.global_deaths,


              ],
              backgroundColor: [
                "rgb(215,65,54)",
                "rgb(255,255,0)",
                // "rgb(245,222,179)",
              ],
          }]
        })
      },[data])


        return(
          <div className="chart">
            <Doughnut
            data={charData}
            width={'100%'}
            height={'25%'}
            options={{}}

            />
          </div>
        );

}       
  
export default Doughnutlocal;



