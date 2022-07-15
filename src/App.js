import './App.css';
import { PlasmicRootProvider, PlasmicComponent } from '@plasmicapp/loader-react';
import { PLASMIC } from './plasmic-init';

function App() {
  return (
    <div>
      <PlasmicRootProvider loader={PLASMIC}>
        <PlasmicComponent component='/' />
      </PlasmicRootProvider>
    </div>
  );
}

export default App;
