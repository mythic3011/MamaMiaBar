// Blanket styles
const fixedElements = document.querySelectorAll('.fixed');
fixedElements.forEach((element) => {
    element.style.position = 'fixed';
    element.style.inset = 0;
});

const staticElements = document.querySelectorAll('.static');
staticElements.forEach((element) => {
    element.style.position = 'absolute';
    element.style.inset = 0;
    element.style.zIndex = 6;
});

// First section
const firstSectionFixed = document.querySelector('section:first-of-type .fixed');
firstSectionFixed.style.transformOrigin = '50% 0%';

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    // First section animations
    if (scrollPercentage <= 50) {
        const scale = 0.35 + (0.5 - 0.35) * (scrollPercentage / 50);
        const yPercent = -10 * (scrollPercentage / 50);
        firstSectionFixed.style.transform = `scale(${scale}) translateY(${yPercent}%)`;
    }

    if (scrollPercentage <= 75) {
        const opacity = 1 - (1 * (scrollPercentage / 75));
        firstSectionFixed.style.opacity = opacity;
    }

    // Second section animations
    const secondSectionFixed = document.querySelector('section:nth-of-type(2) article:first-of-type .fixed');
    const secondSectionImage = document.querySelector('section:nth-of-type(2) article:first-of-type img');
    const clipPathPercentage = 175 + (125 * (scrollPercentage / 100));
    secondSectionFixed.style.clipPath = `ellipse(220% 200% at 50% ${clipPathPercentage}%)`;

    if (scrollPercentage <= 100) {
        const scale = 5 - (4 * (scrollPercentage / 100));
        secondSectionImage.style.transform = `scale(${scale})`;
    }
});

// Retrieve the saved language from local storage
const savedLanguage = localStorage.getItem("language");

// Set the selected language in the dropdown
const languageSelect = document.getElementById("language");
if (savedLanguage) {
    languageSelect.value = savedLanguage;
}

// Call the changeLanguage function when the page loads
changeLanguage(languageSelect);
// Third section animations
const thirdSectionFixed = document.querySelector('section:nth-of-type(3) .fixed');
thirdSectionFixed.style.clipPath = 'ellipse(220% 200% at 50% 0%)';

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    if (scrollPercentage <= 100) {
        const scale = 5 - (4 * (scrollPercentage / 100));
        thirdSectionFixed.style.transform = `scale(${scale})`;
    }
});



