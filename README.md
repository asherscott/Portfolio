# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

1. Clone repo

```
git clone git clone https://github.com/your_username_/Portfolio.git
```

2. Install NPM packages

```
npm install
```

3. Start

```
npm start
```

4. Open in browser

   go to `localhost:3000` in your browser if it didn't open automatically.

## Deploy

This is for when you want to host your portfolio on github

These steps were taken from [this tutorial](https://reactgo.com/deploy-react-app-github-pages/).

1. Add homepage

Open your package.json file present inside your react app and add homepage property.

```
"homepage":"https://yourusername.github.io/repository-name"
```

2. Install gh-pages

```
npm install --save gh-pages
```

3. Deploy script

It’s time to add a deploy script commands in our package.json file.

```
"scripts":{
 "predeploy": "npm run build",
 "deploy": "gh-pages -d build",
}
```

Now in your terminal run `npm run deploy`.

4. Setup source to gh-pages branch

Once you've successfully deployed, open your GitHub code repository and click on Settings tab >> Pages >> then change branch to gh-pages.
