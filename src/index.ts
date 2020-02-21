import kusamaGenerator from './kusamaGenerator';

const parent = document.getElementById('root');

const circles = [
  { radius: 10 },
  { radius: 20 },
  { radius: 40 },
  { radius: 60 },
  { radius: 160 },
  // { radius: 320 },
];

parent && kusamaGenerator({ parent, circles, bgColor: '#ffc107', circleColor: '#000', minDist: 50, maxTries: 30 });