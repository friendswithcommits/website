// Roadmap. `guest: false` = hosts only (trunk node), `true` = guest branches off in orange.
export interface Episode {
  when: string;
  number: string;
  title: string;
  guest: boolean;
  text: string;
}

export const episodes: Episode[] = [
  { when: 'Dec 2026', number: '00', title: 'Why we are doing this', guest: false, text: 'Our own stories, how we got here, and what we want this podcast to be.' },
  { when: 'Jan 2027', number: '01', title: 'A first guest from our own community', guest: true, text: 'Someone whose name we usually only see in review threads.' },
  { when: 'Feb 2027', number: '02', title: 'Maintenance and AI tools in everyday work', guest: true, text: 'What agents change for people who review the pull requests.' },
  { when: 'Mar 2027', number: '03', title: 'A special from beyond PHP', guest: true, text: 'A topic from outside our usual stack that still matters in two years.' },
];
