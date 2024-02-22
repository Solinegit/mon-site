class HttpClient {
  private url: string;
  private options: RequestInit;

  constructor(url: string, options: RequestInit) {
    this.url = url;
    this.options = options;
  }

  async fetch() {
    try {
      const response = await fetch(this.url, this.options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      return console.error('There was a problem with the fetch operation: ', error);
    }
  }
}

// Utilisation
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application',
    'Custom-Header': 'CustomValue'
  }
};
const client = new HttpClient('https://www.example.com', options);

client.fetch().then(data => console.log(data));