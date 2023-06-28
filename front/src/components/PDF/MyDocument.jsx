import { useState } from 'react'
// import './App.css'
import { PDFViewer, Document, Page, Text, View, PDFDownloadLink, StyleSheet } from '@react-pdf/renderer'

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

const Ordonnance =( ) => 
  <Document>
    <Page size="A4" style={styles.page} >
      <View style={styles.container}>
        {/* <Text style={styles.title}>Ordonnance médicale</Text> */}
        
        <View style={styles.pro}>
          <View >
            <Text style={styles.Proname}>{Professional}</Text>
          </View>
          <View>
            <Text style={styles.Prorest}>{Pro_profession}</Text>
          </View>
          <View>
            <Text style={styles.Prorest}>{Pro_adress}</Text>
          </View>
          <View>
            <Text style={styles.Prorest}>{Pro_mail}</Text>
          </View>          
          <View>
            <Text style={styles.Prorest}>{Pro_phone}</Text>
          </View>
        </View>

        <View style={styles.secDate}>
          <View>
            <Text style={styles.datecrea}>{Place_creation}, le {Date_creation}</Text>
          </View>
          <View>
            <Text style={styles.datecrea}>Valide jursqu'au {Date_validity}</Text>
          </View>          
        </View>

        <View style={styles.secpat}>
          <View>
            <Text style={styles.patient}>{Client}</Text>
          </View>
          <View>
            <Text style={styles.patid}>{Client_id}</Text>
          </View>    
        </View>    


        <View style={styles.presc}>
          <View >
            <Text style={styles.name}>{Name} - {idPrescription}</Text>
          </View>          
          
          <View >
            <Text style={styles.med}>{Medicine} - {Quantity}</Text>
            <Text style={styles.des}>{Description}</Text>
          </View>

          <View >
            <Text style={styles.med}>{Medicine} - {Quantity}</Text>
            <Text style={styles.des}>{Description}</Text>
          </View>
        </View>

        <View style={styles.sign}>
          <Text>Signature</Text>
        </View>

      </View>
    </Page>
  </Document>




function DownloadPDF() {
  const [count, setCount] = useState(0)

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
        document={<Ordonnance />}
        fileName="somename.pdf"
        >
        {({loading}) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
    </div>
  )
}

export default DownloadPDF
