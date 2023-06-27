import React from 'react';


function Component1() {
    return (
        <div class='container_ordo'> 

            <button class= "pdp_ordo"> <img src="../../images/pdp.png" alt="icone des points"></img><span class= "title_ordo">DR Nozman</span></button>

            <div class='info_ordo'>
                <div class="Name_ordo">
                    <h2>Gynecology Consultation</h2>
                    <p className="my-paragraph1">Valid until 10.02.24</p>
                    <p className="my-paragraph2">To be taken three times a day for two weeks and then once a month for two month</p>
                </div>

                <div class='option_ordo'>
                    <button class= "coeur"> <img src="../../images/coeur.png" alt="icone du bouton"></img></button>
                    <button class= "points"> <img src="../../images/petitspoints.png" alt="icone des points"></img></button>
                </div>
            </div>

        </div>
      );
    }

    export default Component1;