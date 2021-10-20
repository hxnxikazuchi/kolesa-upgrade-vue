<template>
  <div id="app">
    <header class="header">
      <div class="header-container container">
        <div class="header__wrapper">
          <img
            class="header__logo"
            src="../src/assets/img/logo.svg"
            alt="kolesa-logo"
          />
          <div class="header__inner inner">
            <div class="inner__search">
              <form class="inner__form" action="#">
                <button class="inner__btn"></button>
                <input
                  type="text"
                  placeholder="Поиск"
                  name="search"
                  class="inner__input"
                />
              </form>
            </div>
            <a href="#" class="inner__user user">
              <img
                src="../src/assets/img/morti.svg"
                alt="user-photo"
                class="user__img"
              />
              <div class="user__name-points">
                <p class="user__name">Мортиджан</p>
                <p class="user__point">300 баллов</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
    <div class="main-aside-wrapper">
      <div class="container main-container">
        <aside class="aside">
          <nav>
            <ul class="nav-list">
              <li><a href="#">Оргсхема</a></li>
              <li><a href="#">Kolesa Team</a></li>
              <li class="active"><a href="#">Kolesa Shop</a></li>
              <li><a href="#">Картина компании</a></li>
              <li><a href="#">Новости</a></li>
              <li><a href="#">Education</a></li>
              <li><a href="#">Guidelines</a></li>
              <li><a href="#">Библиотека</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </nav>
        </aside>
        <main class="main">
          <img class="banner" src="../src/assets/img/banner.png" alt="banner" />
          <div class="about-points">
            <a href="#" class="about-points__link about-points--green">
              <div class="about-points__item">
                <img src="../src/assets/img/plus.svg" alt="take-points" />
                Получить баллы
              </div>
            </a>
            <a href="#" class="about-points__link about-points--yellow">
              <div class="about-points__item">
                <img
                  src="../src/assets/img/question.svg"
                  alt="how-to-get-points"
                />
                Как получить баллы
              </div>
            </a>
            <a href="#" class="about-points__link about-points--blue">
              <div class="about-points__item">
                <img src="../src/assets/img/present.svg" alt="present-points" />
                Подарить баллы
              </div>
            </a>
          </div>
          <div class="goods-wrapper">
            <div class="radio-buttons">
              <div class="radio-item">
                <input
                  class="js__category-button"
                  type="radio"
                  id="item-radio-1"
                  name="radio-item"
                  value="Все товары"
                  data-key="all"
                  checked
                  v-model="selected"
                />
                <label for="item-radio-1">Все товары</label>
              </div>
              <div class="radio-item">
                <input
                  class="js__category-button"
                  type="radio"
                  id="item-radio-2"
                  name="radio-item"
                  value="Одежда"
                  data-key="clothes"
                  v-model="selected"
                />
                <label for="item-radio-2">Одежда</label>
              </div>
              <div class="radio-item">
                <input
                  class="js__category-button"
                  type="radio"
                  id="item-radio-3"
                  name="radio-item"
                  value="Аксессуары"
                  data-key="accessories"
                  v-model="selected"
                />
                <label for="item-radio-3">Аксессуары</label>
              </div>
            </div>
            <div class="goods" v-if="selected === 'Все товары'">
              <div class="goods__item" v-for="item in allItems" :key="item">
                <div class="goods__img-wrap">
                  <img :src="getImgUrl(item.img)" alt="text" />
                  <div class="new-cloth" v-if="item.isNew">new</div>
                </div>
                <div class="item-desc">
                  <p class="item-desc__cost">{{ item.price }} баллов</p>
                  <p class="item-desc__name">
                    {{ item.title }}
                  </p>
                  <p class="item-desc__size" v-if="item.size">Размер S/M/L</p>
                  <button class="item-desc__order">Заказать</button>
                </div>
              </div>
            </div>
            <div class="goods" v-if="selected === 'Одежда'">
              <div class="goods__item" v-for="item in clothes" :key="item">
                <div class="goods__img-wrap">
                  <img :src="getImgUrl(item.img)" alt="text" />
                  <div class="new-cloth" v-if="item.isNew">new</div>
                </div>
                <div class="item-desc">
                  <p class="item-desc__cost">{{ item.price }} баллов</p>
                  <p class="item-desc__name">
                    {{ item.title }}
                  </p>
                  <p class="item-desc__size" v-if="item.size">Размер S/M/L</p>
                  <button class="item-desc__order">Заказать</button>
                </div>
              </div>
            </div>
            <div class="goods" v-if="selected === 'Аксессуары'">
              <div class="goods__item" v-for="item in accessories" :key="item">
                <div class="goods__img-wrap">
                  <img :src="getImgUrl(item.img)" alt="text" />
                  <div class="new-cloth" v-if="item.isNew">new</div>
                </div>
                <div class="item-desc">
                  <p class="item-desc__cost">{{ item.price }} баллов</p>
                  <p class="item-desc__name">
                    {{ item.title }}
                  </p>
                  <p class="item-desc__size" v-if="item.size">Размер S/M/L</p>
                  <button class="item-desc__order">Заказать</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="footer-wrapper">
          <div class="social-logo">
            <div class="footer__logo">© Kolesa Group</div>
            <ul class="footer__social">
              <li>
                <a href="#"
                  ><img
                    src="../src/assets/img/insta.svg"
                    alt="insta"
                    class="footer__img"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img
                    src="../src/assets/img/youtube.svg"
                    alt="youtube"
                    class="footer__img"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img
                    src="../src/assets/img/vk.svg"
                    alt="vk"
                    class="footer__img"
                /></a>
              </li>
            </ul>
          </div>
          <div class="footer-contact-us">
            <p>
              Есть идеи что улучшить? <br />
              Не знаешь, с кем решить проблему?
            </p>
            <div class="write-us__btn">
              <a href="#">Написать</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="modal">
      <div class="modal__container">
        <div class="modal__dialog">
          <button class="modal__close">
            <img src="../src/assets/img/close-big.svg" alt="close-modal" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      accessories: [
        {
          id: 7,
          title: 'Кулон "Green"',
          price: 250,
          isNew: true,
          img: 'accessory1.jpg',
          size: false,
        },
        {
          id: 8,
          title: 'Браслет "Gold"',
          price: 270,
          isNew: false,
          img: 'accessory2.jpg',
          size: false,
        },
        {
          id: 9,
          title: 'Часы "Omega"',
          price: 200,
          isNew: false,
          img: 'accessory3.jpg',
          size: false,
        },
        {
          id: 10,
          title: 'Селфи палка "Blue"',
          price: 180,
          isNew: true,
          img: 'accessory4.jpg',
          size: false,
        },
        {
          id: 11,
          title: 'Бутылка "Versace"',
          price: 1000,
          isNew: true,
          img: 'accessory5.jpg',
          size: false,
        },
        {
          id: 12,
          title: 'Очки "Black"',
          price: 170,
          isNew: false,
          img: 'accessory6.jpg',
          size: false,
        },
      ],
      clothes: [
        {
          id: 0,
          title: 'Футболка "Эволюционируй или Сдохни"',
          price: 220,
          isNew: true,
          img: 'goods-item.png',
          size: true,
        },
        {
          id: 1,
          title: 'Футболка "There is always second chance"',
          price: 310,
          isNew: true,
          img: 'cloth1.jpg',
          size: true,
        },
        {
          id: 2,
          title: 'Футболка "Brown"',
          price: 280,
          isNew: false,
          img: 'cloth2.jpg',
          size: true,
        },
        {
          id: 3,
          title: 'Футболка "Pringles"',
          price: 480,
          isNew: false,
          img: 'cloth3.jpg',
          size: true,
        },
        {
          id: 4,
          title: 'Футболка "Мои кореша"',
          price: 280,
          isNew: true,
          img: 'cloth4.jpg',
          size: true,
        },
        {
          id: 5,
          title: 'Футболка "KEU"',
          price: 230,
          isNew: false,
          img: 'cloth5.jpg',
          size: true,
        },
        {
          id: 6,
          title: 'Футболка "Bella Ciao"',
          price: 150,
          isNew: false,
          img: 'cloth6.jpg',
          size: true,
        },
      ],
      selected: null,
    };
  },
  computed: {
    allItems() {
      return [...this.clothes, ...this.accessories].sort(
        (x, y) => y.isNew - x.isNew,
      );
    },
    sortedClothes() {
      return [...this.clothes].sort((x, y) => y.isNew - x.isNew);
    },
  },
  methods: {
    getImgUrl(item) {
      // eslint-disable-next-line global-require,import/no-dynamic-require,import/extensions
      return require(`./assets/img/${item}`);
    },
    showClothes() {

    },
  },
};
</script>

<style lang="scss">
@import "./scss/style";
</style>
