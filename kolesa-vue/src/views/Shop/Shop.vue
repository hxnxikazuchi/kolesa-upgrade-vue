<template>
  <main class="main">
    <img class="banner" src="@/assets/img/banner.png" alt="banner" />
    <HotButtons></HotButtons>
    <div class="goods-wrapper">
      <Filters v-model="activeKey" :filters="filters" />
      <GoodsItem :items="filteredItem" @openModal="openCard"> </GoodsItem>
    </div>
    <Modal
      :data="modalData"
      :is-open="isShowModal"
      @close="closeModal"
      @order="setScore"
      :user="user"
      :currentColor="selectedColor"
      :currentSize="selectedSize"
    >
    </Modal>
  </main>
</template>

<script>
import axios from '@/axios';
import GoodsItem from '@/views/Shop/components/GoodsItem.vue';
import Filters from '@/views/Shop/components/Filters.vue';
import Modal from '@/views/Shop/components/Modal.vue';
import HotButtons from '@/views/Shop/components/HotButtons.vue';

export default {
  name: 'Shop',
  props: {
    user: Object,
    search: String,
  },
  components: {
    GoodsItem,
    Filters,
    Modal,
    HotButtons,
  },
  data() {
    return {
      modalData: {},
      accessories: [],
      clothes: [],
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
      selectedColor: 0,
      selectedSize: 0,
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
        // eslint-disable-next-line
        alert('Не хватает баллов');
      } else {
        this.score -= price;
      }
    },
  },
  mounted() {
    axios.get('templates/-_RLsEGjof6i/data')
      .then((response) => {
        this.clothes = response.data;
      });
    axios.get('templates/q3OPxRyEcPvP/data')
      .then((response) => {
        this.accessories = response.data;
      });
  },
};
</script>
