# CGM CRA Template

This is the official React template for CGM.

## Overview

This is a template for creating a new CRA project created by [Charlie Meyer](https://charliemeyer.xyz). It is based upon the Create React App (CRA) [template](https://create-react-app.dev/docs/custom-templates/).

This includes the following:

- [JavaScript Standard Style](https://standardjs.com/)
- [React Router](https://reactrouter.com/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Firebase](https://firebase.google.com/)
- [Material UI](https://material-ui.com/)

## Getting Started

To create a new project using this template, run the following command:

```bash
npx create-react-app my-app --template cra-template-cgm
```

### Development

To start the development server, run the following command:

```bash
npm start
```

This runs the app in development mode in Port 8080. Open [http://localhost:8080](http://localhost:8080) to view it in the browser. Port 8080 is chosen and it is also used in the Dockerfile and nginx.conf, so if you change it here, you will need to change it in those files as well.

### Production

To build the app for production, run the following command:

```bash
npm run build
```

This builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

However, the dockerfile, nginx.conf, and deploy.yml file have been included to build and upload the image to GCR, with a template example of deploying to Google Cloud Run, so you can use that instead of `npm run build`.

### Docker

If you want to build a docker image, run the following command:

```bash
docker build -t <image-name> .
```

This builds the docker image with the name specified. The image is based on the nginx:alpine image and serves the static files from the build folder. The nginx.conf file is copied into the image and the default.conf file is replaced with it. The default.conf file is the nginx configuration file that is used to serve the static files.

To run the docker image, run the following command:

```bash
docker run -p 8080:80 <image-name>
```

This runs the docker image on port 8080. You can then open [http://localhost:8080](http://localhost:8080) to view it in the browser. However, you can automate this using the `deploy.yml` file within the `.github/workflows` folder written for your CI/CD pipeline.

## Overview of Files

The file structure of this template is as follows:

```
my-app
├── .github
│   └── workflows
│       └── deploy.yml
├── public
│   ├── index.html
│   ├── robots.txt
│   └── manifest.json
├── src
│   ├── app
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── firebase.js
│   │   ├── RouteLocations.js
│   │   └── store.js
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── pages
│   │   ├── aboutPage
│   │   │   ├── assets
│   │   │   ├── components
│   │   │   ├── AboutPage.css
│   │   │   ├── AboutPage.js
│   │   │   └── utils.js
│   │   ├── homePage
│   │   │   ├── assets
│   │   │   ├── components
│   │   │   ├── HomePage.css
│   │   │   ├── HomePage.js
│   │   │   └── utils.js
│   │   └── errorPage
│   │       ├── assets
│   │       ├── components
│   │       ├── ErrorPage.css
│   │       ├── ErrorPage.js
│   │       └── utils.js
│   ├── slices
│   ├── utils
│   └── index.js
├── trash
├── .gitingore
├── Dockerfile
├── nginx.conf
├── package-lock.json
├── package.json
└── README.md
```

There are some folders that have markdown files in them explaining their purpose that are not shown in this folder structure. 

### .github/workflows

The workflow file included in the `.github/workflows` folder is used to build and upload the docker image to GCR. There is then an example of how to deploy it to Google Cloud Run, but you may also add any other deployment you would like (Google Kubernetes Engine, Google App Engine, etc). 

Make sure to add repository secretes to your GitHub repository for the following:

* PROJECT_ID - The ID of your Google Cloud Project
* GCP_SA_KEY - The service account key for your Google Cloud Project

For further security, you may include REGION, SERVICE_NAME, IMAGE_NAME, and other variables as secrets as well. The only one that is absolutely required for safety is GCP_SA_KEY. Ensure that when creating the Service Account key through the Google Cloud Console, you give it the proper (but minimal) permissions to upload, read, and deploy your images.

### public

#### index.html

This is the main HTML file that is served to the client. It is based on the default index.html file that is created by CRA, with some modifications.

Rather than using static images for the favicon and the apple-touch-icon, it uses a converter that converts emojis into svg's, seen [here](https://css-tricks.com/emoji-as-a-favicon/). If you do add static images, make sure to add them to the public folder, change the links accordingly, and update the manifest.json file to include the image in the icons array.

#### robots.txt

Robots.txt is a file that tells search engine crawlers which pages or files the crawler can or can't request from your site. This is a default robots.txt file that is used for most sites. If you want to change it, you can do so there.

#### manifest.json

The manifest.json file is a JSON file that tells the browser about your Progressive Web App and how it should behave when installed on the user's desktop or mobile device. This is a default manifest.json file that is used for most sites. If you want to change it, you can do so there.

### src

#### app

##### App.css

This is the main CSS file for the entire app. There are some simple styles included in this file from [Josh's Custom CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/), but you may add any other styles you would like here. 

If you want to add custom colors, fonts, or others, add them to the `:root` selector in this file, and then you can use them in any other CSS file in the app. For example:

App.css
```css
:root {
    --primary-color: #000000;
    --secondary-color: #ffffff;
    --font-family: 'Roboto', sans-serif;
}
```

SomePage.css
```css
.someClass {
    color: var(--primary-color);
    font-family: var(--font-family);
}
```

You can also add the styles to everything in the app by adding them to the `body` selector in the App.css file or by adding them to the `*` selector in the App.css file.

##### App.js

This is the main JavaScript file for the entire app. It is based on the default App.js file that is created by CRA, with some modifications. This includes basic routing using React Router.

##### firebase.js

This file is commented out by default if the user does not want to use firebase, but if you do, simply create a firebase project at [https://firebase.google.com/](https://firebase.google.com/) and add the config to this file. Then, uncomment the file and you can use firebase in your app. You can import them into any other file in the app using the following:

```javascript
import { db, auth} from '../path/to/firebase.js';
```

##### RouteLocations.js

This is a simple javascript object that holds all of the paths for the routes. This should be updated as you add, change, and remove routes in the App.js file. By using this RouteLocations.js file instead of hardcoding the paths, simply editing routes once in RouteLocations.js will update them everywhere in the app. To use it, import it into any file you need it in using the following:

```javascript
import { RouteLocations } from '../path/to/RouteLocations.js';

```

Then, in your JSX, you can use RouteLocations to navigate the user to the correct page. For example:

```javascript
<Link to={RouteLocations.home}>Home</Link>
<div onClick={() => navigate(RouteLocations.home)}>Home</div>
```

##### store.js

This folder configures a store that is then imported and used in index.js. There are no reducers added to the store, but you can add them accordingly as shown in the comments in the file. Here is an example of store.js file with a reducer for 'user.'

```javascript
import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;
```

It is highly recommended to use Redux DevTools with this store, simply download the extension from the Google Chrome Store and it will automatically connect to the store. You may then view the state of the store and dispatch actions to the store from the extension.

#### assets

This assets folder holds assets that are used across the entire app. This can include images, fonts, or other things. Avoid putting all of your assets into this folder - assets used only in one component or one page should be put in the assets folder in that component or page.

#### components

This folder holds all components that are used across the entire app. This can include buttons, modals, or other things. Avoid putting all of your components into this folder - components used only in one page should be put in the components folder in that page. 

Furthermore, the folders of each component should be in camelCase, and the file names should be in PascalCase. For example, a component called 'My Component' should have a folder called 'myComponent' and a file called 'MyComponent.js'.

#### hooks

This folder houses any custom hooks created for the app. While it is best practice to put hooks in the folder for which they are being used, for ease of use, you can put all custom hooks in this folder, each in a separate file.

#### pages

All the pages that are used in this app are housed in this folder. Each page has its own folder, each with a CSS file, JS file, a `utils.js`, a `components` folder and an `assets` folder (if necessary). You should remove the folders/files that are not being used - they are suggestions for best practice. The CSS file should be named the same as the page, and the JS file should be named the same as the page, but in PascalCase. For example, a page called 'My Page' should have a folder called 'myPage' and a file called 'MyPage.js'.

It is recommended that the file structure of your pages folder follows the file structure of your routes. For example, if you have a route called '/my-page', you should have a folder called 'myPage' in the pages folder, and a file called 'MyPage.js' in that folder. However, for small-scale applications, this is not necessary.

#### slices

This folder contains all of the slices that are used in this application. It is best to group slices by an "idea," such as "user" or "posts." 

Here is an example of a slice that stores the user's name and email address:

```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// add functions, asyncThunks, and other logic above here.

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
  // you may add builder cases for asyncThunks here.
});

export const { setName, setEmail } = userSlice.actions;
export const selectName = (state) => state.user.name;
export const selectEmail = (state) => state.user.email;

export default userSlice.reducer;
```

#### utils

This folder contains any utility functions used across the entire app. If a page or component uses a util, it should be in its own folder in that page or component.

#### index.js

Here is the index.js file that is created by CGM CRA. This uses StrictMode, React Router, and Redux. It is recommended to use React StrictMode, but you can remove it if you wish.

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
```

### trash

This folder is where you can put any trash. It is recommended not to delete code, but to put it in this folder. This way, if you need to reference it later, you can. If you are sure you will not need it, you can delete it.

### Dockerfile

This simple dockerfile is used to create a docker image for the app. It is not necessary to use this, but it is recommended. 

### .gitignore

This file is used to tell git which files to ignore. It is recommended to use this file, but you can delete it if you wish.

### nginx.conf

This file is used to configure nginx. It is not necessary to use this, but it is recommended.


















