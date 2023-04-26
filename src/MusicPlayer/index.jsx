// eslint-disable-next-line no-unused-vars
import { PauseTwoTone, PlayArrowTwoTone, VolumeDown, VolumeUp } from '@mui/icons-material';
import { Button, Slider, Stack } from '@mui/material';
import PropTypes from "prop-types";
import { Component } from 'react';
import './music-player.css';


let audio = new Audio('');
const intervalRender = 500;

export default class MusicPlayer extends Component {
  state={
    audio: new Audio(''),
    current: 0,
    lasting: 0,
    duration: 100,
    volume: 20,
  }
  componentDidMount(){
    //receber preview via props e atualizar o elemento de audio no estado
    const{info:{audioUrl}} = this.props;
    const {volume} = this.state;
    audio = new Audio(audioUrl);
    audio.volume = volume / 100;
    const current = 0;
    const duration = Number.isNaN(audio.duration) ? 0 : Math.round(audio.duration);
    const lasting = Math.round(duration || 0);
    // console.log(audioUrl, audio, duration);
    this.setState({audio, current, lasting, duration});
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
    const current = Math.round(audio.currentTime);
    const lasting = Math.round(audio.duration - current);
    const duration = Math.round(audio.duration || 0);
    // console.log(audio, duration, lasting);
    this.setState({current, lasting, duration});
  }

  changeVolume = (_ev, value) => {
    audio.volume = value / 100;
    this.setState({volume: value});
  }
  
  playPause = () => {
    if(audio.paused){
      audio.play();
    } else{
      audio.pause();
    }
  }

  changeAudioTime = (_ev, value) => {
    audio.currentTime = value;
    const current = Math.round(value);
    this.setState({current})
  }

  render() {
    const{info} = this.props;
    const {cover, artistName, trackName, colorElements } = info;
    const {duration, lasting, current, volume} = this.state;
    return (
      <div className='MusicPlayer' style={{display: 'flex', width: '100%', padding: '10px', gap: '12px'}}>
        <div className='MusicPlayer__cover' style={{padding: '8px', textAlign: 'center'}}>
          <img src={cover} alt="" style={{width: '80px'}}/>
          <div style={{fontSize:'small', fontWeight:'600', textAlign: 'center'}}>{artistName}</div>
        </div>
        <div className='MusicPlayer__info' style={{width: '100%'}}>
        <div style={{fontSize:'large', fontWeight:'600'}}>{trackName}</div>
        <Slider min={0} max={duration} value={current} onChange={this.changeAudioTime} sx={{color: colorElements}}/>
        <div className='MusicPlayer__time' style={{display: 'flex', justifyContent: 'space-between', marginTop: '-8px', marginBottom:'12px'}}>
          <span>{this.convertSeconds(current)}</span>
          <span>{this.convertSeconds(lasting)}</span>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Button variant='contained'
          sx={{textAlign: 'center', background: colorElements, ":hover":`background: ${colorElements}`}}
          startIcon={
          audio.paused ? <PlayArrowTwoTone/> : <PauseTwoTone/>
          }  onClick={this.playPause}/>
          <Stack 
          className="MusicPlayer__volume" 
          flex={true} width="200px" 
          direction="row" 
          justifyContent="space-between" 
          gap="10px" 
          alignItems="center">
            <VolumeDown />
            <Slider min={0} max={100} onChange={this.changeVolume} value={volume} sx={{color: colorElements}}/>
            <VolumeUp />
          </Stack>
        </div>
        </div>
      </div>
    )
  }
}

MusicPlayer.propTypes = {
  info: PropTypes.shape({
    artistName: PropTypes.any,
    audioUrl: PropTypes.string,
    cover: PropTypes.string,
    trackName: PropTypes.string,
    colorElements: PropTypes.string,
  }).isRequired
}


/*
imagem do album
nome do artista
nome da musica
preview da Musica


*/