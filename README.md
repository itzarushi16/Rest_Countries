"# Rest_Countries" 


# Rest Countries Explorer

A full-stack application to explore countries using the [Rest Countries API](https://restcountries.com/). Users can **view all countries**, **search by name, code, continent, or capital**, and get country details.

## Features

* Fetch a list of all countries
* Search countries by:

  * Name
  * Country code
  * Continent
  * Capital
* React frontend with a clean UI
* Spring Boot backend providing REST APIs
* CORS enabled for frontend-backend communication
* Uses H2 in-memory database for persistence (if needed)

## Tech Stack

**Frontend:**

* React.js
* HTML, CSS, JavaScript

**Backend:**

* Java 21
* Spring Boot
* Spring Web, Spring Data JPA
* H2 Database
* Maven

## Project Structure

```
restcountries/
├── frontend/             # React frontend
├── restcountries/        # Spring Boot backend
│   ├── src/main/java/com/example/restcountries/
│   │   ├── controller/  # REST controllers
│   │   ├── service/     # Service classes
│   │   └── RestCountriesApplication.java
│   └── pom.xml           # Maven project file
└── .gitignore            # Git ignore file
```

## Getting Started

### Prerequisites

* Java 21+
* Node.js & npm
* Maven

### Backend Setup

1. Navigate to the backend folder:

```bash
cd restcountries
```

2. Build and run the Spring Boot application:

```bash
mvn clean install
mvn spring-boot:run
```

The backend will start on [http://localhost:8080](http://localhost:8080).

### Frontend Setup

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies and start React app:

```bash
npm install
npm start
```

The frontend will run on [http://localhost:5173](http://localhost:5173).

## API Endpoints

| Method | Endpoint                    | Description            |
| ------ | --------------------------- | ---------------------- |
| GET    | `/api/countries`            | Fetch all countries    |
| GET    | `/api/countries?name=`      | Search by country name |
| GET    | `/api/countries?code=`      | Search by country code |
| GET    | `/api/countries?continent=` | Search by continent    |
| GET    | `/api/countries?capital=`   | Search by capital city |

## Notes

* Make sure the backend is running before starting the frontend.
* The project ignores IDE files (`.metadata/`) and build folders via `.gitignore`.

## Author

**Arushi Alone**

