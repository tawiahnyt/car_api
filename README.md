# Car Data API

This is a Node.js and Express.js API for retrieving car data from a MongoDB database. The API allows you to query cars by various parameters such as make, model, year, and fuel type. You can also use multiple parameters in a single request.

## Table of Contents

- [Car Data API](#car-data-api)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
    - [Get Random Cars](#get-random-cars)
    - [Get Cars by Make](#get-cars-by-make)
    - [Get Cars by Model](#get-cars-by-model)
    - [Get Cars by Year](#get-cars-by-year)
    - [Get Cars by Fuel Type](#get-cars-by-fuel-type)
    - [Get Cars with Multiple Parameters](#get-cars-with-multiple-parameters)
  - [License](#license)

## Installation

To set up the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/car_data_api.git
   cd car_data_api
   ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the server:
   ```sh
   npm start
   ```

## Usage

Once the server is running, you can interact with the API using an HTTP client like [Postman](https://www.postman.com/) or `curl`.

## API Endpoints

### Get Random Cars
- **URL**: `/api/v1/cars`
- **Method**: `GET`
- **Query Parameters**:
  - `limit` (optional): Number of cars to return (default is 15).
  
- **Example**:
   ```sh
   curl -X GET "http://localhost:3000/api/v1/cars?limit=30"
   ```

### Get Cars by Make
- **URL**: `/api/v1/cars`
- **Method**: `GET`
- **Query Parameters**:
  - `make` (optional): Car make to filter by.

- **Example**:
   ```sh
   curl -X GET "http://localhost:3000/api/v1/cars?make=toyota"
   ```

### Get Cars by Model
- **URL**: `/api/v1/cars`
- **Method**: `GET`
- **Query Parameters**:
  - `model` (optional): Car model to filter by.

- **Example**:
   ```sh
   curl -X GET "http://localhost:3000/api/v1/cars?model=corolla"
   ```

### Get Cars by Year
- **URL**: `/api/v1/cars`
- **Method**: `GET`
- **Query Parameters**:
  - `year` (optional): Year to filter by.

- **Example**:
   ```sh
   curl -X GET "http://localhost:3000/api/v1/cars?year=2020"
   ```

### Get Cars by Fuel Type
- **URL**: `/api/v1/cars`
- **Method**: `GET`
- **Query Parameters**:
  - `fuel_type` (optional): Fuel type to filter by.

- **Example**:
   ```sh
   curl -X GET "http://localhost:3000/api/v1/cars?fuel_type=gasoline"
   ```

### Get Cars with Multiple Parameters
You can combine multiple query parameters to filter cars based on more than one attribute.

- **Example**:
   ```sh
   curl -X GET "http://localhost:3000/api/v1/cars?make=toyota&model=corolla&year=2020&fuel_type=gasoline"
   ```

## License

This project is licensed under the MIT License.