$("#get-dish").on("click", function() {
  $.get("/new-dish", function(newDish) {
    alert(newDish["dish"]);
  });
});
