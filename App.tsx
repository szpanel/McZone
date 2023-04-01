import React from 'react';
import ProviderManager from './src/providers/ProviderManager';
import MainStack from './src/navigation/MainStack';

function App(): JSX.Element {
  return (
    <ProviderManager>
      <MainStack />
    </ProviderManager>
  );
}

export default App;
