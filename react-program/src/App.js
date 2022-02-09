

import Footers from './components/footers.js';
import Headers from './components/headers.js';
import RouterIndex from './router/routerIndex.js'
function App() {
    return (
        <div className="App">
            <Headers />

                <RouterIndex />

            <Footers />
        </div>
    );
}

export default App;
