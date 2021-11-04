<template>
  <div id="app">
    <header class="header">
      <div class="header-container container">
        <div class="header__wrapper">
          <img class="header__logo" src="../src/assets/img/logo.svg" alt="kolesa-logo" />
          <div class="header__inner inner">
            <Search></Search>
            <User @getUserInfo="setScore"></User>
          </div>
        </div>
      </div>
    </header>
    <div class="main-aside-wrapper">
      <div class="container main-container">
        <Nav></Nav>
        <main class="main">
          <img class="banner" src="../src/assets/img/banner.png" alt="banner" />
          <HotButtons></HotButtons>
          <div class="goods-wrapper">
            <Filters v-model="activeKey" :filters="filters" />
            <GoodsItem :items="filteredItem" @openModal="openCard"> </GoodsItem>
          </div>
        </main>
      </div>
    </div>
    <Footer></Footer>
    <Modal
      :data="modalData"
      :is-open="isShowModal"
      @close="closeModal"
      @order="setScore"
    >
    </Modal>
  </div>
</template>

<script>
import axios from './axios';

import Modal from './components/Modal.vue';
import Search from './components/Search.vue';
import User from './components/User.vue';
import Nav from './components/Nav.vue';
import HotButtons from './components/HotButtons.vue';
import Filters from './components/Filters.vue';
import GoodsItem from './components/GoodsItem.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Modal,
    Search,
    User,
    Nav,
    HotButtons,
    Filters,
    GoodsItem,
    Footer,
  },
  data() {
    return {
      modalData: {},
      search: '',
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
      activeKey: 'all',
      isShowModal: false,
      filters: [
        {
          id: 'all',
          title: 'Все товары',
        },
        {
          id: 'clothes',
          title: 'Одежда',
        },
        {
          id: 'acsessories',
          title: 'Аксессуары',
        },
      ],
      user: {
        name: '',
        score: 0,
        avatarUrl: '',
      },
    };
  },
  computed: {
    allItems() {
      return [...this.clothes, ...this.accessories].sort((x, y) => y.isNew - x.isNew);
    },
    sortedClothes() {
      return [...this.clothes].sort((x, y) => y.isNew - x.isNew);
    },
    sortedAccessories() {
      return [...this.accessories].sort((x, y) => y.isNew - x.isNew);
    },
    filteredItem() {
      if (this.activeKey === 'clothes') {
        return this.sortedClothes;
      }

      if (this.activeKey === 'acsessories') {
        return this.sortedAccessories;
      }
      return this.allItems;
    },
  },
  methods: {
    openCard(data) {
      this.openModal();
      this.modalData = data;
    },
    openModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    setScore(price) {
      this.closeModal();
      if (price > this.score) {
        alert('Не хватает баллов');
      } else {
        this.score -= price;
      }
    },
    setSearch(e) {
      this.search = e.target.value;
    },
  },
  mounted() {
    axios.get('templates/-_RLsEGjof6i/data')
      .then((response) => {
        console.log(response.data);
        this.clothes = response.data;
      });
    axios.get('templates/q3OPxRyEcPvP/data')
      .then((response) => {
        console.log(response.data);
        this.accessories = response.data;
      });
  },
};
</script>

<style lang="scss">
@import "./scss/style";
</style>
