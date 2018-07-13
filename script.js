const dropDown = document.getElementById('dropdown-service');

const showServices = () => {
  let box = document.getElementById('box');
  box.classList.toggle('hide');
}

dropDown.addEventListener('click', showServices);
