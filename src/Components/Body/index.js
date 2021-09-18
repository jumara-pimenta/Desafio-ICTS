import React, { useState, useEffect } from "react";
import "./styles.css";
import Chart from "react-google-charts";

const Body = () => {
  const [casa, setCasa] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/jumara-pimenta/api-sensores/casa"
    )
      .then((response) => response.json())
      .then((data) => setCasa(data));
  }, []);

  const [devices, setDevice] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/jumara-pimenta/api-sensores/devices"
    )
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
        ))}
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
              <div className="bgDevices red"></div>
              <div className="devices-content">
                <p>O sensor do quarto 2 está consumindo 564,30 KWh</p>
              </div>
            </div>
            <div className="devices">
              <div className="bgDevices red"></div>
              <div className="devices-content">
                <p>O sensor do quarto 1 está consumindo 523,20 KWh</p>
              </div>
            </div>
            <div className="devices">
              <div className="bgDevices green"></div>
              <div className="devices-content">
                <p>O sensor da cozinha está consumindo 116,10 KWh</p>
              </div>
            </div>
            <div className="devices">
              <div className="bgDevices green"></div>
              <div className="devices-content">
                <p>O sensor da sala está consumindo 80,25 KWh</p>
              </div>
            </div>
          </section>
        </section>
      </section>

      <section className="chart-time">
        <>
          <div className="chart">
            <Chart
              className="chart-device"
              chartType="ColumnChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Device", "Time"],
                ["Lâmpada, Quarto 1", 12],
                ["Ar condicionado, Quarto 1", 16],
                ["TV, quarto 1", 8],
                ["Lâmpada, Quarto 2", 18],
                ["Ar condicionado, Quarto 2", 18],
                ["TV, Quarto 2", 2],
                ["TV, Sala", 6],
                ["Ar condicionado, Sala", 2],
                ["Lâmpada, Sala", 5],
                ["Microndas, Cozinha", 3],
                ["Lâmpada, Cozinha", 6],
                ["Lâmpada, Cozinha", 6],
              ]}
              options={{
                title: "Tempo usado por cada dispositivo",
                chartArea: { width: "40%" },
                hAxis: {
                  title: "Dispositivo",
                  minValue: 0,
                },
                vAxis: {
                  title: "Horas",
                },
              }}
              legendToggle
            />
          </div>
        </>

        <>
          <div className="chart">
            <Chart
              className="chart-device"
              chartType="ColumnChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Sensor", "Time"],
                ["Quarto 1", 16],
                ["Quarto 2", 18],
                ["Sala", 6],
                ["Cozinha", 6],
              ]}
              options={{
                title: "Tempo usado por cada sensor",
                chartArea: { width: "40%" },
                hAxis: {
                  title: "Sensor",
                  minValue: 0,
                },
                vAxis: {
                  title: "Horas",
                },
              }}
              legendToggle
            />
          </div>
        </>
      </section>
    </div>
  );
};

export default Body;
