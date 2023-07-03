import React, { useState, useEffect } from 'react';
// import './App.css'
import { PDFViewer, Document, Page, Text, View, PDFDownloadLink, StyleSheet } from '@react-pdf/renderer'
import {useParams} from 'react-router-dom';
import axios from 'axios';


const idPrescription = 123983819
const Name = 'Inflammation du genou gauche'
const Client = 'M. Albert Smith'
const Client_id = '1234567890123'
const Client_birth = '01/01/1970'

const Professional = 'Dr. Jean Dupont'
const Pro_profession = 'Médecin généraliste'
const Pro_adress = '12 rue de la paix'
const Pro_mail = 'albert.smith@gmail.com'
const Pro_phone = '01 23 45 67 89'
const Date_creation = '2021-09-01'
const Place_creation = 'Paris'
const Date_validity = '2021-09-30'
const Medicine = 'Doliprane'
const Quantity = '500g'
const Description = '2 comprimés par jour'

const styles = StyleSheet.create({
  App: {
  },
  
  page: {
    padding: '1.5cm',
  },
  
  pro:{
    position: 'absolute',
    width: '35%',
    alignItems: 'center',
    //marginLeft: '0cm',
    //backgroundColor: 'red',
  },
  Proname:{
    fontSize: 20,
    // fontWeight: 700,
    marginBottom: '0.2cm',
  },
  Prorest:{
    fontSize: 15,
  },

  secDate:{
    position: 'absolute',
    right: '0cm',
    top: '0cm',
    width: '40%',
    //backgroundColor: 'lightgrey',
    textAlign: 'right',
  },
  datecrea:{
    // position: 'absolute',
    // right: '0cm',
    fontSize: 14,
    marginBottom: '0.2cm',
    // backgroundColor: 'lightgrey',
  },

  secpat:{
    // backgroundColor: 'lightblue',
    position: 'absolute',
    left: '0cm',
    top: '6cm',
    width: '60%',
    // alignItems: 'center',
  },

  patient:{
    // position: 'absolute',
    left: '0cm',
    // top: '5cm',
    fontSize: 20,
    // fontWeight: 'bold',
    // marginBottom: '0.2cm',
  },
  patid:{
    // position: 'absolute',
    left: '0cm',
    // top: '0.75cm',
    fontSize: 13,
  },

  presc:{
    position: 'absolute',
    left: '0cm',
    top: '8.5cm',
    width: '100%',
    // backgroundColor: 'lightgreen',
  },
  name:{
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: '1cm',
  },
  med:{
    fontSize: 14,
    fontWeight: 'bold',
    // marginBottom: '0.2cm',
  },
  des:{
    fontSize: 12,
    marginBottom: '0.5cm',
  },

  sign:{
    position: 'absolute',
    right: '2cm',
    bottom: '2cm',
    // backgroundColor: 'lightyellow',
    textAlign: 'right',
  },

  container: {
    height: '100%',
  },
});

