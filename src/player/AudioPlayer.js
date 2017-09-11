export default class AudioPlayer {
  constructor() {
    this.defaultAudio = '/music/1.mp3'
    this.currentAudio = undefined;
  }

  play(src) {
    let audio = undefined;
    if (src == undefined) {
      audio = new Audio(this.defaultAudio)
    } else {
      audio = new Audio(src);
    }
    audio.play();
    this.currentAudio = audio;
  }

  stop() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
    }
  }
}
