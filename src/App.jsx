import { Component } from 'react';
import MusicPlayer from './MusicPlayer';
import frioUrl from './assets/mcr.mp3';


export default class App extends Component {
  render() {
    const info = {
      cover: 'https://trybetunes.jhonatec.dev/static/media/jhonatecAlbum.dc43dd4adbccaf8bd95f.png',
      audioUrl: frioUrl,
      artistName: 'Jhonatec',
      trackName: 'Frio',
      colorElements: '#03df81',
    }
    return (
      <div style={{width:'500px'}}>
        <h1>Aqui terá um player lindo 🎵🖤</h1>
        <MusicPlayer 
        info={info}
        />
      </div>
    )
  }
}
