<template>
  <footer class="footer">
      <div class="container">
        <div class="footer-wrapper">
          <div class="social-logo">
            <div class="footer__logo">© Kolesa Group</div>
            <ul class="footer__social">
              <li>
                <a href="#"
                  ><img
                    src="@/assets/img/insta.svg"
                    alt="insta"
                    class="footer__img"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img
                    src="@/assets/img/youtube.svg"
                    alt="youtube"
                    class="footer__img"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img
                    src="@/assets/img/vk.svg"
                    alt="vk"
                    class="footer__img"
                /></a>
              </li>
            </ul>
          </div>
          <div class="footer-contact-us">
            <p>
              Есть идеи что улучшить? <br />
              Не знаешь, с кем решить проблему?
            </p>
            <div class="write-us__btn">
              <a href="#">Написать</a>
            </div>
          </div>
        </div>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
