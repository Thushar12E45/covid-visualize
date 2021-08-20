const fs = require('fs');
const csv = require('csvtojson');

function writeFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log('file writing complete');
    }
  });
}
async function start() {
  let covidData = await csv().fromFile('./src/inputData/covid_19_india.csv');
  covidData = JSON.stringify(covidData);
  writeFile('./public/covidData.json', covidData);

  let testingData = await csv().fromFile('./src/inputData/StatewiseTestingDetails.csv');
  testingData = JSON.stringify(testingData);
  writeFile('./public/testingData.json', testingData);

  let vaccineData = await csv().fromFile('./src/inputData/covid_vaccine_statewise.csv');
  vaccineData = JSON.stringify(vaccineData);
  writeFile('./public/vaccineData.json', vaccineData);
}

start();
