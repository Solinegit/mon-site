interface GenreInterface {
    id:             number;
    name:           string;
    picture:        string;
    picture_small:  string;
    picture_medium: string;
    picture_big:    string;
    picture_xl:     string;
    type:           string;
}

interface GenreAPI {
    data: GenreInterface[];
}


async function getGenresFromDeezer() {
   
    const response = await fetch('https://api.deezer.com/genre/');
    const genrejson : GenreAPI = await response.json();
    return genrejson.data;

} 

getGenresFromDeezer().then(
  (genres:GenreInterface[])=>genres.forEach((genre:GenreInterface)=>console.log(genre.name))
)