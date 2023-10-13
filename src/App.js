import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import List from "./components/List";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import {motion} from 'framer-motion'

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
          <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
        >
      <Hero />
        </motion.div>
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
        >
      <Logos/>
      </motion.div>
      <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
        >
      <List/>
      </motion.div>

      <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
        >
            <Blogs/>
</motion.div>

    <Footer/>
    </div>
  );
}

export default App;
