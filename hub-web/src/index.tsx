import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { Dashboard } from './pages';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Provider  store={store}>
    <Dashboard />
  </Provider>
);
