
  var imageLoader = document.getElementById('imageLoader');
  imageLoader.addEventListener('change', loadImage, false);
 
  function loadImage(e) {
    var reader = new FileReader();
    reader.onload = function(event){
        img = new Image();
        img.onload = function(){
          ctx.drawImage(img,0,0);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);  
    return false;    
  }

  var img = canvas.toDataURL("image/png");

download = document.getElementById('canvas-download');
    download.addEventListener('click', function() {
      var data = canvas.toDataURL();
      download.href = data;
    }, false);