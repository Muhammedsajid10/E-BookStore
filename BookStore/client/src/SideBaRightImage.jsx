import React from 'react';

const SideBarRightImage = () => {
  const imageUrl = 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=500&q=60';

  return (
    <div
      style={{
        backgroundImage: `url('${imageUrl}')`,
        width: '100%', 
        height: '300px',
        backgroundSize: 'cover',
        alt: 'Background Image', 
      }}
    ></div>
  );
};

export default SideBarRightImage;
