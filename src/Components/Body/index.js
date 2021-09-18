import React, { useState, useEffect } from "react";
import "./styles.css";

const Body = () => {
  const [casa, setCasa] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/jumara-pimenta/api-sensores/casa")
      .then((response) => response.json())
      .then((data) => setCasa(data));
  }, []);

  const [devices, setDevice] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/jumara-pimenta/api-sensores/devices")
      .then((response) => response.json())
      .then((data) => setDevice(data));
  }, []);

    // const consumption = [5.4, 490.8, 27, 8.1, 545.4, 10.8, 15.75, 62.25, 2.25, 110.7, 2.7]
    
    // const soma = consumption.reduce(function(soma, i){
    //     return soma + i;
    // }) 

    // return (soma)


  return (
    <div className="body">
      <h1 className="title">Resumo</h1>
      <section className="temperature">
        {casa.map((rooms) => (
          <div className="temperature-rooms" key={rooms.id}>
            <p>{rooms.name}</p>
            <img
              className="image-thermometer"
              src={rooms.image}
              alt="imagem de um termômetro"
            />
            <p>{rooms.temperature}ºC</p>
          </div>
        ))}
        
      </section>
      <section className="consumo"> 
        {devices.map((devices) => (
            <div className="consumo-total" key={devices.id}>
             <p>O aparelho {devices.name}</p>
             <p>do cômodo {devices.casaId}</p>
            <p>está consumindo  {devices.name} no momento</p>         
            </div>
        )
        )}     
              
          {/* <div className="consumo-total">
            Consumo total de energia no dia
            <div className="bgConsumo">80,25 KWh</div>
          </div>
          <section className="section-devices">
            <div className="devices">
                <div className="bgDevices"></div>
                <div className="devices-content">
                    <p>Quarto 1</p>
                    <h3>Ar condicionado</h3>
                    <h1>80,25 KWh</h1>
                </div>
            </div>
            <div className="devices">
                <div className="bgDevices"></div>
                <div className="devices-content">
                    <p>Quarto 1</p>
                    <h3>Ar condicionado</h3>
                    <h1>80,25 KWh</h1>
                </div>
            </div>
            <div className="devices">
                <div className="bgDevices"></div>
                <div className="devices-content">
                    <p>Quarto 1</p>
                    <h3>Ar condicionado</h3>
                    <h1>80,25 KWh</h1>
                </div>
            </div>
            <div className="devices">
                <div className="bgDevices"></div>
                <div className="devices-content">
                    <p>Quarto 1</p>
                    <h3>Ar condicionado</h3>
                    <h1>80,25 KWh</h1>
                </div>
            </div>
          </section> */}
      </section>
    </div>
  );
};

export default Body;
