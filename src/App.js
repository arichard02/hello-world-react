import './App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import Card from './Card.js';

function App() {
  return (
    <div className="App">
      <Header name="Adwaina" />
      <main className="Gallery">

        <Card img_url="https://picsum.photos/id/18/300/200" caption="Open Field" />
        <Card img_url="https://picsum.photos/id/19/300/200" caption="Tree" /> 
        <Card img_url="https://picsum.photos/id/200/300/200" caption="Cow" /> 
        <Card img_url="https://picsum.photos/id/201/300/200" caption="Glasses" />
        <Card img_url="https://picsum.photos/id/202/300/200" caption="Road" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
