document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#element', {
        strings: ['&nbsp;Muhammad Zaid.', '&nbsp;a Computer Scientist.'],
        typeSpeed: 150,
        loop: true,
        backSpeed: 50,
        backDelay: 1000,
        showCursor: false,
    });
});

let isScrolling;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    clearTimeout(isScrolling);
    navbar.classList.remove('visible-navbar');
    navbar.classList.add('hidden-navbar');

    isScrolling = setTimeout(() => {
        navbar.classList.remove('hidden-navbar');
        navbar.classList.add('visible-navbar');
    }, 250);
});

document.getElementById('Hire').addEventListener('click', function () {
    const targetSection = document.getElementById('Contact-page');
    const offset = 50;
    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
});


document.getElementById('Resume').addEventListener('click', function () {
    const targetSection = document.getElementById('Resume-page');
    const offset = 140;
    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
});

document.getElementById('Zaid-btnn').addEventListener('click', function () {
    document.getElementById('Home-page').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('Zaid-btnn2').addEventListener('click', function () {
    document.getElementById('Home-page').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('Scroll').addEventListener('click', function () {
    document.getElementById('About-page').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('Home').addEventListener('click', function () {
    document.getElementById('Home-page').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('About').addEventListener('click', function () {
    document.getElementById('About-page').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('Skills').addEventListener('click', function () {
    document.getElementById('Skills-page').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('Contact').addEventListener('click', function () {
    const targetSection = document.getElementById('Contact-page');
    const offset = 50;
    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
});

document.getElementById('Git').addEventListener('click', function () {
    window.open('https://github.com/zzayd30', '_blank');
});

document.getElementById('Linkedin').addEventListener('click', function () {
    window.open('https://www.linkedin.com/in/muhammad-zaid-latif-3488a9276/', '_blank');
});

document.getElementById('Download-Resume').addEventListener('click', function () {
    document.getElementById('hiddenCvDownloadLink').click();
});

document.getElementById('Send-btn').addEventListener('click', function () {
    const nameTitle = document.getElementById('name');
    const emailTitle = document.getElementById('email');
    const subjectTitle = document.getElementById('subject');
    const messageTitle = document.getElementById('message');

    const namefinal = nameTitle.value;
    const emailfinal = emailTitle.value;
    const subjectfinal = subjectTitle.value;
    const messagefinal = messageTitle.value;

    if (namefinal === '' || emailfinal === '' || subjectfinal === '' || messagefinal === '') {
        alert("Please fill all the fields");
    }
    else {
        console.log(namefinal, emailfinal, subjectfinal, messagefinal);
        emailjs.send("service_mji72wi", "template_itpqrmd", {
            from_name: namefinal,
            from_email: emailfinal,
            message: messagefinal,
            subject: subjectfinal,
        }).then((response) => {
            nameTitle.value = '';
            emailTitle.value = '';
            subjectTitle.value = '';
            messageTitle.value = '';
            alert('Your Email has been sent successfully!');
        }).catch((error) => {
            console.error('Error:', error);
            alert('An error occurred while sending the message.');
        });
    }
});