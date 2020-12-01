var test = new Letterize({
  targets: "#animateMe"
});

test.listAll();
for (var i = 0; i < test.listAll().length; i++) {
  test.listAll()[i].addEventListener("mouseover", function(e) {
    e.target = anime({
      targets: e.target,
      duration: 100,
      translateX: anime.random(-10,10),
      translateY: anime.random(-10,10),
      rotate: anime.random(-10,10),
      opacity: 0.5
    });
  });

  test.listAll()[i].addEventListener("mouseout", function(e) {
    e.target = anime({
      targets: e.target,
      duration: 3000,
      opacity: 1
    });
  });
}