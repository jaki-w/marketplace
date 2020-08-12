$(document).ready(function() {
  $("form").submit(function() {
    const firstName = $("input#firstName").val();
    const lastName = $("input#lastName").val();
    const address = $("input#address").val();
    const item = $("#item").val();
    const color = $("#color").val();
  });
});