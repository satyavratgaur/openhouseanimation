import React from 'react';

const HomePage = () => {
  return (
    <div className='container mx-auto'>
      {/* Header or Banner Section */}
      <div className='container mx-auto flex flex-col md:flex-row items-center py-12'>
        {/* Text Section */}
        <div className='md:w-1/2 text-center md:text-left mb-8 md:mb-0'>
          <h1 className='text-4xl font-bold text-black mb-4 text-center'>
            Become a Job Ready Professional Artist
          </h1>
          <p className='text-white'>
            Join our comprehensive courses in Animation, VFX, Gaming, and more.
          </p>
        </div>

        {/* Image Section */}
        <div className='md:w-1/2'>
          <img
            src='https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            alt='Creative workspace with tools'
            className='rounded-lg shadow-lg'
          />
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className='bg-yellow-500 text-white text-center py-12 mb-6'>
        <h2 className='text-3xl font-bold mb-4'>
          Start Your Creative Journey Today
        </h2>
        <p className='mb-6'>
          Enroll in our courses and take the first step towards a successful
          career in media and creative arts.
        </p>
        <button className='bg-white text-yellow-500 py-2 px-8 rounded hover:bg-gray-100 transition duration-300'>
          Apply Now
        </button>
      </div>

      {/* Additional Sections */}
      {/* Add more content sections as needed */}
    </div>
  );
};

export default HomePage;
