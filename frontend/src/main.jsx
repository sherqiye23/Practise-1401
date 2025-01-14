import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import BasketProvider from './context/BasketContext.jsx'

createRoot(document.getElementById('root')).render(
  <BasketProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </BasketProvider>
)
