// import { films as cpoyFilms, Film } from "./main";


const form = document.getElementById('create_form'); // Змінено на 'create_form'
if (form) {
    const nameIn = form.elements.name;
    const yearIn = form.elements.year;
    const tagsIn = form.elements.tags;
    const authorIn = form.elements.author;
    const countryIn = form.elements.country;
    const timeIn = form.elements.time;
    const ratingIn = form.elements.rating;
    const urlIn = form.elements.url;

    form.onsubmit = (event) => { // Змінено з addVideo на form.onsubmit
        event.preventDefault();
        // let item = new Film(nameIn.value, +yearIn.value, tagsIn.value.split(' '), authorIn.value, countryIn.value, timeIn.value, ratingIn.value, urlIn.value);

        //window.location.href = 'HomePage.html';
        // cpoyFilms.push(item);
        // console.log(films);
        //addFilmToList(item);
    }
} else {
    console.error('Форма create_form не знайдена');
}



