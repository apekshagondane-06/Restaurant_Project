 let currentFace = 0;
    let angle = 0;
    const cube = document.getElementById('cube');

    function rotateCube() {
        angle += 90;
    //   currentFace = (currentFace + 1) % 4;
    //    angle=currentFace + currentFace * 90;
      cube.style.transform = `rotateY(-${angle}deg)`;
    }

    setInterval(rotateCube, 3000); // Rotate every 3 seconds