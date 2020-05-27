import React from 'react';
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import Search from './components/Search/Search';
import { fetchdata } from "./api";

class App extends React.Component{

   async componentDidMount(){
        const data= await fetchdata();

        console.log(data);
    }



    render(){
        return(
            <div>

            </div>
        )
    }


}

export default App;