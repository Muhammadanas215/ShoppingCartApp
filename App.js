import React from 'react';
import Stacks from './src/navigation/tab';
import {Provider} from 'react-redux';
import {ActionSheetIOS} from 'react-native';
import {createStore} from 'redux';
import reducer from './src/configs/Reducer';


const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <Stacks />
    </Provider>
  );
};

export default App;
