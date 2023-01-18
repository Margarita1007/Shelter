const MENU_BTN = document.querySelector(".menu_btn");
var CHECKBOX = document.querySelector("#menu_toggle").checked;
const STARTSCREEN = document.querySelector(".startscreen");
const LOGO = document.querySelector(".logotype");
const overlay = document.querySelector(".blackout-overlay");
    
  
  
const hiddenLogo = () => {
  if (document.querySelector("#menu_toggle").checked == false) {
      document.querySelector(".logotype").classList.add("hidden");
      document.querySelector(".blackout-overlay").classList.add("blackout-overlay-on"); 
      document.body.classList.add('scroll-off');
  }
  else {
      document.querySelector(".logotype").classList.remove("hidden");
      document.querySelector(".blackout-overlay").classList.remove("blackout-overlay-on");
      document.body.classList.remove('scroll-off');

  }
}
  
const closeMenu = () => {
  document.querySelector("#menu_toggle").checked = false;
  document.querySelector(".blackout-overlay").classList.remove("blackout-overlay-on");
  document.querySelector(".logotype").classList.remove("hidden");
  document.body.classList.remove('scroll-off');
}


MENU_BTN.addEventListener("click", hiddenLogo);

overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".nav-link").forEach(elem =>  elem.addEventListener("click", event  => {
  closeMenu();
}))


//////////////////////////////////////////////////////////////
const createPopup = (event) => {
  const $target = event.target;
  const $currentTarget = event.currentTarget;
  console.log(event.currentTarget);
  const inText=$currentTarget.innerText;
  const nameText = inText.split(' ')[0];
  const dataPetsFilter = dataPets.filter(item => {
    if (nameText.includes(item["name"])) {
      return item;
    }
  })

  let options = {
    name: dataPetsFilter[0].name,
    img: dataPetsFilter[0].img,
    type: dataPetsFilter[0].type,
    breed: dataPetsFilter[0].breed,
    description: dataPetsFilter[0].description,
    age: dataPetsFilter[0].age,
    inoculations: dataPetsFilter[0].inoculations,
    diseases: dataPetsFilter[0].diseases,
    parasites: dataPetsFilter[0].parasites,
  }

  const modal = $.modal(options);
  modal.open();
  document.body.classList.add('scroll-off');
  //console.log(dataPetsFilter[0].img);

  const BTN_CLOSE = document.querySelector(".modal-close");
  const modal_overlay = document.querySelector(".modal-overlay");

  const closeModal = () => {
    modal.close();
    document.body.classList.remove('scroll-off');
    modal.destroy()
  }
  modal_overlay.addEventListener("click", closeModal)  
}

document.querySelectorAll(".block-pets").forEach(elem =>  
  elem.addEventListener("click", event  => createPopup(event))
)
