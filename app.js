const express = require('express');
const app = express();
app.get('/',(req, res)=>{
    return res.send('<h1>Welcome</h1>');
});

const hostname = '192.168.110.193';
const port = 3000;

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)});


    