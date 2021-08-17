const fs = require('fs');
const csv = require('csvtojson');

async function start() {
  const data = await csv().fromFile('./src/inputData/covid_19_india.csv');
  const covidData = JSON.stringify(data);
  fs.writeFile('./public/covidData.json', covidData, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log('file writing complete');
    }
  });
}

start();
