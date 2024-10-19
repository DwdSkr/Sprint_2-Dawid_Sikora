import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
const element = <App></App>;
createRoot(document.getElementById('root')).render(element);
