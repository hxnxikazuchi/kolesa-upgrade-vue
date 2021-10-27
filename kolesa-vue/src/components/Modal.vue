<template>
  <div class="modal" v-if="isOpen">
    <div class="modal__container">
      <div class="modal__dialog">
        <button class="modal__close" @click="closeModal">
          <img src="@/assets/img/close-big.svg" alt="close-modal" />
        </button>
        <div class="modal__inner">
          <div class="goods-img-section">
            <div class="main-img">
              <img :src="data.mainImage" alt="Main Image" />
            </div>
            <div class="additional-img">
              <img
                :src="image" alt="image"
                v-for="image in data.images"
                :key="image.id"
              >
            </div>
          </div>
          <div class="goods-information">
            <div class="main-info">
              <h3 class="goods-title">{{data.title}}</h3>
              <p class="points">{{data.price}} баллов</p>
              <div class="order">
                <button class="order__btn" @click="order">Заказать</button>
              </div>
              <div class="client-points">
                <div class="money">
                  <h6>Твой баланс:</h6>
                  <p>{{totalScore}} баллов</p>
                </div>
                <div class="money-bag"></div>
              </div>
            </div>
            <div class="additional-info">
              <section class="inner-info" v-if="data.colors">
                <h5 class="radio-info">Цвета:</h5>
                <div class="radio-wrapper">
                  <div class="color-container" v-for="color in data.colors" :key="color.id">
                    <input
                      :id="data.id"
                      type="radio"
                      name="radio-color"
                      value="Синий"
                      :checked="data.id === currentColor"
                    />
                    <label for="radio-color-1">
                      <div class="color" :style="{background: color.color}"></div>
                      {{color.label}}</label
                    >
                  </div>
                </div>
              </section>
              <section class="inner-info" v-if="data.sizes != 0">
                <h5 class="radio-info">Размер:</h5>
                <div class="radio-wrapper">
                  <div class="size-container" v-for="size in data.sizes" :key="size.id">
                    <input
                      :id="data.id"
                      type="radio"
                      name="radio-size"
                      :value="data.id"
                      :checked="data.id === currentSize"
                    />
                    <label for="radio-size-1">{{size}}</label>
                  </div>
                </div>
              </section>
              <section class="inner-info">
                <h5 class="non-radio-info">Детали:</h5>
                <div class="details-info">
                  {{data.description}}
                </div>
              </section>
              <section class="inner-info">
                <h5 class="non-radio-info">Как выбрать размер:</h5>
                <div class="details-info">
                  Написать дяде Рику для уточнения.
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay" @click="closeModal"></div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isOpen: Boolean,
    data: Object,
    totalScore: Number,
    currentColor: String,
    currentSize: String,
  },
  data() {
    return {
      isShowModal: false,
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    getImgUrl(item) {
      // eslint-disable-next-line global-require,import/no-dynamic-require,import/extensions
      return require(`@/assets/img/${item}`);
    },
    order() {
      this.$emit('order', this.data.score);
    },
  },
};
</script>
