import HomePage from './pages/Home';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';
function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </PersistGate>
  );
}

export default App;
