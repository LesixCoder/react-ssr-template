import { hydrateRoot } from 'react-dom/client';
import Index from '../pages/index';

// 将事件处理加到ID为root的dom下
hydrateRoot(document.getElementById('root') as Document | Element, <Index />);
