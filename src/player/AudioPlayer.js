export default class AudioPlayer {
  constructor() {
    this.defaultAudio = '/music/1.mp3'
    this.currentAudio = new Audio(this.defaultAudio);
  }

  play() {
    this.currentAudio.play();
  }

  stop() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
    }
  }
}
