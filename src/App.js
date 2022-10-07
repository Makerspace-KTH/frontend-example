import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

const fetchApi1 = () => {
    return fetch('http://api1.example.dev.kthcloud.com/hello').then(response => response.text())
}

const fetchApi2 = () => {
    return fetch('http://api2.example.dev.kthcloud.com/hello').then(response => response.text())
}


function App() {

    const [api1Response, setApi1Response] = useState("")
    const [api2Response, setApi2Response] = useState("")

    useEffect(() => {
        // fetchApi1().then(result => {
        //         setApi1Response(result)
        //     }
        // )
        // fetchApi2().then(result => {
        //     setApi2Response(result)
        // })
    })

    return (
        <div className="float-container">

            <div className="float-child">
                <button onClick={() =>
                    fetchApi1().then(result => {
                        setApi1Response(result)
                    })}
                >Fetch API 1</button>
                <div>{api1Response}</div>
            </div>

            <div className="float-child">
                <button onClick={() =>
                    fetchApi2().then(result => {
                        setApi2Response(result)
                    })}
                >Fetch API 2</button>
                <div>{api2Response}</div>
            </div>

        </div>
    );
}

export default App;
