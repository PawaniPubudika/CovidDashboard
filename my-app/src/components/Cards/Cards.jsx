import React from 'react';
import styles from './Cards.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import CountUp from 'react-countup' ;
// import infected from "./images/infected.png"



const Cards = ({ data }) => {

    return(
        <div className={styles.container}>
            <h1>LOCAL CASES</h1>

            <div className={styles.local}>
                <div className="card" className={styles.cardinfected}>
                    <div className="card-body" className={styles.cardbody}>
                    <p className="card-text">Total Confirmed Cases<br></br><b><span className={styles.value}>{data.data?.local_total_cases}</span></b><br></br><span className={styles.date}>{data.data?.update_date_time}</span></p>
                    
                    </div>
                </div>
                

                <div className="card" className={styles.cardrecovered}>
                    <div className="card-body" className={styles.cardbody}>
                    <p className="card-text">Recovered <br></br><b><span className={styles.value}>{data.data?.local_recovered}</span></b></p>
                     </div>
                </div>

                <div className="card" className={styles.carddeath} >
                    <div className="card-body"className={styles.cardbody}>
                    <p className="card-text">Deaths <br></br><b><span className={styles.value}>{data.data?.local_deaths}</span></b></p>
                     </div>
                </div>
        </div>
        <br/><br></br><br></br>
        
        <h1>GLOBAL CASES</h1>
        <div className={styles.global}>
                <div className="card" className={styles.cardinfected}>
                    <div className="card-body" className={styles.cardbody}>
                    <p className="card-text">Total Confirmed Cases<br></br><b><span className={styles.value}>{data.data?.global_total_cases}</span></b><br></br><span className={styles.date}>{data.data?.update_date_time}</span></p>
                     </div>
                </div>

                <div className="card" className={styles.cardrecovered}>
                    <div class="card-body" className={styles.cardbody}> 
                    <p class="card-text">Recovered<br></br><b><span className={styles.value}>{data.data?.global_recovered}</span></b></p>
                     </div>
                </div>

                <div className="card" className={styles.carddeath}>
                    <div className="card-body" className={styles.cardbody}>
                    <p class="card-text">Deaths<br></br><b><span className={styles.value}>{data.data?.global_deaths}</span></b></p>
                     </div>
                </div>
            </div>


        </div>
            

    )
}

export default Cards;