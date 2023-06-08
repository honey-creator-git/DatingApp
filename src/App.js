import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

import Ragistration from "./Loginscreens/Ragistration";
import Forgotpassword from "./Loginscreens/Forgotpassword";
import Otpmobile from "./Loginscreens/Otpmobile";
import Otpemail from "./Loginscreens/Otpemail";
import Completed from "./Loginscreens/Completed";
import Idtypes from "./Verifyid/Idtypes";
import Review from "./Verifyid/Reviews";
import Reviews from "./Verifyid/Reviews";
import Salect from "./Verifyid/Salect";
import Emails from "./Verifyid/Emails";
import Options from "./Verifyid/Options";
import Reviewss from "./Verifyid/Reviewss";
import Coupancode from "./Verifyid/Coupancode";
import Entercode from "./Verifyid/Entercode";
import Via from "./Verifyid/Via";
import Idfront from "./Verifyid/Idfront";
import Idback from "./Verifyid/Idback";
import Idverify from "./Verifyid/Idverify";
import Face from "./Verifyid/Face";
import Verified from "./Verifyid/Verified";
import Newmaxico from "./Verifyid/Newmaxico";
import Idverified from "./Verifyid/Idverified";
import Background from "./Verifyid/Background";
import Process from "./Verifyid/Process";
import Communityprofile from "./pages/Communityprofile";
import Catogaries from "./pages/Catogaries";
import Prefrence from "./pages/Prefrence";
import Searcgresult from "./pages/Searcgresult";
import Qrcode from "./pages/Qrcode";
import Sugar from "./pages/Sugar";
import Aboutme from "./pages/Aboutme";
import Gallary from "./pages/Gallary";
import History from "./pages/History";
import Rates from "./pages/Rates";
import Calender from "./pages/Calender";
import Findme from "./pages/Findme";
import Contactme from "./pages/Contactme";
import Datestart from "./pages/Datestart";
import Duration from "./pages/Duration";
import Futuretime from "./pages/Futuretime";
import Updatedtime from "./pages/Updatedtime";
import Sugar2 from "./pages/Sugar2";
import Accects from "./pages/Accects";
import Esign from "./pages/Esign";
import Importdate from "./pages/Importdate";
import Payment from "./pages/Payment";
import Paymentmethod from "./pages/Paymentmethod";
import Paymentconfirm from "./pages/Paymentconfirm";
import Ratings from "./pages/Ratings";
import Communitysreach from "./pages/Communitysreach";
import Emergencycontact from "./Dategaurdpages/Emergencycontact";
import Setcode from "./Dategaurdpages/Setcode";
import Decoycode from "./Dategaurdpages/Decoycode";
import Setalarm from "./Dategaurdpages/Setalarm";
import Datetimer from "./Dategaurdpages/Datetimer";
import Countdown from "./Dategaurdpages/Countdown";
import Timer2 from "./Dategaurdpages/Timer2";
import Alarmstart from "./Dategaurdpages/Alarmstart";
import Alarmstart2 from "./Dategaurdpages/Alarmstart2";
import Endcode from "./Dategaurdpages/Endcode";
import Sugarontact from "./Dategaurdpages/Sugarontact";
import Setting from "./pages/Setting";
import Cookies from "./pages/Cookies";
import Privacypolicy from "./pages/Privacypolicy";
import Help from "./pages/Help";
import Acceptterms from "./pages/Acceptterms";
import Changepassword from "./pages/Changepassword";
import Camera from "./Extrapages/Camera";
import WebCamera from "./Components/WebCamera";
import Stepbar from "./Components/Stepbar";
import Catogaries2 from "./pages/Catogaries2";
import Prefrence2 from "./pages/Prefrence2";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <div className="App mt-33">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/Signup" element={<Ragistration />} />
        <Route path="/Forgot" element={<Forgotpassword />} />
        <Route path="/Forgotpassword" element={<Forgotpassword />} />
        <Route path="/Mobile" element={<Otpmobile />} />
        <Route path="/Email" element={<Otpemail />} />
        <Route path="/Completed" element={<Completed />} />
        <Route path="/Idtypes" element={<Idtypes />} />
        <Route path="/Review" element={<Reviewss />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/Salect" element={<Salect />} />
        <Route path="/Emails" element={<Emails />} />
        <Route path="/Options" element={<Options />} />
        <Route path="/Coupancode" element={<Coupancode />} />
        <Route path="/Entercode" element={<Entercode />} />
        <Route path="/Via" element={<Via />} />
        <Route path="/Idfront" element={<Idfront />} />
        <Route path="/Idback" element={<Idback />} />
        <Route path="/Idverify" element={<Idverify />} />
        <Route path="/Face" element={<Face />} />
        <Route path="/Verified" element={<Verified />} />
        <Route path="/Newmaxico" element={<Newmaxico />} />
        <Route path="/Idverified" element={<Idverified />} />
        <Route path="/Background" element={<Background />} />
        <Route path="/Process" element={<Process />} />
        <Route path="/Communityprofile" element={<Communityprofile />} />
        <Route path="/Catogaries" element={<Catogaries />} />
        <Route path="/Catogaries2" element={<Catogaries2 />} />
        <Route path="/Prefrence" element={<Prefrence />} />
        <Route path="/Prefrence2" element={<Prefrence2 />} />
        <Route path="/Appointment" element={<Appointment />} />
        <Route path="/Searcgresult" element={<Searcgresult />} />
        <Route path="/Searcgresults" element={<Searcgresult />} />
        <Route path="/Sugar" element={<Sugar />} />
        <Route path="/Aboutme" element={<Aboutme />} />
        <Route path="/Gallary" element={<Gallary />} />
        <Route path="/History" element={<History />} />
        <Route path="/Rates" element={<Rates />} />
        <Route path="/Calender" element={<Calender />} />
        <Route path="/Findme" element={<Findme />} />
        <Route path="/Contact" element={<Contactme />} />
        <Route path="/Sugars" element={<Sugar />} />
        <Route path="/Datestart" element={<Datestart />} />
        <Route path="/Duration" element={<Duration />} />
        <Route path="/Futuretime" element={<Futuretime />} />
        <Route path="/Updatedtime" element={<Updatedtime />} />
        <Route path="/Sugar2" element={<Sugar2 />} />
        <Route path="/Accects" element={<Accects />} />
        <Route path="/Esign" element={<Esign />} />
        <Route path="/Importdate" element={<Importdate />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Paymentmethod" element={<Paymentmethod />} />
        <Route path="/Paymentconfirm" element={<Paymentconfirm />} />
        <Route path="/Ratings" element={<Ratings />} />
        <Route path="/Communitysreach" element={<Communitysreach />} />
        <Route path="/Emergencycontact" element={<Emergencycontact />} />
        <Route path="/Setcode" element={<Setcode />} />
        <Route path="/Decoycode" element={<Decoycode />} />
        <Route path="/Setalarm" element={<Setalarm />} />
        <Route path="/Datetimer" element={<Datetimer />} />
        <Route path="/Countdown" element={<Countdown />} />
        <Route path="/Timer2" element={<Timer2 />} />
        <Route path="/Alarmstart" element={<Alarmstart />} />
        <Route path="/Alarmstart2" element={<Alarmstart2 />} />
        <Route path="/Endcode" element={<Endcode />} />
        <Route path="/Sugarontact" element={<Sugarontact />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Cookies" element={<Cookies />} />
        <Route path="/Privacypolicy" element={<Privacypolicy />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Acceptterms" element={<Acceptterms />} />
        <Route path="/Changepassword" element={<Changepassword />} />
        <Route path="/Camera" element={<Camera />} />
      </Routes>
    </div>
  );
}

export default App;
