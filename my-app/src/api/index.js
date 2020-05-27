 import axios from 'axios';

 const url='https://www.hpb.health.gov.lk/api/get-current-statistical';

 export const fetchdata = async()=>{
     try{
         const response= await axios.get(url);
         return(response);
        
        }
     catch(error){

     }
 }