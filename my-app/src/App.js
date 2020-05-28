import React from 'react';
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import Search from './components/Search/Search';
import Carousel from './components/Carousel/Carousel';
import Navigation from './components/Navigation/navigation';
import styles from './App.module.css';
import { fetchdata } from "./api";
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component{
    state={
        data:{},
    }



   async componentDidMount(){
        const fetcheddata= await fetchdata();
        this.setState({data: fetcheddata})
        // console.log(data);
    }



    render(){
        const{
            data
        }=this.state;


        return(
        <div className={styles.container}>
                <Navigation/>
                <Carousel/>
                <Cards data={data}/>
                <br></br><br></br><br></br><br></br>
                <Search/>
        </div>
            
        )
    }


}

export default App;