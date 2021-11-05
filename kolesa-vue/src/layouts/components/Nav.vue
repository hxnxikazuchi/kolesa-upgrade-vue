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
            :exact="item.isExact"
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
          isExact: true,
        },
        {
          link: '/about',
          label: 'Kolesa Team',
          isExact: true,
        },
        {
          link: '/shop',
          label: 'Kolesa Shop',
          isExact: false,
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
