// Rulebook.jsx
import React, { useState, useEffect } from 'react';
import {
  FaMusic,
  FaGuitar,
  FaDrum,
  FaMicrophone,
  FaHeadphones,
  FaCompactDisc,
} from 'react-icons/fa';
import { GiMusicalScore, GiPianoKeys } from 'react-icons/gi';
import { MdQueueMusic } from 'react-icons/md';
import { IoMdMusicalNotes } from 'react-icons/io';
import ThemeToggle from './ThemeToggle';

const rules = [
  {
    title: 'Playlist Length and Contributions',
    description: (
      <>
        Each playlist consists of <strong>10 songs</strong>. One contribution per user per playlist, unless the game idles for 24 hours; then anyone may add another song to the album.
      </>
    ),
    icon: FaMusic,
  },
  {
    title: 'Eligible Songs',
    description:
      'Songs must be available on streaming platforms (e.g., YouTube, Spotify, Apple Music).',
    icon: FaGuitar,
  },
  {
    title: 'Themes',
    description: (
      <>
        Each playlist is built around a specific <strong>theme</strong> set at the beginning. The user who adds the <strong>10th song</strong> (completes the playlist) gets to choose and start the next theme. Previous themes may be repeated, but previous playlists must be referenced to ensure no song duplication between volumes.
      </>
    ),
    icon: FaDrum,
  },
  {
    title: 'Adding Your Song',
    description: (
      <>
        Check the latest version of the playlist to avoid overlapping with someone else's contribution. Copy the current playlist, add your song in the correct track number slot, and repost the updated playlist in the thread. Provide the following details:
        <ul className="list-disc list-inside ml-6 mt-2">
          <li>Track Number (1-10)</li>
          <li>Artist Name</li>
          <li>Song Title</li>
          <li>Link to the Song (preferably YouTube for accessibility)</li>
        </ul>
        <p className="mt-4">
          <strong>Posting Format Example:</strong>
        </p>
        <pre className="bg-gray-200 dark:bg-gray-700 p-4 rounded">
          Track 3 &gt; Artist: Radiohead &gt; Song: "Karma Police" &gt; [YouTube Link]
        </pre>
      </>
    ),
    icon: FaMicrophone,
  },
  {
    title: 'Clarifying Themes',
    description:
      'The user who sets the theme should clarify any ambiguities and answer questions. Themes can be broad or specific (e.g., "Songs about the ocean," "90\'s Hip-Hop," "Songs with a color in the title").',
    icon: FaHeadphones,
  },
  {
    title: 'Numbering Playlists',
    description:
      'Number each playlist sequentially (e.g., "Playlist #5: Songs About Space") to keep track.',
    icon: MdQueueMusic,
  },
  {
    title: 'Community Etiquette',
    description:
      'Be respectful of others\' contributions and theme guidelines. Encourage diversity in song selections to create a rich and varied playlist.',
    icon: GiMusicalScore,
  },
  {
    title: 'Playlist Compilation',
    description:
      'Once a playlist is complete, a community member can compile the songs into a shared playlist on a streaming platform for everyone to enjoy. Ensure all songs are available on the chosen platform before compiling.',
    icon: FaCompactDisc,
  },
  {
    title: 'Accessibility',
    description:
      'When possible, choose songs and links that are accessible to the majority of the community, avoiding region-locked content.',
    icon: GiPianoKeys,
  },
  {
    title: 'Optional Enhancements',
    description: (
      <>
        <strong>Interactive Discussions:</strong> Feel free to discuss why you chose a particular song or what it means to you.
        <br />
        <strong>Collaborative Artwork:</strong> Members can contribute artwork for the playlist cover if desired.
      </>
    ),
    icon: IoMdMusicalNotes,
  },
];

const Rulebook = () => {
  // State to manage theme
  const [theme, setTheme] = useState('light');

  // On component mount, check for saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  // Update the `dark` class on the `html` element when theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 dark:text-gray-100 shadow-lg rounded-lg p-8 relative">
        {/* Theme Toggle Button */}
        <div className="absolute top-4 left-4">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Heading with accent color */}
        <h1 className="text-4xl font-display font-bold text-center mb-4 text-gray-800 dark:text-gray-100">
          The Legendary{' '}
          <span className="text-indigo-600 dark:text-indigo-400">
            10 Song Album Game
          </span>
        </h1>

        {/* Image centered below the title */}
        <div className="flex justify-center mb-8">
          <img
            src="/pepeheadphone.svg"
            alt="Game Logo"
            className="w-32 h-32"
          />
        </div>

        {/* Rules */}
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          {rules.map((rule, index) => {
            const IconComponent = rule.icon;
            return (
              <div key={index}>
                <h2 className="text-2xl font-display font-semibold mb-2 flex items-center">
                  {/* Rule number */}
                  <span className="mr-2">{index + 1}.</span>
                  {/* Icon */}
                  <IconComponent className="text-indigo-600 dark:text-indigo-400 mr-2" />
                  {/* Rule title */}
                  {rule.title}
                </h2>
                <p>{rule.description}</p>
              </div>
            );
          })}
        </div>

        {/* Example Contribution Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-display font-bold mb-4 text-center text-gray-800 dark:text-gray-100">
            Example Contribution
          </h2>
          <p className="mb-4 text-center">
            <strong>Theme:</strong> "Songs with Animals in the Title"
          </p>
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <p className="mb-2">
              <strong>Playlist #1:</strong> Songs with Animals in the Title
            </p>
            <ul className="space-y-2">
              <li>
                <strong>Track 1</strong> &gt; Artist: The Beatles &gt; Song:
                "Blackbird" &gt;{' '}
                <a
                  href="https://youtu.be/Man4Xw8Xypo"
                  className="text-blue-500 dark:text-blue-400 hover:underline"
                >
                  YouTube Link
                </a>
              </li>
              <li>
                <strong>Track 2</strong> &gt; Artist: Elton John &gt; Song:
                "Crocodile Rock" &gt;{' '}
                <a
                  href="https://youtu.be/75r0nQu-hMs"
                  className="text-blue-500 dark:text-blue-400 hover:underline"
                >
                  YouTube Link
                </a>
              </li>
              <li>
                <strong>Track 3</strong> &gt; Artist: Jefferson Airplane &gt;
                Song: "White Rabbit" &gt;{' '}
                <a
                  href="https://youtu.be/WANNqr-vcx0"
                  className="text-blue-500 dark:text-blue-400 hover:underline"
                >
                  YouTube Link
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Closing Statement with Animation */}
        <p className="mt-12 text-center text-gray-600 dark:text-gray-400 animate-pulse">
          Let's collaborate to create amazing playlists and enjoy some great
          music together!
        </p>
      </div>
    </div>
  );
};

export default Rulebook;
