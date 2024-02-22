// Une fonction qui retourne une promesse qui se résout après un délai spécifié
function delay(milliseconds: number): Promise<void> {
    return new Promise<void>(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

// Une fonction asynchrone qui utilise la fonction de délai
async function fetchData(): Promise<string> {
    console.log('Fetching data...');
    await delay(2000); // Attendre 2 secondes
    console.log('Data fetched!');
    return 'Some data';
}

// Appeler la fonction asynchrone
fetchData().then(data => console.log(data));

//même exemple mais dans une classe

class DataService {
    delay(milliseconds: number): Promise<void> {
        return new Promise<void>(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }

    async fetchData(): Promise<string> {
        console.log('Fetching data...');
        await this.delay(2000); // Attendre 2 secondes
        console.log('Data fetched!');
        return 'Some data';
    }

    async retrieveData() {
        const data = await this.fetchData();
        console.log(data);
    }
}

const dataService = new DataService();
dataService.retrieveData();

//autre exemple
// Une fonction qui retourne une promesse qui se résout si la lecture réussit, et se rejette si elle échoue
function readFile(filename: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        // Simuler une opération de lecture de fichier
        const success = Math.random() > 0.5; // 50% de chance de réussir

        setTimeout(() => {
            if (success) {
                resolve('Contenu du fichier ${filename}');
            } else {
                reject(new Error('Erreur de lecture du fichier ${filename}'));
            }
        }, 2000);
    });
}

// Utiliser la promesse
readFile('monFichier.txt')
    .then(content => console.log(content))
    .catch(error => console.error(error.message));

//même exemple mais dans une classe

class FileService {
    readFile(filename: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const success = Math.random() > 0.5;

            setTimeout(() => {
                if (success) {
                    resolve(`Contenu du fichier ${filename}`);
                } else {
                    reject(new Error(`Erreur de lecture du fichier ${filename}`));
                }
            }, 2000);
        });
    }

    async retrieveFileContent(filename: string) {
        try {
            const content = await this.readFile(filename);
            console.log(content);
        } catch (error) {
            console.error(error.message);
        }
    }
}

const fileService = new FileService();
fileService.retrieveFileContent('monFichier.txt');