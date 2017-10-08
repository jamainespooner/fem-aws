import path from 'path';
import Express from 'express';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../../webpack.redux-ssr';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

import counterApp from '../common/reducers/'
import App from '../common/components/App'

const app = Express()
const port = 3000

const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, {
  noInfo: false, publicPath: webpackConfig.output.publicPath,
}))

const renderFullPage = (html, preloadedState) => `
  <!doctype html>
  <html>
    <head>
      <title>Redux Universal Example</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="/static/bundle.js"></script>
    </body>
  </html>
`

const handleRender = (req, res) => {
  const store = createStore(counterApp)

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  const preloadedState = store.getState()

  res.send(renderFullPage(html, preloadedState))
}


app.use(handleRender)
// app.get('/', handleRender)

app.listen(port, error => {
  if (error) {
    console.log(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})