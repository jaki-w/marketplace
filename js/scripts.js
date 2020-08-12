$(document).ready(function() {
  $("form").submit(function() {
    const firstName = $("input#firstName").val();
    const lastName = $("input#lastName").val();
    const address = $("input#address").val();
    const item = $("#item").val();
    const color = $("#color").val();
    event.preventDefault();

    $("#receipt #name").text("Name: " + firstName + " " + lastName);
    $("#receipt #address").text("Address: " + address);
    $("#receipt #itemInfo").children("li").remove();
    $("#receipt #itemInfo").append("<li>Item ordered: " + color +" "+ item +"</li>");
    $("#thanks").text(("Thank you for your order!"));
    $("#receipt").show();
  
  });
});
