import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SkeletonTheme } from 'react-loading-skeleton';


import store  from "./redux/store.js"
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <SkeletonTheme baseColor="#d1d1d1" highlightColor="#444">
      <App />
      </SkeletonTheme>
    </Provider>
  </React.StrictMode>,
)
