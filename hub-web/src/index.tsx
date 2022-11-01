import { createRoot } from 'react-dom/client';
import Router from './router';
import { Provider } from 'react-redux';
import store from './store';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Provider  store={store}>
    <Router />
  </Provider>
);
