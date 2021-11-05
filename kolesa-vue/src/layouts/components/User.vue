<template>
  <a href="#" class="inner__user user">
    <img :src="userInfo.avatarUrl" alt="user-photo" class="user__img" />
    <div class="user__name-points">
      <p class="user__name">{{ userInfo.name }}</p>
      <p class="user__point">{{userInfo.score}} баллов</p>
    </div>
  </a>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'User',
  computed: {
    score() {
      return this.userInfo.score ? `${this.userInfo.score} баллов` : '';
    },
    ...mapState({
      userInfo: 'userInfo',
    }),
  },
  methods: {
    fetchUser() {
      this.$store.dispatch('fetchUserInfo');
    },
  },
  mounted() {
    this.fetchUser();
  },
};
</script>
