const $ = {};

function _createModal(options) {
    const modal = document.createElement ('div');
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin',    `
    <div class="modal-overlay">
      <div class="modal-window">
        <div class="modal-body">
            <button class="modal-close">
              &times;
            </button>  
    
            <img class="modal-img" src=${options.img} alt="${options.name}">
            <div class="modal-content" id='pet'>
                  <h1 id='name'>${options.name}</h1>
                      <h3> ${options.type} - ${options.breed} </h3>
                        <p> ${options.description} 
                        </p>
                  <ul>
                    <li><h5> <b>Age:</b> ${options.age} </h5> </li>
                    <li><h5> <b>Inoculations:</b> ${options.inoculations} </h5></li>
                    <li><h5> <b>Diseases: </b> ${options.diseases} </h5></li>
                    <li><h5> <b>Parasites: </b> ${options.parasites} </h5></li>
                  </ul>
            </div>
        </div>
        </div>
      </div> `
      )       
  document.body.appendChild(modal); 
  return modal;
}

  $.modal = function(options) {
    const $modal = _createModal(options)
    
    return {
        open() {
            $modal.classList.add('open')
        },
        close() {
            $modal.classList.remove('open')

        },
        destroy() {
          $modal.parentNode.removeChild($modal)
        }
    }
}