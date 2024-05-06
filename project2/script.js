var button = document.getElementById('myButton');
var paragraph = document.getElementById('myParagraph');

var images = document.querySelectorAll('img');

button.addEventListener('click', function() {
  if (paragraph.classList.contains('hidden')) {
    paragraph.classList.remove('hidden');
    button.textContent = 'Hide';

    for (var i = 0; i < 9; i++) {
        setTimeout(function() {
            var glitch = document.createElement('div');
            glitch.classList.add('glitch');
            glitch.innerHTML = '<p>this is it??</p>';
            document.body.appendChild(glitch);

            setTimeout(function() {
                glitch.classList.add('active');
            }, 90);

            setTimeout(function() {
                glitch.classList.remove('active');
                setTimeout(function() {
                    glitch.remove();
                }, 500);
            }, 1000);
        }, i * 1000);
    }


  } else {
    paragraph.classList.add('hidden');
    button.textContent = '(☉_ ☉)';
  }
});

function moveImages() {
    images.forEach(function(image) {
        var newPosition = getRandomPosition();
        image.style.left = newPosition.x + 'px';
        image.style.top = newPosition.y + 'px';
    });
}

function getRandomPosition() {
    var x = Math.random() * (window.innerWidth - 170); // Subtract image width
    var y = Math.random() * (window.innerHeight - 170); // Subtract image height
    return { x: x, y: y };
}

setInterval(moveImages, 1000); // Move every 1 second (1000ms)
