import React, { useState } from 'react';
import './App.css';
import planeImage from './images/plane.jpeg';
import disneyImage from './images/disney.jpg';
import worldImage from './images/world.jpg';
import earthImage from './images/earth.jpg';
import birdImage from './images/bird.jpg';

type Image = {
  name: string;
  imageUrl: string;
};

const images: Image[] = [
  { name: 'plane', imageUrl: planeImage },
  { name: 'world', imageUrl: worldImage },
  { name: 'disney', imageUrl: disneyImage },
  { name: 'earth', imageUrl: earthImage },
  { name: 'bird', imageUrl: birdImage },
];

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const handleListItemClick = (image: Image) => {
    setSelectedImage(image);
  };

  return (
    <div className="App">
      <div className="listbox-container">
        <ul className="listbox" role="listbox">
          {images.map((image) => (
            <li
              key={image.name}
              role="option"
              aria-selected={selectedImage?.name === image.name}
              onClick={() => handleListItemClick(image)}
            >
              {image.name}
            </li>
          ))}
        </ul>
        {selectedImage && (
          <img src={selectedImage.imageUrl} alt={selectedImage.name} className="images" />
		)}
      </div>
    </div>
  );
};

export default App;

