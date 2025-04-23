import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Careers from './pages/Careers';
import Portal from './pages/Portal';
import CaseStudies from './pages/CaseStudies';
import NotFound from './pages/NotFound';
import '@fontsource/montserrat'; // Optional: import specific weights too


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhyXXoS6YVO1JLxiE5MlrUZ8XVFn5BNjo",
  authDomain: "unixtron-website.firebaseapp.com",
  projectId: "unixtron-website",
  storageBucket: "unixtron-website.firebasestorage.app",
  messagingSenderId: "1083306034462",
  appId: "1:1083306034462:web:b7b5137f3e5dfabd6f350f",
  measurementId: "G-85ZCHP22WT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export Firebase services if needed in other components
export { auth, db };

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;