const images = [
    'img1.jpg',
    'img2.webp',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.webp',
    // Add more image filenames here
  ];
  
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const randomImage = getRandomImage();
    document.body.style.backgroundImage = `url('${randomImage}')`;
  });
  