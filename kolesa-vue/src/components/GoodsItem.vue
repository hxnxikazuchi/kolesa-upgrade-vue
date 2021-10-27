<template>
<div class="goods">
  <div class="goods__item" v-for="item in items" :key="item.id">
    <div class="goods__img-wrap">
      <img :src="item.mainImage" alt="text" />
      <div class="new-cloth" v-if="item.isNew">new</div>
    </div>
    <div class="item-desc">
      <p class="item-desc__cost">{{ item.price }} баллов</p>
      <p class="item-desc__name">
        {{ item.title }}
      </p>
      <p class="item-desc__size" v-if="item.sizes">
        {{getSizeString(item.sizes)}}
      </p>
      <button
        class="item-desc__order"
        @click="$emit('openModal', item)">
        Заказать
      </button>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'GoodsItem',
  props: {
    items: Array,
  },
  methods: {
    getSizeString(size) {
      return size && size.length ? `Размеры ${size.join(', ')}` : '';
    },
  },
};
</script>
