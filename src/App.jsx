import { RouterProvider } from 'react-router-dom'
import router from './router/routes'
import { Suspense } from 'react'
import MainLoading from './components/loading/MainLoading'

function App() {

  return (
    <Suspense fallback={<MainLoading/>}>
      <RouterProvider router={router}/>
    </Suspense>
  )
}

export default App
