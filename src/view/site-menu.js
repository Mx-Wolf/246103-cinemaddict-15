import AbstractView from './abstract';

const createSiteMenuTemplate = (watchlistCount, historyCount, favoritesCount) =>
  `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist<span class="main-navigation__item-count">${watchlistCount}</span></a>
      <a href="#history" class="main-navigation__item">History<span class="main-navigation__item-count">${historyCount}</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites<span class="main-navigation__item-count">${favoritesCount}</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;


export default class SiteMenu extends AbstractView {
  constructor({watchlistCount, historyCount, favoritesCount}) {
    super();
    this._watchlistCount = watchlistCount;
    this.historyCount = historyCount;
    this.favoritesCount = favoritesCount;
  }

  getTemplate() {
    return createSiteMenuTemplate(this._watchlistCount, this.historyCount, this.favoritesCount);
  }
}
