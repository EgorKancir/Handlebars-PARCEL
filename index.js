import { beautifulCities } from "./src/city";

addEventListener('DOMContentLoaded', () => {
    const templateSource = document.getElementById('city-template').innerHTML.trim();
    const template = Handlebars.compile(templateSource);

    const cityContainer = document.querySelector('.city-container');
    cityContainer.innerHTML = '';

    beautifulCities.forEach(city => {
        const html = template(city);
        cityContainer.innerHTML += html;
    });
// Observer
    const cityList = document.querySelectorAll('.city-card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {  
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.2 });
    cityList.forEach(element => observer.observe(element));
});

