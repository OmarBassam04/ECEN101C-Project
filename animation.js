function startAnimation() {
    const cars = parseInt(document.getElementById('cars').value);
    const speedLimit = parseInt(document.getElementById('speed-limit').value);
    const lanes = parseInt(document.getElementById('lanes').value);
  
    // Clear previous highway visualization
    const highway = document.getElementById('highway');
    highway.innerHTML = '';
  
    // Create lanes
    for (let i = 0; i < lanes; i++) {
      const lane = document.createElement('div');
      lane.classList.add('lane');
      lane.style.left = (100 / lanes * i) + '%';
      highway.appendChild(lane);
    }
  
    // Create cars
    for (let i = 0; i < cars; i++) {
      const car = document.createElement('div');
      car.classList.add('car');
      car.style.animationDelay = (i / cars * 5) + 's';
      highway.appendChild(car);
    }
  
    // Animate cars
    gsap.to('.car', {
      duration: speedLimit / 10,
      left: '100%',
      ease: 'linear',
      stagger: 0.2,
      repeat: -1,
      onComplete: function() {
        gsap.set('.car', {position: 'absolute', left: '-80px' });
      }
    });
  }