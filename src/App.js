import Header from './components/Header';
import Footer from './components/Footer';
import { FeedbackProvider } from './utils/FeedbackContaxt';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import { useContext } from 'react';
const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }
          ></Route>
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </FeedbackProvider>
  );
};
export default App;
