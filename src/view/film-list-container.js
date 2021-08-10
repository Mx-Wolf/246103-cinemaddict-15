// import {filmCard} from './film-card';
// import {filmData} from '../mock/create-1-film';
import {render} from '../lib/render';
import {siteMainElement} from '../main';
import {createElement} from '../lib/render';
import Film1Card from './film-card';

const createFilmCardTemplate = () => (
  `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div class="films-list__container">
      </div>
    </section>
</section>`
);

export default class FilmListContainer {
  constructor(data, count = 5) {
    this.data = data;
    this.count = count;
    this._element = null;
  }

  getTemplate() {
    return createFilmCardTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = this.createElement();
    }

    return this._element;
  }

  createElement () {
    const result = createElement(this.getTemplate());
    const container = result.querySelector('.films-list__container');
    this.data
      .slice(0, this.count)
      .map((film) => new Film1Card(film.filmInfo))
      .forEach((filmView) => container.appendChild(filmView.getElement()));
    return container;
  }

  removeElement() {
    this._element = null;
  }
}

export const moreButtonHandler = () => {
  const FILMS_QUANTITY = 23;
  const FILMS_IN_ROW = 5;
  const REST_OF_FILMS = FILMS_QUANTITY % FILMS_IN_ROW;

  let filmsCount = FILMS_QUANTITY;


  const loadMoreButton = siteMainElement.querySelector('.films-list__show-more');
  const filmListContainer = siteMainElement.querySelector('.films-list__container');

  loadMoreButton.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (filmsCount > 0) {
      const count = filmsCount > REST_OF_FILMS
        ? FILMS_IN_ROW : REST_OF_FILMS;

      render(filmListContainer, createFilmCardTemplate(count), 'beforeend');

      filmsCount -= count;

      if(filmsCount === 0) {
        loadMoreButton.remove();
      }
    }

  });
};
