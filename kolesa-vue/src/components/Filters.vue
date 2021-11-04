<template>
  <div class="radio-buttons">
    <div class="radio-item"
        v-for="item in filters"
        :key="item.id"
        @click="$emit('change', item.id)">
      <input
        type="radio"
        :id="item.id"
        name="radio-item"
        :value="item.title"
        data-key="all"
        :checked="item.id === currentKey"
      />
      <label for="item-radio-1">{{item.title}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filters',
  model: {
    event: 'change',
    prop: 'currentKey',
  },
  props: {
    filters: Array,
    currentKey: String,
  },
};
</script>

<style lang="scss">
  $black: #1c1819;
  $blue: #2a81dd;
  $grey: #888b94;
  $radioChecked: #d6ecfb;
  $white: #fff;
  .radio-buttons {
    display: flex;
    align-items: center;
    gap: 0 8px;
    margin-top: 40px;
  }
  .radio-item {
    display: inline-block;

    input[type="radio"] {
      display: none;
    }

    label {
      display: inline-block;
      padding: 6px 15px;
      cursor: pointer;
      user-select: none;
      border-radius: 8px;
      border: 1px solid rgba(28, 24, 25, 0.1);
      text-align: center;
      font-weight: 400;
      color: $blue;
    }

    input[type="radio"]:checked + label {
      border: none;
      background: $radioChecked;
      color: $black;
    }
  }
</style>
