import React, { useState } from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    alt: 'Good images are often bad',
    description: 'This is the best image',
  },
  {
    src: 'https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    alt: 'image',
    description: 'This is the best image',
  },
  {
    src: 'https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    alt: 'image',
    description: 'This is the best image',
  },
  {
    src: 'https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    alt: 'image',
    description: 'This is the best image',
  },
  {
    src: 'https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    alt: 'image',
    description: 'This is the best image',
  },
  {
    src: 'https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    alt: 'image',
    description: 'This is the best image',
  },
];

const WallOfFame = () => {
  const [viewAll, setViewAll] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleViewAll = () => {
    setViewAll(true);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  // Stop the propagation to prevent the modal from closing when clicking inside the content area
  const handleClickInside = (event) => {
    event.stopPropagation();
  };

  const displayedImages = viewAll ? images : images.slice(0, 4);

  return (
    <div className='container mx-auto p-6'>
      <h2 className='text-2xl font-semibold mb-6'>Wall of Fame</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {displayedImages.map((image, index) => (
          <div
            key={index}
            className='overflow-hidden cursor-pointer'
            onClick={() => openModal(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className='transform transition duration-500 hover:scale-105'
            />
            {/* Add additional markup for student details */}
          </div>
        ))}
      </div>
      {!viewAll && (
        <div className='text-center mt-6'>
          <button
            onClick={handleViewAll}
            className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300'
          >
            View All
          </button>
        </div>
      )}

      {/* Image Modal */}
      {modalImage && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4'
          onClick={closeModal}
        >
          <div
            className='bg-white p-4 rounded-lg shadow-lg max-w-xl w-full'
            onClick={handleClickInside}
          >
            <img src={modalImage.src} alt={modalImage.alt} className='mb-4' />
            <p>{modalImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WallOfFame;
