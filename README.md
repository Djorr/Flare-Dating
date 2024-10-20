# Flare Dating App - Backend & Frontend

**Flare** is een dating-app ontworpen om mensen te helpen verbinden op basis van hun interesses en voorkeuren. Deze repository bevat zowel de backend- als de frontend-applicatie, gebouwd met Node.js, Express en React Native.

## Inhoudsopgave

- [Flare Dating App - Backend \& Frontend](#flare-dating-app---backend--frontend)
  - [Inhoudsopgave](#inhoudsopgave)
  - [Kenmerken](#kenmerken)
  - [Technologieën](#technologieën)
  - [Installatie](#installatie)
    - [Vereisten](#vereisten)
    - [Stappen om te installeren](#stappen-om-te-installeren)
    - [De applicatie uitvoeren](#de-applicatie-uitvoeren)
      - [Backend](#backend)
      - [Frontend](#frontend)
    - [API-eindpunten](#api-eindpunten)
      - [Authenticatie](#authenticatie)
      - [Gebruikersbeheer](#gebruikersbeheer)
      - [Bestandsuploads](#bestandsuploads)
      - [Database-instellingen](#database-instellingen)
    - [Licentie](#licentie)
    - [Contact](#contact)
    - [Opmerking](#opmerking)
    - [Screenshots](#screenshots)

## Kenmerken

- Gebruikersauthenticatie (registratie en inloggen)
- Beheer van gebruikersprofielen
- Veilige wachtwoordopslag met bcrypt
- JWT-gebaseerd sessiebeheer
- Bestandsuploads voor gebruikersafbeeldingen
- CORS-ondersteuning voor frontend-integratie

## Technologieën

- **Node.js** - JavaScript-runtime voor het bouwen van schaalbare netwerkaansluitingen
- **Express** - Snelle, ongeopinionneerde, minimalistische webframework voor Node.js
- **Mongoose** - ODM (Object Data Modeling) bibliotheek voor MongoDB en Node.js
- **Bcrypt** - Bibliotheek om wachtwoorden te hash'en
- **JWT (JSON Web Tokens)** - Voor veilige gebruikersauthenticatie
- **Multer** - Middleware voor het verwerken van multipart/form-data, gebruikt voor bestandsuploads
- **React Native** - Framework voor het bouwen van mobiele applicaties

## Installatie

### Vereisten

Zorg ervoor dat je het volgende hebt geïnstalleerd:

- [Node.js](https://nodejs.org/en/) (versie 12 of hoger)
- [MongoDB](https://www.mongodb.com/) (lokaal of via een cloudservice)
- [React Native](https://reactnative.dev/docs/environment-setup) (volg de instructies voor jouw platform)

### Stappen om te installeren

1. Kloneer de repository:
   ```bash
   git clone https://github.com/yourusername/flare-dating.git
   cd flare-dating
   ```

2. Installeer de vereiste afhankelijkheden:
   ```bash
   npm install
   ```

3. Maak een .env-bestand in de hoofdmap en stel je omgevingsvariabelen in:
   ```bash
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/flare
   JWT_SECRET=your_jwt_secret
   ```

### De applicatie uitvoeren

#### Backend
Navigeer naar de backend-map en start de backend-server met de volgende opdrachten:

```bash
cd backend
npm start
```

#### Frontend
Navigeer naar de frontend-map en start de frontend-applicatie met de volgende opdrachten:

```bash
cd frontend
npm start
```

### API-eindpunten
#### Authenticatie
- POST `/api/auth/register` - Registreer een nieuwe gebruiker
- POST `/api/auth/login` - Authenticeer gebruiker en retourneer een JWT

#### Gebruikersbeheer
- GET `/api/users/:id` - Verkrijg gebruikersprofiel op ID
- PUT `/api/users/:id` - Werk gebruikersprofiel bij
- DELETE `/api/users/:id` - Verwijder gebruikersaccount

#### Bestandsuploads
- POST `/api/upload` - Upload een bestand (bijv. gebruikersafbeeldingen)

#### Database-instellingen
De applicatie maakt gebruik van MongoDB voor gegevensopslag. Zorg ervoor dat je MongoDB-service draait en toegankelijk is. Pas de MONGODB_URI-variabele in het .env-bestand aan om verbinding te maken met je database.

### Licentie
Dit project is gelicentieerd onder de ISC-licentie. Zie het LICENSE-bestand voor meer details.

### Contact
Voor vragen of bijdragen kun je contact opnemen:

E-mail: contact@rubixstudios.nl

### Opmerking
Dit project is gemaakt voor de lol in één dag, om te zien hoe eenvoudig het is om een dating-app te maken. De frontend is relatief eenvoudig te bouwen, net als de backend, maar om met alle aspecten rekening te houden, ben je wel wat langer bezig.

### Screenshots

Hier zijn enkele screenshots van de Flare Dating App:

- **Login Pagina:**  
  ![Login Pagina](https://i.gyazo.com/b273ca7982ff62faa75e474c80777fa4.png)
  
- **Registratie Pagina:**  
  ![Registratie Pagina](https://i.gyazo.com/9d5fe7e9d1f6d5495f20587250e28c45.png)
  
- **Wachtwoord Vergeten:**  
  ![Wachtwoord Vergeten](https://i.gyazo.com/b5ee1f52cb651876d132ff2e394f32f7.png)
  
- **Swipe Kaarten:**  
  ![Swipe Kaarten](https://i.gyazo.com/c51729dc42e3549fa1fae9600d8723ed.png)
  
- **Berichten:**  
  ![Berichten](https://i.gyazo.com/391c058c5ef291e67a6959f2cf5838f0.png)
  
- **Profiel:**  
  ![Profiel](https://i.gyazo.com/4a1289dfd49f6ad991f46defad395a79.png)
  
- **Accountinstellingen en Premium instellingen:**  
  ![Accountinstellingen](https://i.gyazo.com/c3ae3919d3429e4ee43277f96acae131.png)

> **Opmerking:** Veel functies zijn nog niet volledig geïmplementeerd; het ontwerp is grotendeels gebouwd. Je kunt registreren en inloggen, evenals profielen leuk vinden en niet leuk vinden, maar er zijn op dit moment beperkte functionaliteiten beschikbaar.