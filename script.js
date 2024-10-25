
const fetchDataButton = document.getElementById('fetchDataButton');
const dataContainer = document.getElementById('dataContainer');


function fetchRandomImage() {
    
    const imageUrl = `https://picsum.photos/400/300?random=${Math.random()}`;

   
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = 'Random Image';

    
    dataContainer.innerHTML = ''; 
    dataContainer.appendChild(imgElement); 

   
    dataContainer.classList.remove('show'); 
    void dataContainer.offsetWidth; 
    dataContainer.classList.add('show'); 

   
    changeBackgroundColor();
}


function changeBackgroundColor() {
    const colors = ['#e9ecef', '#cfe2ff', '#d9f99d', '#ffd60a', '#f5c2c2'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    dataContainer.style.backgroundColor = randomColor;
}


fetchDataButton.addEventListener('click', fetchRandomImage);