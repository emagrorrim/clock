import CountDownModel from '../model/CountDownModel';
import AudioPlayer from '../../player/AudioPlayer';

export default class TimerController {
  constructor() {
    this.audioPlayer = new AudioPlayer();
  }

  run(distance, tick) {
    let end = new Date().getTime() + distance;
    this.start(end, tick)
  }

  start(end, tick) {
    let that = this;
    this.timer = setInterval(() => {
      let start = new Date().getTime();
      let distance = end - start;

      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      let millisecond = Math.floor(distance % 1000);

      let countDown = new CountDownModel(hours, minutes, seconds, millisecond);
      tick(countDown);

      if (distance < 0) {
        tick(new CountDownModel(0, 0, 0, 0));
        that.end();
      }
    },10);
  }

  end() {
    clearInterval(this.timer);
    this.audioPlayer.play();
  }
}