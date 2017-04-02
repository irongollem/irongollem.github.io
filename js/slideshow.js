var imageArray;
var lastId;

// Fill the image array every 30.000 ms with the new picture meta data
(function poll(lastId) {
    var extention = lastId ? "lastId=" + lastId : "";
    var url = "https://zulfiqar.nl/kelvinrianka/getImages.php?key=jS8qpkqNoGiANjE49MHuddyX4rsnaku9LvkSmHBt" + extension;
    setTimeout(function() {
        $.ajax({
            url: url,
            dataType: "json",
            complete: poll.bind(null, lastId),
            success: function(data) {
                data.forEach(function(entry) {
                    imageArray.push(entry);
                });
                lastId = imageArray[imageArray.length -1].id;
            },
        });
    }, 30000);
})();

// The actual slide show logic using the imageArray as reference
