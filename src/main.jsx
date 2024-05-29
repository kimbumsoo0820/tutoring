import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SkeletonTheme } from 'react-loading-skeleton';
import { QueryClient, QueryClientProvider } from 'react-query';


import store  from "./redux/store.js"
import { Provider } from 'react-redux'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SkeletonTheme baseColor="#d1d1d1" highlightColor="#444">
          <App />
        </SkeletonTheme>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
