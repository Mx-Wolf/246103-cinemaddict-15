import {createElement} from '../lib/render';

const createUserStatusTemplate = (userRating) => (
  `<section class="header__profile profile">
    <p class="profile__rating">${userRating}</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`
);

export default class UserStatus {
  constructor(userRating) {
    this._userRating = userRating;
    this._element = null;
  }

  getTemplate() {
    return createUserStatusTemplate(this._userRating);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
