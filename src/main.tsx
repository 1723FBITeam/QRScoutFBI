import { createRoot } from 'react-dom/client';
import { App } from './app.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

const root = createRoot(document.getElementById('app')!);

root.render(<App />);

// Register service worker for PWA
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('New content available. Reload?')) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log('App ready to work offline');
  },
});
