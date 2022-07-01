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

## Creative Process




<table>
  <tr>
    <td>Mockup</td>
     <td>Dark Mode</td>
     <td>Light Mode</td>
  </tr>
  <tr>
    <td align="center" width="33%"><img src="https://user-images.githubusercontent.com/97623529/175828782-12ce03e3-b2c2-4682-9670-97f19d66c63c.png" alt="Portfolio  Mockup" /></td>
    <td align="center"><img src="https://user-images.githubusercontent.com/97623529/175828833-6fbd197b-9ce1-4550-9925-a02883075e6d.png" alt="Portfolio  Dark" /></td>
     <td align="center"><img src="https://user-images.githubusercontent.com/97623529/175828845-f7c5386f-17f2-4342-a788-1a06f62da137.png" alt="Portfolio  Light" /></td>
  </tr>
 </table>

