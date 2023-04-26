# music-player --> Em Desenvolvimento <--
Reprodutor de Música usando React (permite estilização via props)

<img src="./src/assets/print.png" alt="print">

## Colaboração ##
- Geovanna Otoni <a href="https://github.com/geovannaotoni">GitHub</a>
- Amanda Lopes <a href="https://github.com/amanda-vlopes">GitHub</a>
- Amanayara <a href="https://github.com/Amanayaradev">GitHub</a>

# Instalação
Para usar esse componente em desenvolvimento, basta baixar a pasta MusicPlayer e adicionar ao seu projeto!

E rode os comandos abaixo para instalar os pacotes MUI:

<code>npm install @mui/material @emotion/react @emotion/styled </code>

<code>npm install @mui/icons-material</code>

<code>npm install postcss-safe-important --save-dev</code>

Feito isso, apenas importe desta maneira no seu arquivo:

<code>import MusicPlayer from './MusicPlayer';</code>

>Não é preciso citar o arquivo index.js dentro da pasta!

# Props
Para correta renderização, passe uma prop <code>info</code> para o componente <code>`<MusicPlayer info={audioInfo} />`</code>

<pre>
const audioInfo = {
      cover: URL_IMG_ALBUM,
      audioUrl: URL_AUDIO_MP3,
      artistName,
      trackName,
      colorElements: HEXCOLOR,
    }

EXEMPLO:

const audioinfo = {
      cover: 'https://trybetunes.jhonatec.dev/static/media/jhonatecAlbum.dc43dd4adbccaf8bd95f.png',
      audioUrl: 'https://trybetunes.jhonatec.dev/static/media/Frio.496795137f524a5ce8dc.mp3',
      artistName: 'Jhonatec',
      trackName: 'Frio',
      colorElements: '#03df81',
    }

</pre>

>O atributo <code>colorElements</code> será a cor de destaque dos elementos renderizados

>Envie o <code>colorElements</code> como uma string contendo a cor em HEX com 6 dígitos <code>"#1d1d1d"</code> por exemplo

>As classes do MusicPlayer estão acessíveis para edição

