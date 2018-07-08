let _bwahSoundFile = '../static/audio/airhorn.mp3',
  _bwahSound;

const _fireAway = () => {
  _bwahSound.currentTime = 0;
  _bwahSound.play();
};

export const Bwah = () => {
  if (!_bwahSound) {
    _bwahSound = new Audio(_bwahSoundFile);
  }

 _fireAway()
};
