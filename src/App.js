import logo from './logo.svg';
import Address from './components/profile/Address.js';
import ProfilePhoto from './components/profile/ProfilePhoto.js';
import FullName from './components/profile/FullName.js';
import  './style.css';
function App() {
  return (
    <div className="App">
     < Address />
     < ProfilePhoto />
     < FullName />
    </div>
  );
}

export default App;
