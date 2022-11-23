import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
const images = [
  {
    original:
      'https://www.rd.com/wp-content/uploads/2019/01/shutterstock_673465372.jpg?fit=700,467',
    thumbnail:
      'https://www.rd.com/wp-content/uploads/2019/01/shutterstock_673465372.jpg?fit=700,467',
    originalHeight: 100,
    originalWidth: 100,
    thumbnailWidth: 80,
  },
  {
    original:
      'https://www.rd.com/wp-content/uploads/2019/01/shutterstock_673465372.jpg?fit=700,467',
    thumbnail:
      'https://www.rd.com/wp-content/uploads/2019/01/shutterstock_673465372.jpg?fit=700,467',
    originalHeight: 100,
    originalWidth: 100,
    thumbnailWidth: 20,
  },
  {
    original:
      'https://www.rd.com/wp-content/uploads/2019/01/shutterstock_673465372.jpg?fit=700,467',
    thumbnail:
      'https://www.rd.com/wp-content/uploads/2019/01/shutterstock_673465372.jpg?fit=700,467',
    originalHeight: 100,
    originalWidth: 100,
    thumbnailWidth: 20,
  },
];
const Test = () => {
  return (
    <div className="w-[50%] ">
      <ImageGallery items={images} originalHeight={200} originalWidth={200} thumbnailHeight={20} />;
    </div>
  );
};

export default Test;
