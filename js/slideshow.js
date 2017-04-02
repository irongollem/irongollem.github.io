var imageArray

(function poll() {
  var url = "https://zulfiqar.nl/kelvinrianka/getImages.php?key=jS8qpkqNoGiANjE49MHuddyX4rsnaku9LvkSmHBt";
   setTimeout(function() {
       $.ajax({
         url: url, success: function(data) {
            sales.setValue(data.value);
       },
       dataType: "json",
        complete: poll });
    }, 30000);
})();
