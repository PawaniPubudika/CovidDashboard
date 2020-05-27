import React from 'react';
import { fetchdata } from "./api";


class App extends React.Component{

   async componentDidMount(){
        const data= await fetchdata();

        console.log(data);
    }

}