interface AlloResto {
  restaurants:          Restaurant[];
  categories:           Category[];
  restaurantCategories: RestaurantCategory[];
}

interface Category {
  id?:            string;
  name?:          string;
  restaurantIds?: string[];
}

interface RestaurantCategory {
  restaurantId?: string;
  categoryId?:   string;
}

interface Restaurant {
  id?:          string;
  name?:        string;
  description?: string;
  categoryIds?: string[];
}

//interfaces créées avec le site https://app.quicktype.io/

abstract class HttpClient<T> {
  protected url: string;
  protected options: RequestInit;

  constructor(url: string) {
    this.url = url;
    this.options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  public async execute(): Promise<T | void>{
    try {
      const response = await fetch(this.url, this.options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data : T = await response.json(); //extraction du corps de la réponse au format JSON
      console.log(data);
      return data;
    } catch (error) {
      console.error("There was a problem with the fetch operation: ", error);
    }
  }
}

class CreateClient<T> extends HttpClient<T> {
  constructor(url: string, data: T) {
    super(url);
    this.options.method = "POST";
    this.options.body = JSON.stringify(data);
  }
}

class ReadClient<T> extends HttpClient<T> {
  constructor(url: string) {
    super(url);
    this.options.method = "GET";
  }
}

class UpdateClient<T> extends HttpClient<T> {
  constructor(url: string, data: T) {
    super(url);
    this.options.method = "PATCH";
    this.options.body = JSON.stringify(data);
  }
}

class DeleteClient<T> extends HttpClient<T> {
  constructor(url: string) {
    super(url);
    this.options.method = "DELETE";
  }
}

//lecture de tous les restaurants
const url = "http://localhost:3000/restaurants";

const readClient = new ReadClient<Restaurant[]>(url);
readClient.execute().then((restaurants) => {
  if (restaurants) {
    restaurants.forEach((restaurant) => {
      console.log(restaurant.name);
    });
  }
});


//suppression du restaurant "Le Café Rigolo"
const deleteClient = new DeleteClient(`${url}/3aa8`);
deleteClient.execute();

//création du restaurant "Le Restaurant de la Joie"
const data: Restaurant = {
  name: "Le Restaurant de la Joie",
  description: "Un restaurant où la joie est au menu",
  categoryIds: ["71b2"],
};

const createClient = new CreateClient<Restaurant>(url, data);
createClient.execute();

//modification du restaurant "Le Grill Marrant" pour le renommer "Le Grill Super Marrant"
const updatedData : Restaurant= {
  name: "Le Grill Super Marrant",
};

const updateClient = new UpdateClient<Restaurant>(`${url}/12b3`, updatedData);
updateClient.execute();


