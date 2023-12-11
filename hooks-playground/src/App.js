import './App.css';
import BigDataComponent from './components/BigDataComponent.jsx';
import Counter from './components/Counter.jsx';
import DataGetter from './components/DataGetter.jsx';
import FormComponent from './components/FormComponent.jsx';
import MemoExample from './components/MemoExample.jsx';
import VerySlowComponent from './components/VerySlowComponent.jsx';
import { ThemeProvider, withTheme } from './context/useThemeContext.js';

function App() {
  return (
    <div className="App">
      <FormComponent />
      {/* <MemoExample /> */}
      {/* <ThemeProvider>
        <VerySlowComponent />
        <Counter />
        <DataGetter />
        <BigDataComponent />
      </ThemeProvider> */}
    </div>
  );
}

export default withTheme(App);
