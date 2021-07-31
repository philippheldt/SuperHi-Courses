const duplicateHTML = (element, quantity) =>{
  const crossesContent = document.querySelector(element).innerHTML;
  const crosses = new Array(quantity).fill(crossesContent).join('');
  document.querySelector(element).innerHTML = crosses;
}

duplicateHTML('#crosses', 10);

anime({
    targets: '#tunnel circle',
    scale: 1.1,
    loop: true,
    direction: 'alternate',
    duration: 250,
    easing: 'easeInOutSine',
    delay: (el, index) => index*50
  });

  anime({
    targets: '.conveyor',
    translateX: '-50%',
    duration: 1500,
    loop: true,
    easing: 'linear',
    autoplay: true
  });

  anime({
    targets: '#crosses path',
    rotate: '1turn',
    delay: (el, i) => i * 100,
    duration: 1200,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
  })

const zigzagPath = document.querySelector('#zigzag path');
//herausfinden, wie lange der pfad ist
  const zigzagOffset = anime.setDashoffset(zigzagPath);
  zigzagPath.setAttribute('stroke-dashoffset', zigzagOffset);
  anime({
    targets: zigzagPath,
    strokeDashoffset: [zigzagOffset, 0],
    duration: 3000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });

  const wavePath = document.querySelector('#wave path');
//herausfinden, wie lange der pfad ist
  const waveOffset = anime.setDashoffset(wavePath);
  wavePath.setAttribute('stroke-dashoffset', waveOffset);
  anime({
    targets: wavePath,
    strokeDashoffset: [waveOffset, 0],
    duration: 3000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });


  duplicateHTML('#dots', 40);
  
  const dots = document.querySelectorAll('#dots .dot');
  console.log(dots);
  dots.forEach(dot => {
    anime({
      targets: dot,
      rotate: (el, i) => anime.random(90, 360),
      delay: (el, i) => anime.random(200, 500),
      duration: (el, i) => anime.random(750, 1000),
      loop: true,
      easing: 'easeInOutSine',
      direction: 'alternate',
      autoplay: true
    });
  })

  duplicateHTML('#circles', 20);

  anime({
    targets: '#circles .dot',
    scale: [0, 1.2],
    delay: (el, i) => i * 100,
    duration: 250,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
  })


anime({
  targets: '.flash',
  // we put the colors into an array and grab each one by its index
  backgroundColor: (el, i) => ['#fff636', '#cb89fc', '#fc3035', '#77ebfd'][i],
  // apply a random delay to each one
  delay: (el, i) => anime.random(50, 100),
  duration: 500,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

anime({
  targets: '#squares rect',
  // we need to force the translate position to center the squares
  translateX: ['-50%', '-50%'],
  // we’re not actually animating them, it’s a bit of a hack
  translateY: ['-50%', '-50%'],
  // animate rotation from 45 to 0 to -45
  rotate: [45, 0, -45],
  // delay each one incrementally by 100ms
  delay: (el, i) => 100 * i,
  duration: (el, i) => 750,
  loop: true,
  easing: 'easeInOutSine',
  direction: 'alternate'
})