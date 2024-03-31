const express = require('express');
const app = express();
const hostname = '0.0.0.0';
const port = 3000;

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)});