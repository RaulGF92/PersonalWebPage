function goTo(path) {
  $("#nav").removeClass("openMenu");
  window.location = "#" + path;
}

$("#menu").on("click", function(event) {
  event.preventDefault();
  $("#nav").toggleClass("openMenu");
});

$("#collapse").on("click", function(event) {
    event.preventDefault();
    $("#nav").removeClass("openMenu");
  });
  

$("#menuProfile").on("click", function(event) {
  event.preventDefault();
  goTo("profile");
});

$("#menuStudies").on("click", function(event) {
  event.preventDefault();
  goTo("studies");
});

$("#menuContact").on("click", function(event) {
  event.preventDefault();
  goTo("contact");
});

$("#menuExperience").on("click", function(event) {
  event.preventDefault();
  goTo("experience");
});

$("#menuSkills").on("click", function(event) {
  event.preventDefault();
  goTo("skills");
});