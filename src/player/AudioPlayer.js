export default class AudioPlayer {
  constructor() {
    this.defaultAudio = '/music/1.mp3'
  }

  play(src) {
    let audio = undefined;
    if (src == undefined) {
      audio = new Audio(this.defaultAudio)
    } else {
      audio = new Audio(src);
    }
    audio.play();
  }
}