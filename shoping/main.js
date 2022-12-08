let quickBtn = [...document.querySelectorAll('.row2 .box_image .btn_quick')],
  modal = document.getElementById('modal'),
  imgModalElm = document.querySelector('#modal .box_img img'),
  nameModalElm = document.querySelector('#modal .box_content .name'),
  priceModalElm = document.querySelector('#modal .box_content .price'),
  colorsModalElm = document.querySelector('#modal .box_content .colors'),
  closeBtn = document.querySelector('#modal .btn_close');

quickBtn.map((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    let imgElm = e.currentTarget.previousElementSibling,
      descElm = e.currentTarget.parentElement.nextElementSibling,
      prdImg = imgElm.src,
      prdName = descElm.querySelector('.name').innerText,
      prdPrice = descElm.querySelector('.price').innerText,
      prdColors = descElm.querySelector('.colors').innerHTML;
    imgModalElm.src = prdImg;
    nameModalElm.innerText = prdName;
    priceModalElm.innerText = prdPrice;
    colorsModalElm.innerHTML = prdColors;
    modal.classList.add('show');
  });
});

closeBtn.addEventListener('click', (e) => modal.classList.remove('show'));
