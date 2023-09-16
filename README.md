## Restaurant Listing App


### Description

The Restaurant Listing App is a web application built to manage and display information about various restaurants. It provides features such as adding new restaurants, editing restaurant details, deleting restaurants, and viewing a list of all restaurants. The app is built using a combination of React and Node.js, with a MySQL database to store restaurant data.



## Table of Contents

-   Features
-   Tech Stack
-   Getting Started
    - Prerequisites
    - Installation
-   Usage
-   Project Structure
-   Deployement
-   Contributing
-   License


## Features

-   **Add New Restaurant** : Users can add new restaurants to the database, including restaurant name, location, owner email, and other relevant information.

-   **Edit Restaurant Details** : Existing restaurant details can be updated, allowing users to modify information such as the restaurant's name, address, or contact etc.

-   **Delete Restaurants** : Restaurants can be removed from the database if they are no longer relevant.

-   **View All Restaurants** :  Users can effortlessly explore a rich database of restaurants, refining searches by name or location. Integrated pagination ensures a seamless browsing experience.


## Tech Stack
-   **Frontend** :
    - React
    - Material UI
    - Redux for state management
    - React hooks (useState, useEffect, useSearchParams, useLocation etc.)

-   **Backend** :
    - Node.js
    - Express.js for building the API
    - Sequelize as the ORM (Object-Relational Mapping)
    - MySQL as the backend database


## Getting Started

-   Follow these instructions to set up and run the project on your local machine.

-   **Prerequisites**

    - Node.js and npm installed
    - MySQL database server
    - Git 

-   **Installation**

    - Clone the repository : ***git clone https://github.com/Mrkishansharma/Restaurant-Listing-Platform***
    - Navigate to the project directory : **cd restaurant_listing_app**
    - Install frontend dependencies : ***npm install***
    - Install backend dependencies : ***npm install***
    - Configure the database connection in the server configuration files.
    - Run the development server for the frontend and backend separately :
        - FrontEnd : ***npm start***
        - BackEnd : ***npm start***


## Usage

-   Visit the app in your web browser.
-   Use the navigation and user interface to add, edit, delete, and view restaurant listings.


-   Snapshots of the App is attached below.


### Home Page

![image](https://github.com/Mrkishansharma/Restaurant-Listing-Platform/assets/89073918/3eae9d7f-b5ee-47a9-afc4-ac796cb79f8e)



### Add New Restaurant Page

![image](https://github.com/Mrkishansharma/Restaurant-Listing-Platform/assets/89073918/c8d8ea41-8079-4c3b-b618-c18f4d2b37a2)


### Restaurant Page

![image](https://github.com/Mrkishansharma/Restaurant-Listing-Platform/assets/89073918/e1bd9882-e821-4418-9880-130274a30e17)

![image](https://github.com/Mrkishansharma/Restaurant-Listing-Platform/assets/89073918/e24c223a-dc73-4413-8848-09c55b71af02)


### Edit Restaurant Page

![image](https://github.com/Mrkishansharma/Restaurant-Listing-Platform/assets/89073918/6e2536ce-1a24-4ab0-b4ce-c85a8fe12b6d)

![image](https://github.com/Mrkishansharma/Restaurant-Listing-Platform/assets/89073918/69c09333-6b4c-4a6a-a55a-06c2527c9e92)

![image](https://github.com/Mrkishansharma/Restaurant-Listing-Platform/assets/89073918/43a9c4e4-355d-4185-9921-c900dafb4349)

![image](https://github.com/Mrkishansharma/Restaurant-Listing-Platform/assets/89073918/766837c5-0580-40d0-ad3a-6717103efcaa)


## Project Structure

-   **Restaurant_App** : Contains the frontend React application.
-   **Backend** : Contains the backend Node.js and Express application.
-   **Database** : Includes scripts and migrations for setting up and managing the MySQL database.
-   **Config** : Configuration files for both frontend and backend.
-   **Public** : Public assets and Material UI template for the frontend.


## Deployement

-   **Backend API Link** :- 
***https://restaurants-api-mrkishansharma.vercel.app/***

-   **Frontend Link** :-
***https://restaurant-app-mrkishansharma.vercel.app/***


## Contributing

-   Contributions are welcome! Feel free to enhance our project by submitting your ideas, bug fixes, or new features through pull requests.


## License

-   This project is licensed under the MIT License - see the LICENSE file for details.
