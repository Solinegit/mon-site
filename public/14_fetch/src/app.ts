
//fetch the latest earthquake data from the USGS API with this url https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=yesterday&endtime=today&minmagnitude=4

interface Earthquake {
  properties: {
    time: number,
    place: string,
    mag: number
  }
}

class EarthquakeService {

  //fetch the latest earthquake data from the USGS API
  private async getEarthquakesFromUSGS(): Promise<Earthquake[]>{
    const response = await fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=yesterday&endtime=today&minmagnitude=4');
    const earthquakejson = await response.json();
    return earthquakejson.features;
  }

//for each earthquake, log 
// - the time and date with the format "YYYY-MM-DD HH:MM (Paris time)"
// - the magnitude of the earthquake
// - the place of the earthquake
// and display it on the page as well as in the console
  async displayEarthquakes(){
    const earthquakes = await this.getEarthquakesFromUSGS(); // Await the promise to resolve
    const ul : HTMLUListElement= document.createElement('ul');
    earthquakes.forEach(earthquake => { // Use forEach on the resolved earthquakes array
      const li : HTMLLIElement= document.createElement('li');
      const date : Date = new Date(earthquake.properties.time);
      const options: Intl.DateTimeFormatOptions = {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Paris'};
      const dateString : string = date.toLocaleDateString('fr-FR', options);
      const finalString : string = `${dateString} - ${earthquake.properties.mag} - ${earthquake.properties.place}`;
      li.textContent = finalString;
      ul.appendChild(li);
      console.log(finalString);
    });
    document.body.appendChild(ul);
  }
}

const earthquakeService = new EarthquakeService();
earthquakeService.displayEarthquakes();










