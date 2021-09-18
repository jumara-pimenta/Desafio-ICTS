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

      <section className="sensor"> 
        {devices.map((devices) => (
            <div className="geral-sensor" key={devices.id}>
             <p>O aparelho {devices.name}</p>
             <p>do cômodo {devices.casaId}</p>
             <p>consumiu {devices.consumption}KW até momento</p>         
            </div>
        )
        )}     
      </section>

      <section className="consumption">
          <div className="consumption-total">
            Consumo total de energia no dia
            <div className="bgConsumption">1.283,85 KWh</div>
          </div>
          <section className="section-devices">
                <h2> Sensor com maior consumo de energia </h2>
                    <section className="devices-consumption">
                        <div className="devices">
                            <div className="bgDevices"></div>
                            <div className="devices-content">
                                <p>Quarto 2</p>
                                <h3>Ar condicionado</h3>
                                <h1>545,40 KWh</h1>
                            </div>
                        </div>
                        <div className="devices">
                            <div className="bgDevices"></div>
                            <div className="devices-content">
                                <p>Quarto 1</p>
                                <h3>Ar condicionado</h3>
                                <h1>490,80 KWh</h1>
                            </div>
                        </div>
                        <div className="devices">
                            <div className="bgDevices"></div>
                            <div className="devices-content">
                                <p>Cozinha</p>
                                <h3>Microondas</h3>
                                <h1>110,70 KWh</h1>
                            </div>
                        </div>
                        <div className="devices">
                    <div className="bgDevices"></div>
                    <div className="devices-content">
                        <p>Sala</p>
                        <h3>Ar condicionado</h3>
                        <h1>62,25 KWh</h1>
                    </div>
                </div>
                    </section>
          </section>
      </section>
    </div>
  );


};

export default Body;
