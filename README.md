# Analytics Dashboard
An analytics dashboard pulling in API data (web)
![main](https://user-images.githubusercontent.com/91881320/168232967-93663e77-60c7-405c-8f74-e8ce606d91f1.gif)

The repository was implemented with Vue.js + ASP.&#8203;NET Core Web API. The project backend runs on ASP.NET Core 6.0 and and frontend was created by Vue CLI 4.x.


## Prerequisites

* [.NET Core](https://www.microsoft.com/net/download/windows) >= 6.0
* [NodeJS](https://nodejs.org/) >= 8.9
* [Vue CLI](https://cli.vuejs.org/) >= Vue CLI 4.x 
* Your favourite editor (I prefer [VS Code](https://code.visualstudio.com/)), or VS 2022

---

## Steps in Running the Application

There are two ways how to set up the project: one for people who want to create their own template and choose custom integrations and the other for developers who want to start with no configuration.

## Step 1: After Cloning the Application

* Navigate to the backend project and open it with favorite text editor say VS Code or Visual Studio 2022 and build the project
* Navigate to the frontend project and open it with favorite text editor say VS Code and install node package modules
  ## Project setup
  ```
  npm install
  npm run build
  npm run serve
  ```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Step 2: Running the application

Caution: Run the API project before running the Frontend Project

### 1. Using the command line

* Run the .NET application using `dotnet run`
* Run the Vue Client using `npm run serve`

