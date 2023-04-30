import TripForm from "./components/TripForm";
import TripDetails from "./components/TripDetails";
import { useState } from "react";
import RecentSearch from "./components/recentSearch/RecentSearch";
import Tweets from "./components/Tweets/Tweets";
function App() {
  const [show, setShow] = useState(false);
  const [tripData, setTripData] = useState();

  return (
    <div>
      <TripForm setShow={setShow} setTripData={setTripData} />
      {show && (
        <>
          <TripDetails key={tripData} tripData={tripData} />
          <Tweets tripData={tripData} />{" "}
        </>
      )}
      <div>
        <RecentSearch tripData={tripData} />
      </div>
    </div>
  );
}

export default App;
