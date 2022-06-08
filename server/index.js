import express from "express";
import path from 'path'

const PORT = 3000

const app = express()

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(path.resolve(), 'public')})
})

app.get('/react-popup.js', (req, res) => {
    res.send(`
        !(function() {
            "use strict";
            const scriptReact = document.createElement('script');
            const scriptReactDOM = document.createElement('script');
            const scriptComponentBabel = document.createElement('script');
            const styleForComponet = document.createElement('link');

            scriptReact.setAttribute('crossorigin', '');
            scriptReact.setAttribute('defer', '');
            scriptReact.setAttribute('src', 'https://unpkg.com/react@18/umd/react.development.js');
            scriptReactDOM.setAttribute('crossorigin', '');
            scriptReactDOM.setAttribute('defer', '');
            scriptReactDOM.setAttribute('src', 'https://unpkg.com/react-dom@18/umd/react-dom.development.js');

            scriptComponentBabel.setAttribute('type', 'text/babel');
            scriptComponentBabel.setAttribute('src', 'Popup.js');

            styleForComponet.setAttribute('rel', 'stylesheet');
            styleForComponet.setAttribute('href', 'popup.css');

            document.head.appendChild(scriptReact);
            document.head.appendChild(scriptReactDOM);
            document.body.appendChild(scriptComponentBabel);
            document.head.appendChild(styleForComponet);
        })();
    `)
})

app.listen(PORT, () => console.log(`server start at ${PORT}`)) 