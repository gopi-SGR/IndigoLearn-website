import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import IndigoLearn from './components/IndigoLearn'
import ChooseUs from './components/ChooseUs'
import LearnWithACCA from './components/LearnWithACCA'
import Placement from './components/Placement'
import StartJourneyWithUs from './components/StartJourneyWithUs'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<IndigoLearn />} />
      <Route path="/why-choose-us" element={<ChooseUs />} />
      <Route path="/learning-with-ACCA" element={<LearnWithACCA />} />
      <Route path="/placement" element={<Placement />} />
      <Route path="/journey" element={<StartJourneyWithUs />} />
    </Routes>
  </Router>
)

export default App
