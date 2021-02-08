// import './App.css';
import React from 'react';
import Card from './Components/Card';
import Form from './Components/Form';
import Mobil from './Components/Mobil';

// dengan menggunakan function
// const Card = (props) =>{
//   return (
//     <div>
//       <h5>Judul: {props.title}</h5>
//       <h3>Author: {props.author}</h3>
//       <h4>Harga: {props.harga}</h4>
//     </div>
//   )
// }

// // dengan menggunakan class
// class Card extends React.Component {
//   render() {
//     return(
//       <div>
//       <h5>Judul: {this.props.title}</h5>
//       <h3>Author: {this.props.author}</h3>
//       <h4>Harga: {this.props.harga}</h4>
//     </div>
//     )
//   }
// }
function App() {
  return (
    <div className="App">
      {/* <Halaman /> */}
      <Form />
      <h5>Kendaraan : Motor</h5>
      <Card jenis="Honda" />
      <Card jenis="Yamaha" />
      <Card jenis="Suzuki" />
      <h5>Kendaraan : Mobil</h5>
      <Mobil jenis="Honda" />
      <Mobil jenis="Mitsubishi" />
      <Mobil jenis="Tesla" />
      {/* <Card title="Rumah" author="Yazid" harga="100000" />
      <Card title="Halaman" author="akbar" harga="1009900" />
      <Card title="Kamu" author="Dia" harga="memang" />
      <Card title="Rumah" author="Yazid" harga="100000" />
      <Card title="Rumah" author="Yazid" harga="100000" /> */}
    </div>
  );
}

export default App;
