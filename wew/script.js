const backImages = [
  { src: 'images/imagesback1.png', percent: 50 },
  { src: 'images/imagesback2.png', percent: 50 }, 
  { src: 'images/imagesback3.png', percent: 50 },
  { src: 'images/imagesback4.png', percent: 50 },
  { src: 'images/imagesback5.png', percent: 50 },
  { src: 'images/imagesback6.png', percent: 50 },
  { src: 'images/imagesback7.png', percent: 50 },
  { src: 'images/imagesback8.png', percent: 50 },
  { src: 'images/imagesback9.png', percent: 50 },
  { src: 'images/imagesback10.png', percent: 50 }  
];

const cardContainer = document.getElementById('cardContainer');
const card = document.getElementById('card');
const backImg = document.getElementById('backImg');

let isFlipped = false;

function getRandomImageByPercent(images) {

  const totalWeight = images.reduce((sum, img) => sum + img.percent, 0);

  if (totalWeight <= 0) return images[0].src;

  const random = Math.random() * totalWeight;

  let cumulativeWeight = 0;
  for (const image of images) {
    cumulativeWeight += image.percent;
    if (random <= cumulativeWeight) {
      
      image.percent = Math.max(1, Math.floor(image.percent * 0.5)); 

      return image.src;
    }
  }
  return images[0].src; 
}

cardContainer.addEventListener('click', () => {
  if (!isFlipped) {
  
    backImg.src = getRandomImageByPercent(backImages);
    
    card.classList.add('is-flipped');
    isFlipped = true;
  } else {
    card.classList.remove('is-flipped');
    isFlipped = false;
  }
});