import './App.css';
import Counter from './components/Counter.jsx';
import DataGetter from './components/DataGetter.jsx';
import { ThemeProvider, withTheme } from './context/useThemeContext.js';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
      <Counter />    
      <DataGetter/>  
      </ThemeProvider>
    </div>
  );
}

export default withTheme(App);
