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
        <router-view
          :search="search"
          :user="user"
          @setSearch="setSearch"
          @user="updateUser"
        ></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Search from '@/layouts/components/Search.vue';
import User from '@/layouts/components/User.vue';
import Nav from '@/layouts/components/Nav.vue';
import Footer from '@/layouts/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Search,
    User,
    Nav,
    Footer,
  },
  data() {
    return {
      search: '',
      user: {
        name: '',
        score: 0,
        avatarUrl: '',
      },
    };
  },
  methods: {
    setScore(price) {
      this.closeModal();
      if (price > this.score) {
        // eslint-disable-next-line
        alert('Не хватает баллов');
      } else {
        this.user -= price;
      }
    },
    setSearch(e) {
      this.search = e.target.value;
    },
    updateUser(data) {
      this.user = data;
    },
  },
};
</script>

<style lang="scss">
@import "./scss/style";
</style>
