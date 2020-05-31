import React from 'react';
import Cards from './components/Cards/Cards';
import Chartslocal from './components/Chartslocal/Chartslocal';
import Chartsglobal from './components/Chartsglobal/Chartsglobal'; 
import Carousel from './components/Carousel/Carousel';
import Navigation from './components/Navigation/navigation';
import Doughnutlocal from './components/Doughnutlocal/Doughnutlocal';
// import Doughnutglobal from './components/Doughnutglobal/Doughnutlglobal';
import styles from './App.module.css';
import { fetchdata } from "./api";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/Footer/Footer';

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
                <br/><br/>
                <h2 className={styles.topic}>Current Status</h2>
                <br/>
                <h3 className={styles.topic}>Local</h3>
                <Chartslocal data={data}/>
                <br/><br/>
                <h3 className={styles.topic}>Global</h3>
                <Chartsglobal data={data}/>
                <br/><br/>
                <h3 className={styles.pietopic}>Local Active Cases vs Recovered Cases</h3>
                <br/>
                <Doughnutlocal data={data}/>
                <br/><br/>


                
                <Footer/>
        </div>
            
        )
    }


}

export default App;