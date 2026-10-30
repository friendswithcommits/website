import johannes from '../assets/hosts/johannes.jpg';
import alexander from '../assets/hosts/alexander.jpg';

export interface Host {
  name: string;
  role: string;
  lane: 'main' | 'host'; // lane colour token
  photo: ImageMetadata;
  points: { text: string; link?: { label: string; href: string } }[];
}

export const hosts: Host[] = [
  {
    name: 'Johannes Wachter', role: 'The maintainer', lane: 'main', photo: johannes,
    points: [{ text: 'Core developer of Sulu' }, { text: 'Symfony AI core team' }, { text: 'Author of Symfony Mate' }],
  },
  {
    name: 'Alexander Bürner', role: 'The practitioner', lane: 'host', photo: alexander,
    points: [{ text: 'PERSPEQTIVE' }, { text: 'Uses open source tools in client projects' }, { text: 'Host of ', link: { label: 'devslove.it', href: 'https://devslove.it' } }],
  },
];
