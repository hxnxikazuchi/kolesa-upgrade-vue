<template>
  <div class="inner__search">
    <form class="inner__form" action="#">
      <button class="inner__btn"></button>
      <input
        type="text"
        placeholder="Поиск"
        name="search"
        class="inner__input"
        v-model="search"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: 'Check',
    };
  },
  name: 'Search',
};
</script>
