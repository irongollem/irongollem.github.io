'use strict';

var app = function() {
    var camera = document.getElementById('camera');
    var frame = document.getElementById('frame');
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
        if (client.readyState == 4 && client.status == 200) {
            frame.src = '';
            photoTitle.value = '';
            camera.value = '';
            frame.classList.add('hidden');
            uploadButton.classList.add('disabled');
            textSpan.classList.remove('hidden');
        }
    }
}();
