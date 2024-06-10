import React from 'react';
import Card from './Card';

const data = [
  {
    title: 'Card 1',
    description: 'This is card 1 description.',
    image:'https://i.ibb.co/T4QkJGR/129154579-709573116339577-170522045615251621-n-1.jpg'
  },
  {
    title: 'Card 2',
    description: 'This is card 2 description.',
    image:'https://i.ibb.co/d4Rjpxd/129988419-848487669026791-7860488758172182720-n.jpg'
  },
  {
    title: 'Card 1',
    description: 'This is card 1 description.',
    image:'https://i.ibb.co/42Y0Nx8/144844663-708393996503649-2743838693452595746-n.jpg'
  },
  {
    title: 'Card 2',
    description: 'This is card 2 description.',
    image:'https://i.ibb.co/CzP1whn/145078791-748159429456040-2173678167437111163-n.jpg'
  },
  {
    title: 'Card 1',
    description: 'This is card 1 description.',
    image:'https://i.ibb.co/T4QkJGR/129154579-709573116339577-170522045615251621-n-1.jpg'
  },
  {
    title: 'Card 2',
    description: 'This is card 2 description.',
    image:'https://i.ibb.co/d4Rjpxd/129988419-848487669026791-7860488758172182720-n.jpg'
  },
  {
    title: 'Card 1',
    description: 'This is card 1 description.',
    image:'https://i.ibb.co/42Y0Nx8/144844663-708393996503649-2743838693452595746-n.jpg'
  },
  {
    title: 'Card 2',
    description: 'This is card 2 description.',
    image:'https://i.ibb.co/CzP1whn/145078791-748159429456040-2173678167437111163-n.jpg'
  },
  {
    title: 'Card 1',
    description: 'This is card 1 description.',
    image:'https://i.ibb.co/T4QkJGR/129154579-709573116339577-170522045615251621-n-1.jpg'
  },
  {
    title: 'Card 2',
    description: 'This is card 2 description.',
    image:'https://i.ibb.co/d4Rjpxd/129988419-848487669026791-7860488758172182720-n.jpg'
  },
  {
    title: 'Card 1',
    description: 'This is card 1 description.',
    image:'https://i.ibb.co/42Y0Nx8/144844663-708393996503649-2743838693452595746-n.jpg'
  },
  {
    title: 'Card 2',
    description: 'This is card 2 description.',
    image:'https://i.ibb.co/CzP1whn/145078791-748159429456040-2173678167437111163-n.jpg'
  },
  {
    title: 'Card 1',
    description: 'This is card 1 description.',
    image:'https://i.ibb.co/T4QkJGR/129154579-709573116339577-170522045615251621-n-1.jpg'
  },
  {
    title: 'Card 2',
    description: 'This is card 2 description.',
    image:'https://i.ibb.co/d4Rjpxd/129988419-848487669026791-7860488758172182720-n.jpg'
  },
  {
    title: 'Card 1',
    description: 'This is card 1 description.',
    image:'https://i.ibb.co/42Y0Nx8/144844663-708393996503649-2743838693452595746-n.jpg'
  },
  {
    title: 'Card 2',
    description: 'This is card 2 description.',
    image:'https://i.ibb.co/CzP1whn/145078791-748159429456040-2173678167437111163-n.jpg'
  },
  {
    title: 'Card 1',
    description: 'This is card 1 description.',
    image:'https://i.ibb.co/42Y0Nx8/144844663-708393996503649-2743838693452595746-n.jpg'
  },
  {
    title: 'Card 2',
    description: 'This is card 2 description.',
    image:'https://i.ibb.co/CzP1whn/145078791-748159429456040-2173678167437111163-n.jpg'
  },
  // Add more data objects as needed
];

const App = () => {
  return (
    <div className="app">
      <h1>Card Component Demo</h1>
      <Card data={data} />
    </div>
  );
};

export default App;

