
const navLinks = document.querySelectorAll('.nav-item');


navLinks.forEach(link => {
  link.addEventListener('click', () => {
 
    navLinks.forEach(link => {
      link.classList.remove('bold-selection');
    });


    link.classList.add('bold-selection');
  });
});


