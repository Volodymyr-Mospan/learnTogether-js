document.addEventListener("DOMContentLoaded", function () {
  new Masonry(".gallery", {
    itemSelector: ".card",
    columnWidth: ".card",
    gutter: 24,
    percentPosition: true,
  });
});
