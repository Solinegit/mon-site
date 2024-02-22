interface GenreInterface {
  id: number;
  name: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  type: string;
}

interface GenreAPI {
  data: GenreInterface[];
}

async function getGenresFromDeezer() {
  const response = await fetch(
    "http://localhost:8088/https://api.deezer.com/genre/"
  );
  const genrejson: GenreAPI = await response.json();
  return genrejson.data;
}

getGenresFromDeezer().then((genres: GenreInterface[]) =>
  genres.forEach((genre: GenreInterface) => console.log(genre.name))
);

//même exemple mais avec une classe

class DeezerService {
  async getGenresFromDeezer() {
    const response = await fetch(
      "http://localhost:8088/https://api.deezer.com/genre/"
    );
    const genrejson: GenreAPI = await response.json();
    return genrejson.data;
  }

  async displayGenres() {
    const genres: GenreInterface[] = await this.getGenresFromDeezer();
    genres.forEach((genre: GenreInterface) => console.log(genre.name));
  }
}

const deezerService = new DeezerService();
deezerService.displayGenres();
