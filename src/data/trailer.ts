// The trailer. Drop the MP3 at public/audio/trailer.mp3 and the section appears on the homepage.
// Without the file, the section is left out of the build, so nothing breaks before the drop.
export const trailer = {
  file: '/audio/trailer.mp3',
  title: 'Trailer: Friends with Commits',
  text: 'Two minutes on who we are, who we want to talk to, and why now.',
  // Shown next to the player, e.g. '2:14'. Leave empty to hide it.
  duration: '',
  // ISO date, shown in the label.
  published: '2026-11-25',
};
