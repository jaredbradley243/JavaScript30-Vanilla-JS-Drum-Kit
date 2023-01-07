//Function to play audio when keyboard key is pressed  
function playAudio(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

//Function to play audio when button is pressed on touchscreen
  function playOnTouch(e){
    const audio = document.querySelector(`audio[data-key="${e.currentTarget.dataset.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.currentTarget.dataset.key}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }

//Function to remove transition stlye after transition has ended
  function removeTransition(e){
    if (e.propertyName != 'transform') return;
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playAudio);
  keys.forEach(key => key.addEventListener('click', playOnTouch));
