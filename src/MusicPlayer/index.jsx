// eslint-disable-next-line no-unused-vars
import { Slider, duration } from '@mui/material';
import PropTypes from "prop-types";
import React, { Component } from 'react';

export default class MusicPlayer extends Component {
  state={
    audio: new Audio(''),
    current: '',
    lasting: '',
    duration: 100,
    volume: 0.2,
  }
  componentDidMount(){
    //receber preview via props e atualizar o elemento de audio no estado
    const{info:{audioUrl}} = this.props;
    const {volume} = this.state;
    const audio = new Audio(audioUrl);
    audio.preload = 'metadata';
    audio.volume = volume;
    const current = 0;
    const lasting = +audio.duration || 0;
    const duration = +audio.duration || 0;
    console.log(audioUrl, audio, duration);
    this.setState({audio, current, lasting, duration});
  }

  render() {
    const{info} = this.props;
    const {cover, artistName, trackName} = info;
    return (
      <div style={{display: 'flex', width: '100%'}}>
        <div className='music-player-cover'>
          <img src={cover} alt="" style={{width: '80px'}}/>
          <p>{artistName}</p>
        </div>
        <div className='music-player-info' style={{width: '100%'}}>
        <h3>{trackName}</h3>
        <Slider min={0} max={duration} />
        <div className='music-player-time' style={{display: 'flex', justifyContent: 'space-between'}}>
          <p>Current</p>
          <p>Lasting</p>
        </div>
        </div>
      </div>
    )
  }
}

MusicPlayer.propTypes = {
  info : PropTypes.shape({
    cover: PropTypes.string,
    audioUrl: PropTypes.string,
  }).isRequired,
}


/*
imagem do album
nome do artista
nome da musica
preview da Musica


*/