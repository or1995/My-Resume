const doc = new jspdf.jsPDF({
    orientation: 'p', // landscape
    unit: 'pt', // points, pixels won't work properly
    format: 'a4',
    format: [1392, 1300] // set needed dimensions for any element
});

/*window.onscroll = () => {
    console.log(window.pageYOffset);
    if(window.pageYOffset <= 200) {
        document.querySelector('.header').classList.add('top');
        document.querySelector('.header').classList.remove('bottom');
    } else {
        document.querySelector('.header').classList.add('bottom');
        document.querySelector('.header').classList.remove('top');
    }
};*/

window.html2canvas = html2canvas;

let colorbutton = document.getElementById('mode');
let pdfbutton = document.getElementById('pdf');
let root = document.documentElement;
let sun = document.getElementById('sun');
let moon = document.getElementById('moon');
let rs = getComputedStyle(root);
let dark = true;

colorbutton.addEventListener('click',() => {
    if(dark) {
        root.style.setProperty('--back-color', '255, 255, 255');
        root.style.setProperty('--title-color', '#1B2F33');
        root.style.setProperty('--text-color', '#000');
        root.style.setProperty('--back-color-dark', '#fefefe');
        dark = false;
        sun.style.display = 'none';
        moon.style.display = 'block';
    } else {
        root.style.setProperty('--back-color', '27, 47, 51');
        root.style.setProperty('--title-color', '#fff');
        root.style.setProperty('--text-color', '#fff');
        root.style.setProperty('--back-color-dark', '#142326');
        dark = true;
        sun.style.display = 'block';
        moon.style.display = 'none';
    }
})


pdfbutton.addEventListener('click',() => {
    doc.html(document.body, {
        callback: function (doc) {
          doc.save();
        },
        filename: 'Omar Ali Abdulwahab CV',
        x: 0,
        y: 0
     });
});

