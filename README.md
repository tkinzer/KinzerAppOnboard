KinzerAppOnboardZoo

The Zoo Management System is a tool for operating the logistics of a basic Zoo. The zoo has staff and animals, as well as the specifics behind operating the zoo, such as operating hours and fess.

#Requirements:
* Node
* Mongo
* Express
* React
* Git

###Project Overview

In order to create the management system for the zoo, I decided to use a REST API connected to a MongoDB for storing and retrieving details.

Next, I started to setup and implement a React App that would be the User Interface for the client to interact with the API Endpoints from within the browser. 



disclaimer: 

When the allotted time ran out, I was having a few issues with the debugging conflicts between my API and the React App. While the project will run, it does not function as intended and is incomplete.

Current State of the Platform:
- API: 
the endpoints and models using mongoose have been created for Staff, the Zoo, and Animals. There is a bug with adding multiple items to the collection when the body of the request is not formatted correctly.

- React 'Client' UI: 
The react UI has only been minimally built out from the Create-React-App towards the Portal to perform CRUD operations on Staff and Animals, as well as modify/add details about the Zoo.

The next steps, if time was available, would be:
- adding in reach-router to route between component views
- adding a framework or SASS to style the platform
- using the fetch library to connect to our API endpoints ( no time for use of state store libraries )
- Adding Client-side, Middleware, and API Validation
- Add important test cases to spec files for each Resource
- Add back Auth and JWT to lock down parts of the platform

Furthermore, I also wanted to use GraphQL which I have recently been using, to leverage its out-of-the-box tool, GraphiQL. This would have allowed for manipulating the Data through the API in the browser, and potentially met all the necessary requirements that you were looking for.

In the end, the appraoch just mentioned might have also taken to long with less to show for it, so I went with a single project repo with the API and React App together.




### Project Description

A zoo requires a lot of overhead and management. In order to run a successful zoo, the following major items need to be considered:

* Animal Caregiving and Overhead
* Staffing and Operating the Zoo
* Back-office Business Needs

Additionally, most zoo's that are successful will also provide:

* Family friendly activities
* Concessions (requires inventory management)
* Marketing and Customer Success

In order to provide all these services, the Zoo will need a platform that allows Staff and/or Admin to login and manage the zoo through an interactive website.

The staff will manage both the animals and the staff up until the point where the Zoo is able to assign specific staff to take care of specific duties around the Zoo.

Lastly, in order to remain open the Zoo must pass the following legal requirements:

* Minimum On-duty Staff:            5 Employees
* Maximum Amount of Animals:        20 Animals of same or different species
* Remain under a given budget:      $ X
* Earn a Profit of over:            $ Y
* Maximum Hours Per Staff:          60 hours

### INSTRUCTIONS

Steps to Start the project locally

1 - clone the repo onto your computer

git clone https://github.com/tkinzer/KinzerAppOnboard.git

checkout one of the following branches:
master:         a
api-client:     a
graphql:        a
simple-ui:         a

2 - Navigate to the React project folder first at:

cd KinzerAppOnboard/src/client

3 - Using npm install all the necessary packages

npm install

4 - Navigate back to the project root folder and install packages

cd ../..

npm install

5 - Start the Node Server for the API from the project root folder

yarn start
*This Should successfully launch the server for the api on port 5000

6 - Naviagate back to the React Client App

cd src/client

7 - Start the React App

npm start
* This should successfully start the node server for the react app and launch your browser to http://localhost:3000



** Didnt have time to add docker container


### APPENDIX

API Endpoints + Payloads

/api

    /staff
        GET     /       List of Staff Members
        POST    /       Create Single Staff Member
        GET     /:id    Get Single Staff Member
        POST    /:id
        DELETE  /:id

    /animal
        GET     /
        POST    /
        GET     /:id
        POST    /:id
        DELETE  /:id

    /zoo
        GET     /
        POST    /
        GET     /:id
        POST    /:id
        DELETE  /:id

    /user
        GET     /
        POST    /
        GET     /:id
        POST    /:id
        DELETE  /:id

Link to Postman Collection:

https://www.getpostman.com/collections/40e83c84fad4a76063a8