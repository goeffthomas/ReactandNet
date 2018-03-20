// Navigate to http://localhost:57125
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const baseUrl = 'http://localhost:56674';

console.log('page loaded');

axios.get(`${baseUrl}/api/values`).then(response => {
    console.log(response);
    document.getElementById('app').innerText = JSON.stringify(response);
})