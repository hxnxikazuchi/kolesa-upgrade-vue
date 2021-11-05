<template>
  <div class="about-points">
    <a href="#" class="about-points__link about-points--green">
      <div class="about-points__item">
        <img src="@/assets/img/plus.svg" alt="take-points" />
        Получить баллы
      </div>
    </a>
    <a href="#"
      class="about-points__link about-points--yellow"
      @click.prevent="goToPage"
      >
      <div class="about-points__item">
        <img src="@/assets/img/question.svg" alt="how-to-get-points" />
        Как получить баллы
      </div>
    </a>
    <a href="#" class="about-points__link about-points--blue">
      <div class="about-points__item">
        <img src="@/assets/img/present.svg" alt="present-points" />
        Подарить баллы
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'HotButtons',
  methods: {
    goToPage() {
      this.$router.push('/shop/how-to-get-score');
    },
  },
};
</script>
