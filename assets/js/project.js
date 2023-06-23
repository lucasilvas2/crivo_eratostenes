$(document).ready(function () {
  let path = location.pathname.replace("/", "").replace(".html", "");
  $(".sidebar-item").removeClass("active");
  switch (path) {
    case "home":
      $("#home-sidebar-btn").addClass("active");
      break;
    case "videos":
      console.log($("#videos-sidebar-btn"));
      $("#videos-sidebar-btn").addClass("active");
      break;
    default:
      break;
  }
});
