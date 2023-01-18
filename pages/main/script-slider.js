const dataPets = 
  [
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ];



const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");

const createCardTemplate = (pet) => {
  const card = document.createElement("div");
  const card_img_div = document.createElement('div');
  const card_img = document.createElement('img');
  const card_name = document.createElement('p');
  const card_button = document.createElement('button');

  card.classList.add("block-pets");
  card_img_div.classList.add('img-pets');
  card_name.classList.add('name-pets');
  card_button.classList.add('button-learn-more');

  card_name.innerHTML = pet.name;
  card_img.setAttribute('src', pet.img);
  card_button.innerHTML = 'Learn more';

  card_img_div.append(card_img);
  card.append(card_img_div);
  card.append(card_name);
  card.append(card_button);
  return card;
}

const randomCards = (move) => {
  const block_all = document.createElement('div');
  block_all.classList.add('block-all-pets');
  block_all.classList.add(`${move}-item`);
  block_all.setAttribute('id', `${move}-carousel`);

  const numbers = [];
  for (let i = 0; i < 3; i++) {
    let randomNum=Math.floor(Math.random() * 8);
    while (!numbers.every(elem => elem != randomNum)) {
      randomNum=Math.floor(Math.random() * 8);
    }
    numbers.push(randomNum);
    
    const new_card = createCardTemplate(dataPets[randomNum]);
    block_all.append(new_card);
  }
  return block_all;
}

const moveright = () => {
  const carousel = document.getElementById('carousel');
  const carousel_slider = document.getElementById('carousel_slider');
  const new_block = randomCards('right');
  carousel_slider.append(new_block);
  window.setTimeout(() => {
    BTN_RIGHT.removeEventListener('click', moveright);
    carousel.classList.add('transition-right-active');
    new_block.classList.add('transition-right-right');
  }, 0);
  window.setTimeout(()=> {
    carousel.remove();
    new_block.classList.remove('transition-right-right');
    new_block.classList.remove('right-item');
    new_block.classList.add('active-item');
    new_block.setAttribute('id', 'carousel');
    BTN_RIGHT.addEventListener('click', moveright);
    document.querySelectorAll(".block-pets").forEach(elem =>  
      elem.addEventListener("click", event  => createPopup(event))
    )
  }, 1000);
  
}

const moveleft = () => {
  const carousel = document.getElementById('carousel');
  const carousel_slider = document.getElementById('carousel_slider');
  const new_block = randomCards('left');
  carousel_slider.prepend(new_block);
  window.setTimeout(() => {
    BTN_LEFT.removeEventListener('click', moveleft);
    carousel.classList.add('transition-left-active');
    new_block.classList.add('transition-left-left');
  }, 0);
  window.setTimeout(()=> {
    carousel.remove();
    new_block.classList.remove('transition-left-left');
    new_block.classList.remove('left-item');
    new_block.classList.add('active-item');
    new_block.setAttribute('id', 'carousel');
    BTN_LEFT.addEventListener('click', moveleft);
    document.querySelectorAll(".block-pets").forEach(elem =>  
      elem.addEventListener("click", event  => createPopup(event))
    )
  }, 1000);
  
}

BTN_RIGHT.addEventListener('click', moveright);
BTN_LEFT.addEventListener('click', moveleft);

