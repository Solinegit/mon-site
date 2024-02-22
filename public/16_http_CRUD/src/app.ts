abstract class HttpClient {
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

  protected async fetch() {
    try {
      const response = await fetch(this.url, this.options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("There was a problem with the fetch operation: ", error);
    }
  }

  public async execute() {
    const data = await this.fetch();
    console.log(data);
  }
}

class CreateClient extends HttpClient {
  constructor(url: string, data: any) {
    super(url);
    this.options.method = "POST";
    this.options.body = JSON.stringify(data);
  }
}

class ReadClient extends HttpClient {
  constructor(url: string) {
    super(url);
    this.options.method = "GET";
  }
}

class UpdateClient extends HttpClient {
  constructor(url: string, data: any) {
    super(url);
    this.options.method = "PATCH";
    this.options.body = JSON.stringify(data);
  }
}

class DeleteClient extends HttpClient {
  constructor(url: string) {
    super(url);
    this.options.method = "DELETE";
  }
}

//lecture de tous les restaurants
const url = "http://localhost:3000/restaurants";

const readClient = new ReadClient(url);
readClient.execute();

//suppression du restaurant "Le Café Rigolo"
const deleteClient = new DeleteClient(`${url}/3aa8`);
deleteClient.execute();

//création du restaurant "Le Restaurant de la Joie"
const data = {
  name: "Le Restaurant de la Joie",
  description: "Un restaurant où la joie est au menu",
  categoryIds: ["71b2"],
};

const createClient = new CreateClient(url, data);
createClient.execute();

//modification du restaurant "Le Grill Marrant" pour le renommer "Le Grill Super Marrant"
const updatedData = {
  name: "Le Grill Super Marrant",
};

const updateClient = new UpdateClient(`${url}/12b3`, updatedData);
updateClient.execute();


