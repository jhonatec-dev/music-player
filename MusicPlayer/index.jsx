import {
  Pause,
  PlayArrow,
  VolumeDown, VolumeUp,
} from '@mui/icons-material';
import { IconButton, Slider, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { Component } from 'react';
import './music-player.css';

const intervalRender = 500;

export default class MusicPlayer extends Component {
  state = {
    current: 0,
    lasting: 0,
    duration: 100,
    volume: 20,
    audio: new Audio(''),
  };

  componentDidMount() {
    // receber preview via props e atualizar o elemento de audio no estado
    const { info: { audioUrl } } = this.props;
    const { volume } = this.state;
    let { audio } = this.state;
    audio = new Audio(audioUrl);
    audio.volume = volume / 100;
    const current = 0;
    const duration = Number.isNaN(audio.duration) ? 0 : Math.round(audio.duration);
    const lasting = Math.round(duration || 0);
    this.setState({ current, lasting, duration, audio });
    setInterval(this.renderAudioInfo, intervalRender);
  }

  convertSeconds = (seg) => {
    const totalSeconds = Math.floor(seg);
    const oneMinute = 60;
    const minutes = Math.floor(totalSeconds / oneMinute);
    const seconds = totalSeconds % oneMinute;
    function padTo2Digits(num) {
      return num.toString().padStart(2, '0');
    }
    const result = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
    return result;
  };

  renderAudioInfo = () => {
    const { audio } = this.state;
    const current = Math.round(audio.currentTime);
    const lasting = Math.round(audio.duration - current);
    const duration = Math.round(audio.duration || 0);
    // console.log(audio, duration, lasting);
    this.setState({ current, lasting, duration });
  };

  changeVolume = (_ev, value) => {
    const { audio } = this.state;
    audio.volume = value / 100;
    this.setState({ volume: value });
  };

  playPause = () => {
    const { audio } = this.state;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }

    document.querySelector('.css-eg0mwd-MuiSlider-thumb').classList.remo;
  };

  changeAudioTime = (_ev, value) => {
    const { audio } = this.state;
    audio.currentTime = value;
    const current = Math.round(value);
    this.setState({ current });
  };

  render() {
    const { info } = this.props;
    const { cover, artistName, trackName, colorElements } = info;
    const { duration, lasting, current, volume, audio } = this.state;

    return (
      <div
        className="MusicPlayer"
      >
        <div
          className="MusicPlayer__cover"
        >
          <img src={ cover } alt={ artistName } />
          <div className="MusicPlayer__artist">
            {artistName}
          </div>
        </div>
        <div className="MusicPlayer__info">
          <div className="MusicPlayer__info__track-name">{trackName}</div>
          <Slider
            min={ 0 }
            max={ duration }
            value={ current }
            onChange={ this.changeAudioTime }
            sx={ { color: colorElements } }
          />
          <div className="MusicPlayer__info__time">
            <span>{this.convertSeconds(current)}</span>
            <span>{this.convertSeconds(lasting)}</span>
          </div>
          <div className="MusicPlayer__info__controls">
            <IconButton
              sx={ { background: colorElements,
                ':hover': { background: `${colorElements}80` },
              } }
              onClick={ this.playPause }
            >
              {audio.paused ? <PlayArrow /> : <Pause />}
            </IconButton>
            <Stack
              className="MusicPlayer__volume"
              flex
              width="200px"
              direction="row"
              justifyContent="space-between"
              gap="10px"
              alignItems="center"
            >
              <VolumeDown />
              <Slider
                min={ 0 }
                max={ 100 }
                onChange={ this.changeVolume }
                value={ volume }
                sx={ { color: colorElements,
                } }
              />
              <VolumeUp />
            </Stack>
          </div>
        </div>
      </div>
    );
  }
}

MusicPlayer.propTypes = {
  info: PropTypes.shape({
    artistName: PropTypes.string,
    audioUrl: PropTypes.string,
    cover: PropTypes.string,
    trackName: PropTypes.string,
    colorElements: PropTypes.string,
  }).isRequired,
};
