document.addEventListener("DOMContentLoaded", function () {
  new Masonry(".gallery", {
    itemSelector: ".card",
    columnWidth: ".grid-sizer",
    gutter: 40,
    // percentPosition: true,
    // horizontalOrder: true,
  });
});
