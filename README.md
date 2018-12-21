# Simple Vue Starter with Parcel

## Installation

`yarn`

or

`npm install`

## Running

`yarn start`

or

`npm run start`

Navigate to `http://localhost:1234/`

## Linting

`yarn lint`

or

`npm run lint`

This will lint all vue files and attempt to fix anything it can. 


## Testing

First make sure that you are running the server (see **Running**).

`yarn test`

or

`npm run test`

This will open [cypress](https://cypress.io) where you can launch `App.spec.js` and 
have it run through a few tests cases.

---

`yarn test:ci`

or

`npm run test:ci`

This runs cypress in headless mode in the command line and is great for a CI environment.

## Building

`yarn build`

or

`npm run build`

This will automatically run the lint command first to confirm you're in a good state. All files 
will be put into the `dist/` folder.