function Ordonnance (props) {

  const { idPrescription } = props;
  const [prescriptionData, setPrescriptionData] = useState(null);

  // console.log(idPrescription);

  useEffect(() => {
      // Effectuez la requête GET vers le backend pour récupérer les informations de l'ordonnance
      // axios.get(`http://localhost:3000/prescription/${idPrescription}`)
      axios.get(`http://localhost:3000/prescription/10`)
      // axios.get(`/prescription/${idPrescription}`)
          .then(response => {
              setPrescriptionData(response.data);
          })
          .catch(error => {
              console.error('Error fetching prescription data:', error);
          });
  }, [idPrescription]);

  if (!prescriptionData) {
      return <div>Loading... </div>; // Afficher un message de chargement tant que les données ne sont pas disponibles
  }

  const med = prescriptionData.Medicine.split(',');
  const descr = prescriptionData.Description.split(',');

  const result = [];
  const maxLength = Math.max(med.length, descr.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < med.length) {
      result.push(med[i].trim());
    }
    if (i < descr.length) {
      result.push(descr[i].trim());
    }
  }

  console.log(result);

  const idpresc = 123983819
  const Name = prescriptionData.name
  const Client = prescriptionData.client
  const Client_id = '1234567890123'
  const Client_birth = '01/01/1970'

  const Professional = 'Dr. Jean Dupont'
  const Pro_profession = 'Médecin généraliste'
  const Pro_adress = '12 rue de la paix'
  const Pro_mail = 'albert.smith@gmail.com'
  const Pro_phone = '01 23 45 67 89'
  const Date_creation = '2021-09-01'
  const Place_creation = 'Paris'
  const Date_validity = '2021-09-30'
  const Medicine = 'Doliprane'
  const Quantity = '500g'
  const Description = '2 comprimés par jour'

  return (
    <Document>
      <Page size="A4" style={styles.page} >
        <View style={styles.container}>
          {/* <Text style={styles.title}>Ordonnance médicale</Text> */}
          
          <View style={styles.pro}>
            <View >
              <Text style={styles.Proname}>{prescriptionData.ProfessionalFirstName} {prescriptionData.ProfessionalLastName}</Text>
            </View>
            <View>
              <Text style={styles.Prorest}>Specialisation</Text>
            </View>
            <View>
              <Text style={styles.Prorest}>adresse pro</Text>
            </View>
            <View>
              <Text style={styles.Prorest}>{prescriptionData.ProfessionalMail}</Text>
            </View>          
            <View>
              <Text style={styles.Prorest}>{prescriptionData.ProfessionalPhone}</Text>
            </View>
          </View>

          <View style={styles.secDate}>
            <View>
              <Text style={styles.datecrea}>Le {prescriptionData.Date_creation}</Text>
            </View>
            <View>
              <Text style={styles.datecrea}>Valide jursqu'au {prescriptionData.Date_validity}</Text>
            </View>          
          </View>

          <View style={styles.secpat}>
            <View>
              <Text style={styles.patient}>{prescriptionData.ClientFirstName} {prescriptionData.ClientLastName}</Text>
            </View>
            <View>
              <Text style={styles.patid}>ID: {prescriptionData.Clientid}</Text>
            </View>    
          </View>    


          <View style={styles.presc}>
            <View >
              <Text style={styles.name}>{prescriptionData.Name} - {prescriptionData.idPrescription}</Text>
            </View>          
            
            {/* <View >
              <Text style={styles.med}>{prescriptionData.Medicine} - {Quantity}</Text>
              <Text style={styles.des}>{prescriptionData.Description}</Text>
            </View>

            <View >
              <Text style={styles.med}>{prescriptionData.Medicine} - {Quantity}</Text>
              <Text style={styles.des}>{prescriptionData.Description}</Text>
            </View> */}

            {/* <div className="Med">
              {result.map((item, index) => (
                  <li key={index} className={index % 2 === 0 ? 'medoc' : 'frequence_prise'}>
                      {item}
                  </li>
              ))}
            </div> */}

          </View>

          <View style={styles.sign}>
            <Text>Signature</Text>
          </View>

        </View>
      </Page>
    </Document>
  );
  };


function DownloadPDF() {
  const [prescriptionData, setPrescriptionData] = useState(null);

  const { idPrescription } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/prescription/${idPrescription}`)
      .then(response => {
        setPrescriptionData(response.data);
      })
      .catch(error => {
        console.error('Error fetching prescription data:', error);
      });
  }, [idPrescription]);

  if (!prescriptionData) {
    return <div>Loading... </div>;
  }

  return (
    //Afficher
    // <div className="App">
    //   <PDFViewer width='800px' height='600px'>
    //     <Ordonnance />
    //   </PDFViewer>

    // </div>

    //Télécharger
    <div className="App">
      <PDFDownloadLink
        document={<Ordonnance prescriptionData={prescriptionData} />}
        fileName="Ordonnance.pdf"
        className="download-link"
        >
        {({loading}) => (loading ? 'Loading document...' : 'Télecharger en PDF')}
        </PDFDownloadLink>
    </div>
  )
}


export default DownloadPDF;
