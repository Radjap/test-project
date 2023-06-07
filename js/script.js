$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(
      ".header__burger,.header__info,.home__content,.home__img,.page__experience"
    ).toggleClass("active");
    $("body").toggleClass("lock");
  });
});
