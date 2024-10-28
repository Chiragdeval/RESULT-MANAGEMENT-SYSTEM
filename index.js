// Create the container element
const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

// Create the card elements
const cards = [
  { title: 'Admin', links: ['Login', 'Register'] },
  { title: 'Faculty', links: ['Login'] },
  { title: 'Student', links: ['Login'] },
];

cards.forEach((card) => {
  const cardElement = document.createElement('div');
  cardElement.className = 'card';

  // Create the card title
  const titleElement = document.createElement('h2');
  titleElement.textContent = card.title;
  cardElement.appendChild(titleElement);
  

  // Create the card links
  card.links.forEach((link) => {
    const linkElement = document.createElement('a');
    linkElement.className = 'btn';
    linkElement.textContent = link;
    linkElement.href = '#';
    cardElement.appendChild(linkElement);
    cardElement.appendChild(document.createElement('br'));
  });

  container.appendChild(cardElement);
  container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.justifyContent = 'center';

});

// Add the styles using JavaScript (not recommended, use CSS instead)
document.body.style.fontFamily = 'sans-serif';
document.body.style.backgroundImage = 'url(\'home.jpg\')';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.minHeight = '100vh';
document.body.style.margin = '0';

// Add the card styles using JavaScript (not recommended, use CSS instead)
const cardsElements = document.querySelectorAll('.card');
cardsElements.forEach((card) => {
  card.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  card.style.padding = '40px';
  card.style.borderRadius = '10px';
  card.style.textAlign = 'center';
  card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
  card.style.backdropFilter = 'blur(10px)';
});

const btnElements = document.querySelectorAll('.btn');
btnElements.forEach((btn) => {
  btn.style.display = 'inline-block';
  btn.style.padding = '12px 20px';
  btn.style.backgroundColor = '#4CAF50';
  btn.style.color = 'white';
  btn.style.textDecoration = 'none';
  btn.style.borderRadius = '5px';
  btn.style.transition = 'background-color 0.3s';

  btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = '#45a049';
  });

  btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = '#4CAF50';
  });
  cardsElements.forEach((card) => {
    // ... existing styles ...
    card.style.margin = '80px'; // add 20px margin around each card
  });
});