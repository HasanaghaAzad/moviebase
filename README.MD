# MovieBase

MovieBase is a small React application that allows users to browse and search for movies using the TMDB (The Movie Database) API. The application features a responsive design, movie details pages, and a search functionality to find movies by name.

## Features

- Browse popular movies
- Search for movies by name
- View detailed information about each movie
- Responsive design for mobile and desktop

## Technologies Used

- React
- TypeScript
- Vite
- React Router
- Sass (SCSS)
- TMDB API

## Requirements

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)
- TMDB API Key

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/HasanaghaAzad/moviebase.git
   cd moviebase/client
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Copy the example environment file**:
   ```bash
   cp .env.example .env
   ```

4. **Edit the `.env` file**:
   Open the `.env` file and add your TMDB API key. You can obtain an API key by creating an account on [TMDB](https://developer.themoviedb.org/docs/getting-started).

   ```env
   VITE_TMDB_API_KEY=your_api_key_here
   VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
   VITE_TMDB_POSTER_URL=https://image.tmdb.org/t/p/w500
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

6. **Open the application in your browser**:
   Go to [http://localhost:3000](http://localhost:3000) to view the application. The port can be changed in the `vite.config.ts` file if needed.

## Usage

Once the application is running, you can browse popular movies, search for movies by name, and view detailed information about each movie.

## Screenshots

![Screenshot of Home page](screenshots/homepage.png)