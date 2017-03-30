var app = function() {
    var camera = document.getElementById('camera');
    var frame = document.getElementById('frame');
    var pictureWrapper = document.getElementsByClassName('picture-wrapper')[0];
    var textSpan = document.getElementById('textSpan');
    var uploadButton = document.getElementById('upload-button');
    var photoTitle = document.getElementById('photo-title');
    var client = new XMLHttpRequest();

    camera.addEventListener('change', loadFotoToPreview);
    uploadButton.addEventListener('click', uploadFoto);
    client.addEventListener('readystatechange', sendSuccessMessage);
    addToHomescreen();

    function uploadFoto(e) {
        var formData = new FormData();

        formData.append('photo', camera.files[0]);
        formData.append('title', photoTitle.value || 'Undefined');

        uploadButton.classList.add('disabled');
        spinner.spin(pictureWrapper);

        client.open('POST', 'https://zulfiqar.nl/kelvinrianka/postImage.php', true);
        client.send(formData);
    }

    function loadFotoToPreview(e) {
        var file = e.target.files[0];
        frame.src = URL.createObjectURL(file);
        frame.classList.remove('hidden');
        uploadButton.classList.remove('disabled');
        textSpan.classList.add('hidden');
    }

    function sendSuccessMessage() {
        if (client.readyState == 4) {
            if (client.status == 200) {
                frame.src = '';
                photoTitle.value = '';
                camera.value = '';
                frame.classList.add('hidden');
                uploadButton.classList.add('disabled');
                textSpan.classList.remove('hidden');
            } else {
                uploadButton.classList.remove('disabled');
                //TODO Something failed message, please try again
            }
            spinner.stop();
        }
        //TODO spinner.hide()
    }

        var opts = {
            lines: 15 // The number of lines to draw
                ,
            length: 22 // The length of each line
                ,
            width: 14 // The line thickness
                ,
            radius: 58 // The radius of the inner circle
                ,
            scale: 1.5 // Scales overall size of the spinner
                ,
            corners: 0 // Corner roundness (0..1)
                ,
            color: '#000' // #rgb or #rrggbb or array of colors
                ,
            opacity: 0.25 // Opacity of the lines
                ,
            rotate: 0 // The rotation offset
                ,
            direction: -1 // 1: clockwise, -1: counterclockwise
                ,
            speed: 1 // Rounds per second
                ,
            trail: 59 // Afterglow percentage
                ,
            fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
                ,
            zIndex: 2e9 // The z-index (defaults to 2000000000)
                ,
            className: 'spinner' // The CSS class to assign to the spinner
                ,
            top: '40%' // Top position relative to parent
                ,
            left: '50%' // Left position relative to parent
                ,
            shadow: false // Whether to render a shadow
                ,
            hwaccel: false // Whether to use hardware acceleration
                ,
            position: 'absolute' // Element positioning
        }
        // var target = document.getElementById('foo')
      var spinner = new Spinner(opts);
}();
