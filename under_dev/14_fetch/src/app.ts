

//fetch the latest earthquake data from the USGS API with this url https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=yesterday&endtime=today&minmagnitude=4

async function getEarthquakesFromUSGS(){
    const response = await fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=yesterday&endtime=today&minmagnitude=4');
    const earthquakejson = await response.json();
    return earthquakejson.features;
}

getEarthquakesFromUSGS().then(
  (earthquakes)=>earthquakes.forEach((earthquake)=>console.log(earthquake.properties.place))
)