var start = new Date().getTime();

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function makeShapeAppear(){
    var top = Math.random() * 350;
    var left = Math.random() * 400;
    var width = Math.random() * 400;
    var borderRadious = Math.random() * 50;
    
    document.getElementById('shapes').style.backgroundColor = getRandomColor();
    
    document.getElementById('shapes').style.borderRadius = borderRadious + '%';
    
    document.getElementById('shapes').style.width = width + 'px';
    
    document.getElementById('shapes').style.height = width + 'px';
    
    document.getElementById('shapes').style.top = top + 'px';
    
    document.getElementById('shapes').style.left = left + 'px';
    
    document.getElementById('shapes').style.display = 'block';
    
   start = new Date().getTime(); 
    
}

function appearAfterDelay(){
    setTimeout(makeShapeAppear, Math.random() * 2000);
    
}

appearAfterDelay();

document.getElementById('shapes').onclick = function(){
    document.getElementById('shapes').style.display = 'none';
    
    var end = new Date().getTime();
    var reactionTime = (end - start) / 1000;
    document.getElementById('reactionTime').innerHTML =  reactionTime + "s";
 
    appearAfterDelay();
}

