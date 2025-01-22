const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


const saveDataToJson = (data) => {
  const filePath = path.join(__dirname, 'data.json');
  
  
  fs.readFile(filePath, 'utf8', (err, fileData) => {
    if (err && err.code === 'ENOENT') {
      
      fileData = '[]';
    } else if (err) {
      console.error('Error reading file:', err);
      return;
    }

    
    let jsonData = JSON.parse(fileData);

    
    jsonData.push(data);

    
    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Data saved to data.json');
      }
    });
  });
};


app.post('/submit-cricket', (req, res) => {
  const { players, hours, fees } = req.body;
  const registrationData = {
    sport: 'Cricket',
    players,  
    hours,    
    fees,     
    date: new Date()
  };

  saveDataToJson(registrationData); 

  res.send('Thank you for your Cricket booking!');
});


app.post('/submit-football', (req, res) => {
  const { players, hours, fees } = req.body;
  const registrationData = {
    sport: 'Football',
    players,  
    hours,    
    fees,     
    date: new Date()
  };

  saveDataToJson(registrationData); 

  res.send('Thank you for your Football booking!');
});


app.post('/submit-basketball', (req, res) => {
  const { players, hours, fees } = req.body;
  const registrationData = {
    sport: 'Basketball',
    players,  
    hours,    
    fees,     
    date: new Date()
  };

  saveDataToJson(registrationData); 

  res.send('Thank you for your Basketball booking!');
});


app.post('/submit-newsletter', (req, res) => {
  const { email } = req.body;
  const registrationData = {
    email,    
    date: new Date()
  };

  saveDataToJson(registrationData); 

  res.send('Thank you for subscribing to our newsletter!');
});


const PORT = process.env.PORT || 8081;
const HOST = 'localhost';  

app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
