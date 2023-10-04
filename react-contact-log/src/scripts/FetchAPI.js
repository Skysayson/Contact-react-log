import React from "react";
import { useEffect,useState } from "react";

function fetchData() {
    const [records, setRecords] = useState([]);


    useEffect(() => {
        fetch('https://todolist-sample.000webhostapp.com/read.php')
        .then(response => response.json())
        .then(data => setRecords(data))
        .then(err => console.log(err))
    }, [])

}
