# Bands App

Bands App is a simple data query website for music bands made with React.

![imagen](https://user-images.githubusercontent.com/48001346/132267932-e964f19a-21d6-47d6-828b-1262fce0264f.png)

## Functionality

The website has the following features:

- Login/authentication page. The rest of the pages have to be behind this "authorization wall".
- List and navigate bands Filter and sorting should be enabled.
- View information of a specific band, including albums.
- Logout.

## Technologies used

- React
- React Router
- TypeScript
- TailwindCSS
- Vite

## How to run the app?

Clone the repository:

`git clone https://github.com/livchits/bands-app.git`

Install the dependencies:

`npm install`

Create a `.env` with the following content:

```
VITE_BANDS_URL=https://my-json-server.typicode.com/improvein/dev-challenge/bands?_sort=name&_order=asc
VITE_GENRES_URL=https://my-json-server.typicode.com/improvein/dev-challenge/genre?_sort=name&_order=asc
VITE_ALBUMS_URL=https://my-json-server.typicode.com/improvein/dev-challenge/albums?bandId=
```

Run the app in dev mode:

`npm run dev`

You can visit a [live version here](https://bands-app.onrender.com/).
