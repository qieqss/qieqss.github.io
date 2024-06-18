const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll('.shape');
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${
      y * boolInt
    }px) rotate(${x * boolInt * 10}deg)`;
  }
}

function toggleContrast() {
  document.body.classList.toggle('dark-theme');
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList += ' modal__overlay--visible';
  emailjs
    .sendForm(
      'service_tuxn379',
      'template_t1219m8',
      event.target,
      '5AUAEuPdtFJ5aGob4'
    )
    .then(() => {
      loading.classList.remove('modal__overlay--visible');
      success.classList += ' modal__overlay--visible';
    })
    .catch(() => {
      loading.classList.remove('modal__overlay--visible');
      alert(
        'The email service is temporarily unavailable. Please contact me directly at kulakovalexey@proton.me'
      );
    });
}

function toggleModal() {
  document.body.classList.toggle('modal--open');
}

function sortArray(arr) {
  let flag = true;
  arr.forEach((element, index) => {});

  return flag;
}

console.log(sortArray([1, 2, 3, 4, 5, 6, 7]));
