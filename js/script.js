/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

//?База данных с названиями фильмов
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
//!================================

//?Переменные
const promo = document.querySelector('.promo__adv'),
    promoTitle = promo.querySelector('.promo__adv-title'),
    promoImg = promo.querySelectorAll('img'),
    ganre = document.querySelector('.promo__genre'),
    promoContentBg = document.querySelector('.promo__bg'),
    promoList = document.querySelector('.promo__interactive-list'),
    promoListLi = promoList.querySelectorAll('li'),
    newList = document.createElement('ol'),
    newListLi = newList.querySelectorAll('li'),
    form = document.querySelector('.add'),
    btn = form.querySelector('button'),
    input = form.querySelector('.adding__input'),
    checkbox = form.querySelector('input[type="checkbox"]');
//!================================



//?---Функции

function addList() {
    newList.innerHTML = ' ';
    movieDB.movies.sort().forEach(film => {
        newList.innerHTML += `
    <li class="promo__interactive-item">${film}
        <div class="delete"></div>
    </li>
    `;
        newList.querySelectorAll('li').forEach(item => {
            item.style.display = 'list-item';
        });
    });
}
//!=================================




//1 quest
//?---Удаление элементов страницы 
//promo.remove();
//promoTitle.remove();
promoImg.forEach((item) => {
    item.remove();
});
//!================================


//2 quest
//?---Установка текста в элементе страницы
ganre.textContent = 'Драма';
//!================================

//3 quest
//?---Установка фона на странце с помощю JS
promoContentBg.style.cssText = 'background: url("img/bg.jpg") 0 0/ cover no-repeat;"';
//!================================

//4 quest
//?---Убираем старые элементы списка, что бы установить новые
promoListLi.forEach((item) => {
    item.remove();
});
//!================================

//?---Заменяем маркированный список на нумированный
promoList.replaceWith(newList);
//!================================

//?---Устанавливаем новому списку класс и стили
newList.classList.add('promo__interactive-list');
newList.style.paddingLeft = '18px';
newList.style.listStyleType = 'decimal';
//!================================

//?---Здесь применяется несколько методов для БД с названиями фильмов - сортировки и перебора
/* movieDB.movies.sort().forEach((item, index) => {
    let li = document.createElement('li');//Сощдаем новый элемент списка
    li.innerHTML = `${item}<div class="delete"></div>`;//Вкладываем в него значения из БД
    newList.append(li);//Ложим в начало списка
    li.classList.add('promo__interactive-item');//Добавляем класс
    li.style.display = 'list-item';//Устанавливаем отобрадение как списка
}); */

addList();

//!================================

//?---Работа с формой
btn.addEventListener('click', e => {
    e.preventDefault();
    let nameFilm = input.value;
    if (nameFilm.length > 0) {
        if (nameFilm.length > 21) {
            nameFilm = nameFilm.slice(0, 22) + '...';
        }
        movieDB.movies.push(nameFilm);
        addList();
        input.value = '';
        if (checkbox.checked) {
            console.log('Добавляем любимый фильм');
        }
    } else {
        alert('Введите название фильма');
    }

});
//!================================

//?---Установка кнопки удалить
newList.addEventListener('click', e => {
    console.log(e.target);
    if (e.target.classList.contains('delete')) {
        const child = e.target;
        console.log(child.parentElement);
        child.parentElement.remove();
    }
});
//!================================