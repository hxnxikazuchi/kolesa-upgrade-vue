<template>
  <main class="main">
    <div class="score__breadcrumbs">
      <router-link :to="{ name: 'Shop'}" replace>
        Kolesa Shop
      </router-link>
      /
      <a href="#">Как получить баллы</a>
    </div>

    <h1 class="score__section_title">
      Как получить баллы
    </h1>
    <div class="goods">
      <div
        class="goods__item score__item"
        v-for="item in cards" :key="item.title">
        <div class="score__img">
          <img src="@/assets/img/score-img1.svg" alt="text" />
        </div>
        <div class="score__inner">
          <div class="score__info">
            <p class="score__title">
              {{item.title}}
            </p>
            <p class="score__point">{{item.points}}</p>
            <p class="score__desc">
              {{item.desc}}
            </p>
          </div>
          <button
            class="item-desc__order score__btn">
            Отправить заявку
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: 'Выступление на конференциях',
          desc: 'Стань спикером на международной конференции по своему направлению',
          points: '90 баллов',
        },
        {
          title: 'Выступление на meetup',
          desc: 'Стань спикером в Колёсах и на meetup других компаний. Расскажи о наших продуктах и технологиях которые мы используем',
          points: '60 баллов',
        },
        {
          title: 'Статья на habr/vc.ru/rusbase',
          desc: 'Подготовь качественный контент, напиши и опубликуй статью на профильную тему',
          points: '60 баллов',
        },
        {
          title: 'Мастер-классы, тренинги, лекции, подкасты, прямые эфиры',
          desc: 'Поделись профессиональными знаниями с коллегами. Важно обучить не менее 6 человек',
          points: '60 баллов',
        },
        {
          title: 'Организация мероприятия',
          desc: 'Организуй турнир по командным играм в офисе. ЧГК, настольный теннис и другие направления. Не менее 10 участников в турнире',
          points: '60 баллов',
        },
        {
          title: 'Стань ментором в проекте «Kolesa Academy»',
          desc: 'Стань ментором академиков, поделись своими знаниями и помоги ребятам завершить Kolesa Academy успешно',
          points: '60 баллов',
        },
        {
          title: 'Помощь HR team',
          desc: 'Помоги организовать мероприятие',
          points: '50 баллов',
        },
        {
          title: 'Выступление на Demoday',
          desc: 'Выступи на Demoday внутри своей команды и поделись знаниями',
          points: '30 баллов',
        },
        {
          title: 'Другое',
          desc: 'Получай баллы если уже что-то сделано',
          points: '',
        },

      ],
    };
  },
};
</script>

<style lang="scss">
  :root{
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: black;
  }
  .score__breadcrumbs{
    color: black;
  }
  .score__btn {
    opacity: 1;
  }
  .score__img {
    max-width: 48px;
    max-height: 48px;

    img{
      width: 100%;
      min-width: auto;
    }
  }
  .score__title{
    font-weight: 600;
    color: black;
  }
  .score__section_title{
    color: black;
    font-size: 20px;
    line-height: 32px;
  }
  .score__point{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-size: 13px;
    line-height: 20px;
    color: black;
    padding: 0 4px;
    background: #E9F2FB;
  }
  .score__desc{
    color: black;
    font-weight: 400;
  }

  .score__item{
    padding: 24px;
    justify-content:unset;
  }

  .goods__item{
    box-shadow: 0 2px 10px rgba(28, 24, 25, 0.1);
  }

  .score__inner{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .score__info{
    display: flex;
    flex-direction: column;
    gap: 8px 0;
  }
</style>
