


import Header from './components/Header';
import Footer from './components/Footer';
import UserCard from './components/UserCard';

function App() {
  return (
   <div>
    <Header />
    <UserCard name="Saood Masood" age={17} address="Ayun, Chitral" />
    <Footer />
   </div>
  );
}

export default App;


