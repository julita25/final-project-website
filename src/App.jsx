import './App.css';
import Home from './components/Home';
import Info from './components/Info';

//styles
import './index.css';
import "rsuite/dist/rsuite.min.css"

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/*<div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
  */}
      <div className={`bg-primary flex justify-center items-start`}>
        <div className="xl:max-w-[1280px] w-full">
          <Home />
        </div>
      </div>
      <div className="bg-primary sm:px-16 px-6 flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Info />
        </div>
      </div>
    </div>
  );
}

export default App;
