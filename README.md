# The Legendary 10 Song Album Game Rulebook

Welcome to **The Legendary 10 Song Album Game**! This project is a community-curated playlist experience where participants contribute songs based on a shared theme to create unique 10-song playlists.

---

## Table of Contents

- [The Legendary 10 Song Album Game Rulebook](#the-legendary-10-song-album-game-rulebook)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Rules](#rules)
    - [1. Playlist Length and Contributions](#1-playlist-length-and-contributions)
    - [2. Eligible Songs](#2-eligible-songs)
    - [3. Themes](#3-themes)
    - [4. Adding Your Song](#4-adding-your-song)
    - [5. Clarifying Themes](#5-clarifying-themes)
    - [6. Numbering Playlists](#6-numbering-playlists)
    - [7. Community Etiquette](#7-community-etiquette)
    - [8. Playlist Compilation](#8-playlist-compilation)
    - [9. Accessibility](#9-accessibility)
    - [10. Optional Enhancements](#10-optional-enhancements)
  - [Example Contribution](#example-contribution)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Getting Started](#getting-started)
  - [Running the Project Locally](#running-the-project-locally)
    - [Development Server](#development-server)
    - [Building for Production](#building-for-production)
    - [Previewing the Production Build](#previewing-the-production-build)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)

---

## Introduction

**The Legendary 10 Song Album Game** is a collaborative project where music enthusiasts come together to build themed playlists. Each participant contributes songs that fit the chosen theme, resulting in a unique collection of music that reflects the diverse tastes of the community.

---

## Rules

### 1. Playlist Length and Contributions

Each playlist consists of **10 songs**. One contribution per user per playlist, unless the game idles for 24 hours; then anyone may add another song to the album.

### 2. Eligible Songs

Songs must be available on streaming platforms (e.g., YouTube, Spotify, Apple Music).

### 3. Themes

Each playlist is built around a specific **theme** set at the beginning. The user who adds the **10th song** (completes the playlist) gets to choose and start the next theme. Previous themes may be repeated, but previous playlists must be referenced to ensure no song duplication between volumes.

### 4. Adding Your Song

Check the latest version of the playlist to avoid overlapping with someone else's contribution. Copy the current playlist, add your song in the correct track number slot, and repost the updated playlist in the thread. Provide the following details:

- Track Number (1-10)
- Artist Name
- Song Title
- Link to the Song (preferably YouTube for accessibility)

**Posting Format Example:**

```
Track 3 > Artist: Radiohead > Song: "Karma Police" > [YouTube Link]
```

### 5. Clarifying Themes

The user who sets the theme should clarify any ambiguities and answer questions. Themes can be broad or specific (e.g., "Songs about the ocean," "90's Hip-Hop," "Songs with a color in the title").

### 6. Numbering Playlists

Number each playlist sequentially (e.g., "Playlist #5: Songs About Space") to keep track.

### 7. Community Etiquette

Be respectful of others' contributions and theme guidelines. Encourage diversity in song selections to create a rich and varied playlist.

### 8. Playlist Compilation

Once a playlist is complete, a community member can compile the songs into a shared playlist on a streaming platform for everyone to enjoy. Ensure all songs are available on the chosen platform before compiling.

### 9. Accessibility

When possible, choose songs and links that are accessible to the majority of the community, avoiding region-locked content.

### 10. Optional Enhancements

**Interactive Discussions:** Feel free to discuss why you chose a particular song or what it means to you.

**Collaborative Artwork:** Members can contribute artwork for the playlist cover if desired.

---

## Example Contribution

**Theme:** "Songs with Animals in the Title"

**Playlist #1:** Songs with Animals in the Title

1. **Track 1** > Artist: The Beatles > Song: "Blackbird" > [YouTube Link](https://youtu.be/Man4Xw8Xypo)
2. **Track 2** > Artist: Elton John > Song: "Crocodile Rock" > [YouTube Link](https://youtu.be/75r0nQu-hMs)
3. **Track 3** > Artist: Jefferson Airplane > Song: "White Rabbit" > [YouTube Link](https://youtu.be/WANNqr-vcx0)

---

## Installation

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager) or **yarn**

### Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/10-song-album-game.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd 10-song-album-game
   ```

3. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

---

## Running the Project Locally

After installing the dependencies, you can run the project locally.

### Development Server

Start the development server:

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

This will start the application on `http://localhost:5173` (or another available port). Open this URL in your web browser to view the site.

### Building for Production

To build the project for production:

```bash
npm run build
```

Or using yarn:

```bash
yarn build
```

The build output will be placed in the `dist` folder.

### Previewing the Production Build

You can preview the production build locally using:

```bash
npm run preview
```

Or using yarn:

```bash
yarn preview
```

---

## License

This project is licensed under the [The Unlicense]([LICENSE](https://github.com/now-playing-DAO/10-Song-Album-Game/blob/main/LICENSE)).

---

## Acknowledgements

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast development build tool.
- **Tailwind CSS**: A utility-first CSS framework.
- **React Icons**: Popular icons in React.
- **Google Fonts**: For typography.

---

**Let's collaborate to create amazing playlists and enjoy some great music together!**

---

*Feel free to contribute to this project by submitting issues or pull requests.*