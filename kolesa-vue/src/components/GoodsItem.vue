<template>
<div class="goods">
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
      <button class="item-desc__order" @click="openModal">Заказать</button>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'Goods Item',
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
      selected: 'Все товары',
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
    sortedAccessories() {
      return [...this.accessories].sort((x, y) => y.isNew - x.isNew);
    },
  },
  methods: {
    getImgUrl(item) {
      // eslint-disable-next-line global-require,import/no-dynamic-require,import/extensions
      return require(`@/assets/img/${item}`);
    },
  },
};
</script>
