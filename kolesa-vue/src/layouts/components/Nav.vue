<template>
  <aside class="aside">
    <nav>
      <ul class="nav-list">
        <li v-for="(item, index) in routes"
          :key="index"
          >
          <router-link
            :to="item.link"
            v-html="item.label"
            active-class='active'
            exact
          >
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      routes: [
        {
          link: '/',
          label: 'Оргсхема',
        },
        {
          link: '/about',
          label: 'Kolesa Team',
        },
        {
          link: '/shop',
          label: 'Kolesa Shop',
        },
        {
          link: '#',
          label: 'Картина компании',
        },
        {
          link: '#',
          label: 'Новости',
        },
        {
          link: '#',
          label: 'Education',
        },
        {
          link: '#',
          label: 'Guidelines',
        },
        {
          link: '#',
          label: 'Библиотека',
        },
        {
          link: '#',
          label: 'FAQ',
        },
      ],
    };
  },
};
</script>
