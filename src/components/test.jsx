import React from 'react';


function Component1() {
    return (
        <div class='containerordo'> 

            <button class= "pdpordo"> <img src="../../images/pdp.png" alt="icone des points"></img><span class= "titleordo">DR Nozman</span></button>
          
            <div class='infoordo'>
                <div class="Nameordo">
                    <h2>Gynecology Consultation</h2>
                    <p className="my-paragraph1">Valid until 10.02.24</p>
                    <p className="my-paragraph2">To be taken three times a day for two weeks and then once a month for two month</p>         
                </div>

                <div class='optionordo'>
                    <button class= "coeur"> <img src="../../images/coeur.png" alt="icone du bouton"></img></button>
                    <button class= "points"> <img src="../../images/petitspoints.png" alt="icone des points"></img></button>
                </div>
            </div>

        </div>
      );
    }

    export default Component1;