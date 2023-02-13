import { useState } from "react";
import './App.css';



function Temp() {

    const [searchValue, setSearchValue] = useState("Amravati");

    const [weatherData, setWeatherData] = useState({});



    const getWheatherdata = async () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=2a855f413772ea00523d662a420b0b01&units=metric`;
        let resp = await fetch(url);
        let data = await resp.json();
        const { temp, feels_like, temp_min, temp_max, pressure, humidity } = data.main;
        const { speed } = data.wind;
        const { all } = data.clouds;
        const { country } = data.sys;
        const { main: atmosphere } = data.weather[0];

        const weatherInfo = {
            temp, feels_like, temp_min, temp_max, pressure, humidity, speed, all, country, atmosphere
        }

        setWeatherData(weatherInfo);


    }
    return (
        <>
            <br></br>

            <div className="main-div">
                <div className="container container-center">
                    <h3>Check out Climate...</h3>
                    <hr></hr>
                    <br></br><br></br>
                    <div className="row">
                        <div className="col-md-4 offset-4">
                            <input type="text" placeholder="Enter city here" className="form-control"
                                value={searchValue} onChange={(e) => setSearchValue(e.target.value)}></input><br></br>
                            <button onClick={getWheatherdata} className="btn btn-warning">Climate</button>

                        </div>
                     </div>
                     <br></br><br></br>
                     <div className="row">
                        <div className="col-md-4 offset-4">
                        <div id="one">
                            <h2>Temperature <i className="fa fa-sun"></i> :{weatherData.temp}</h2>
                            <h6>feels_like:{weatherData.feels_like}</h6>
                            <h6>Min-Temp: {weatherData.temp_min}</h6>
                            <h6>Max-Temp: {weatherData.temp_max}</h6>
                            <h6>pressure:{weatherData.pressure}</h6>
                            <h6>Clouds <i className="fa fa-cloud"></i> :{weatherData.all}</h6>
                            <h6>atmosphere:{weatherData.atmosphere}</h6>
                        </div>
                        </div>
                        </div>

                   

                </div>




            </div>



        </>
    )
}

export default Temp;
