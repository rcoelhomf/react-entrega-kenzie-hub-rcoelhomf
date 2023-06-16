import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { RoutesMain } from './Routes/RoutesMain'
import { GlobalStyle } from './Styles/GlobalStyles'
import { Reset } from './Styles/Reset'

const App = () => {

  return (
    <>
      <Reset />
      <GlobalStyle />
      <RoutesMain />
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </>
  )
}

export default App
