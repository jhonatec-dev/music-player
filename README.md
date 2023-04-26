# music-player --> Em Desenvolvimento <--
Reprodutor de Música usando React (permite estilização via props)

# Instalação
Para usar esse componente em desenvolvimento, basta baixar a pasta MusicPlayer e adicionar ao seu projeto!

E rode os comandos abaixo para instalar os pacotes MUI:

<code>npm install @mui/material @emotion/react @emotion/styled </code>

<code>npm install @mui/icons-material</code>

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
      colorElements: 'red',
    }
</pre>

>O atributo <code>colorElements</code> será a cor de destaque dos elementos renderizados


