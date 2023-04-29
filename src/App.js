import TripForm from "./components/TripForm";
import TripDetails from "./components/TripDetails";
import { useState } from "react";
function App() {
  const [show, setShow] = useState(false);
  const [tripData, setTripData] = useState();

  return (
    <div>
      <TripForm setShow={setShow} setTripData={setTripData} />
      {show && <TripDetails key={tripData} tripData={tripData} />}
    </div>
  );
}

export default App;
