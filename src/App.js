import './App.css';
import { PlasmicRootProvider, PlasmicComponent, PlasmicCanvasHost } from '@plasmicapp/loader-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PLASMIC } from './plasmic-init';

function App() {
  return (
    <div>
      <PlasmicRootProvider loader={PLASMIC}>
        <PlasmicComponent component='/' />
      </PlasmicRootProvider>

      <Router>
        {/* Your other routes... */}
        <Route path="/plasmic-host" render={() => <PlasmicCanvasHost />} />
    </Router>
    </div>
  );
}

export default App;
