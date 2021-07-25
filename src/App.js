import "./App.scss";
import Navbar from "./Components/Navbar";
import About from "./Components/About";

function App() {
  return (
    <main>
      <Navbar />
      <div className='main'>
        <h1>Moses Kim</h1>
        <h4>Full-Stack Web Developer</h4>
        <div className='social-media'>
          <img src="https://res.cloudinary.com/dm4r202h4/image/upload/v1627079525/github-edited_slkk6y.png" alt=''/>
          <img src="https://res.cloudinary.com/dm4r202h4/image/upload/v1627080269/linkedin-edit_dysthc.png" alt=''/>
          <img src="https://res.cloudinary.com/dm4r202h4/image/upload/v1627080376/twitter-edit_smindl.png" alt=''/>
          <img src="https://res.cloudinary.com/dm4r202h4/image/upload/v1627080514/email-edit_tykjqo.png" alt=''/>
        </div>
      </div>

      <About />
    </main>
  );
}

export default App;
