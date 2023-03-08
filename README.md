# Dear Mr. Majd, Thank you for your offer

This project is created with [James Fury](mailto:dragon99steel@gmail.com).

## Before you go

I was kinda busy during this project, so I needed time to optimize this project

I hope you could pleased to understand this point as well

## How to clone this repository

### `git clone https://github.com/dragon1227/nft-marketplace-frontend.git`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Architecture

This project is developed by create-react-app and mui react.

### Startpoint

./src/App.js

### Routing

This project has a single router [/](http://localhost:3000) the index router.

### Dashboard

./src/pages/index.js

### Context providers

! I didn't use Redux in this project, because it was estimated to be a simple project.

#### Theme Context Provider

./src/context/ThemeContext.js

### Token Context Provider

./src/context/TokenContext.js

### Components

./src/component

#### Token Components

Item & Modal Inner Content of NFT to display

#### Icon Component

Unfortunately, Mui icon library doesn't have Ethereum Icon.

So I made it with svg and made it as a module

./src/component/icon/ethereum.js

### Content

./src/content

This folder includes the layout (Default Layout wrapper and its components like navbar, page header, footer)

and the Token Grid (The way of displaying tokens as Grid items)

### Data

./src/data

This folder includes the data module (for Fake backend)

I took this data as an object from the Open Sea site GraphQL query result.

So the data displayed in this project is related to the original tokens from Open Sea, but static.

This data has 145 tokens.

## The way of UI (User Interface)

I built this UI based on your [altura site](https://alturanft.com)

## The way of UX (User Experience)

I built this UI for potentially possible purpose for a big project.

Although this project uses static data from Local database, but is imagined that it is connected to the real DB service which has so many tokens.

So I implemented Smart rendering.

But you can't see further results without clicking the [LOAD MORE] Button in this project although Scroll Spy is possible.

This is because I wanted to show you (the user) the total token count and current displayed count so that you can get to know how many you got, and how many you can explore.

UX is the most important point of a web app because it is the way the user acts and finds everything.

Interactive UI/UX is the main recipe of live web app.

So I implemented some reactions to the user actions.

### Loading

When user clicks the LOAD MORE button, the loader trigger occurs and you can see skeleton pre-rendered instead of real data.

The user can get to know that they are in loading as he/she can see the ripple effect of the skeleton object.

### Hovering

When user takes the mouse over the NFT item, the Banner of the NFT grows its scale.

Then when it is left, the Banner scale returns its origin.

### Clicking

When user clicks the card, the ripple effect triggers and before it is ended, you can see the Modal appeared.

The modal includes the Banner, Volume and Description of the Token.

## Oh, Sorry. The content was too long for you to read fully

I prefer working to speaking, thinking to coding.

So although I have so much to want to tell you about, I would complete my readme with this paragraph.

Thx for your reading and attention fully.

Kind regards.

Mr. James
