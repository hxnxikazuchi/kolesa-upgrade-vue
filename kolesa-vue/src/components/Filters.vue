<template>
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
</template>

<script>
export default {
  name: 'Filters',
};
</script>
