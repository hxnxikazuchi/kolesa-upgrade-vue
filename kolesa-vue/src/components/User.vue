<template>
  <a href="#" class="inner__user user">
    <img :src="user.avatarUrl" :key="user.name" alt="user-photo" class="user__img" />
    <div class="user__name-points">
      <p class="user__name">{{user.name}}</p>
      <p class="user__point">{{score}} баллов</p>
    </div>
  </a>
</template>

<script>
import axios from '@/axios';

export default {
  name: 'User',
  data() {
    return {
      user: {
        name: '',
        score: 0,
        avatarUrl: '',
      },
    };
  },
  props: {
    score: Number,
  },
  methods: {
    getUserInfo() {
      this.$emit('userInfo', this.user);
    },
  },
  mounted() {
    axios.get('templates/7ZW3y5GAuIge/data')
      .then((response) => {
        console.log(response.data);
        this.user = response.data;
      });
  },
};
</script>
