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
              <img :src="getImgUrl(data.img)" alt="Main Image" />
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
              <section class="inner-info">
                <h5 class="radio-info">Цвета:</h5>
                <div class="radio-wrapper">
                  <div class="color-container">
                    <input
                      id="radio-color-1"
                      type="radio"
                      name="radio-color"
                      value="Синий"
                      checked
                    />
                    <label for="radio-color-1">
                      <div class="color color__blue"></div>
                      Синий</label
                    >
                  </div>

                  <div class="color-container">
                    <input
                      id="radio-color-2"
                      type="radio"
                      name="radio-color"
                      value="Бежевый"
                      checked
                    />
                    <label for="radio-color-2"
                      ><div class="color color__whitish"></div>
                      Бежевый</label
                    >
                  </div>
                  <div class="color-container">
                    <input
                      id="radio-color-3"
                      type="radio"
                      name="radio-color"
                      value="Серый"
                      checked
                    />
                    <label for="radio-color-3"
                      ><div class="color color__grey"></div>
                      Серый</label
                    >
                  </div>
                </div>
              </section>
              <section class="inner-info">
                <h5 class="radio-info">Размер:</h5>
                <div class="radio-wrapper">
                  <div class="size-container">
                    <input
                      id="radio-size-1"
                      type="radio"
                      name="radio-size"
                      value="S"
                      checked
                    />
                    <label for="radio-size-1">S</label>
                  </div>

                  <div class="size-container">
                    <input
                      id="radio-size-2"
                      type="radio"
                      name="radio-size"
                      value="M"
                    />
                    <label for="radio-size-2">M</label>
                  </div>

                  <div class="size-container">
                    <input
                      id="radio-size-3"
                      type="radio"
                      name="radio-size"
                      value="L"
                    />
                    <label for="radio-size-3">L</label>
                  </div>
                </div>
              </section>
              <section class="inner-info">
                <h5 class="non-radio-info">Детали:</h5>
                <div class="details-info">
                  Брендированная толстовка от Qazaq Republic. Материал: Хлопок
                  80%, Вискоза 20%
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
      this.$emit('order', this.data.price);
    },
  },
};
</script>
