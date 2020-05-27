import React from 'react';
import styles from './Cards.module.css';
import 'bootstrap/dist/css/bootstrap.css';



const Cards = ({ data }) => {
    console.log(data.local_total_cases);

    return(
        <div className={styles.container}>
                <div class="card" >
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div class="card-body">
                    <p class="card-text">Infected <br></br>
                        {data.local_total_cases}</p>
                     </div>
                </div>

                <div class="card" >
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div class="card-body">
                    <p class="card-text">Recovered</p>
                     </div>
                </div>

                <div class="card" >
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div class="card-body">
                    <p class="card-text">Deaths</p>
                     </div>
                </div>

                <div class="card" >
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div class="card-body">
                    <p class="card-text">Infected</p>
                     </div>
                </div>

                <div class="card" >
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div class="card-body">
                    <p class="card-text">Recovered</p>
                     </div>
                </div>

                <div class="card" >
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div class="card-body">
                    <p class="card-text">Deaths</p>
                     </div>
                </div>



        </div>
            

    )
}

export default Cards;