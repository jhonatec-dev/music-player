import { Component } from 'react'
import MusicPlayer from './MusicPlayer'


export default class App extends Component {
  render() {
    const info = {
      cover: 'https://trybetunes.jhonatec.dev/static/media/jhonatecAlbum.dc43dd4adbccaf8bd95f.png',
      audioUrl: 'https://trybetunes.jhonatec.dev/static/media/Frio.496795137f524a5ce8dc.mp3',
      artistName: 'Jhonatec',
      trackName: 'Frio',
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


/*
imagem do album
nome do artista
nome da musica
preview da Musica


*/