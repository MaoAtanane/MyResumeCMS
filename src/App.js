import React from 'react';
import Main from './pages/Main'
import ga from './config/googleAnalytics'

function App() {
  ga()
  return (
    <div>
      <Main/>
    </div>
  );
}

export default App;
