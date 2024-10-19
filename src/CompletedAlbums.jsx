// CompletedAlbums.jsx
import React from 'react';
import Header from './Header';
import albumsData from './albums.json';

const CompletedAlbums = ({ theme, toggleTheme }) => {
  const albums = albumsData;

  const AlbumCard = ({ album }) => {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
        {/* Album Art */}
        <div className="w-full aspect-square">
          <img
            src={album.coverImage}
            alt={album.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Album Details */}
        <div className="p-6">
          {/* Album Name */}
          <h2 className="text-2xl font-display font-bold mb-4 text-gray-800 dark:text-gray-100">
            {album.title}
          </h2>

          {/* Tracks Section */}
          <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">
            Track Listing
          </h3>
          <ol className="list-decimal list-inside space-y-1 mb-4">
            {album.tracks.map((track, index) => (
              <li key={index}>
                <a
                  href={track.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:underline"
                >
                  {track.artist} - "{track.title}"
                </a>
              </li>
            ))}
          </ol>

          {/* YouTube Playlist Link */}
          <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">
            Playlist Link
          </h3>
          <a
            href={album.playlistLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-400 hover:underline"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Content */}
      <div className="py-10 px-4 sm:px-8">
        <h1 className="text-4xl font-display font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          Curated Albums
        </h1>
        {/* Albums Grid */}
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {albums.map((album, index) => (
            <AlbumCard key={index} album={album} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompletedAlbums;
