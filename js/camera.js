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


//Parallax gimmick
var isMobile = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false;
var posX, posY;

if (isMobile && window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientationevent', function(eventData) {
      posX = eventData.gamma * 2;
      posY = eventData.beta * 3;

      
    }, false);
}
