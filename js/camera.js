var camera = document.getElementById('camera');
var frame = document.getElementById('frame');
var uploadButton = document.getElementById('upload-button');
var client = new XMLHttpRequest();

camera.addEventListener('change', loadFotoToPreview);
uploadButton.addEventListener('click', uploadFoto);
client.addEventListener('readystatechange', sendSuccessMessage);

function uploadFoto(e) {
    var formData = new FormData();

    formData.append('foto', camera.files[0]);
    formData.append('title', 'Untitled');

    client.open('post', REPLACE_WITH_URL, true);
    client.setRequestHeader('Content-Type', 'multipart/form-data');
    client.send(formData);
}

function loadFotoToPreview(e) {
    var file = e.target.files[0];
    frame.src = URL.createObjectURL(file);
}

function sendSuccessMessage() {
    if (client.readyState == 4 && client.status == 200) {
        alert(client.statusText);
    }
}
