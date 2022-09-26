import {
    BrowserRouter as Router,
    Route,
    Switch
    ,
    Link
  } from "react-router-dom";

    import {Home} from "../src/pages/Home";
  

export default function Router() {
    <Routes>
      <Switch>
      <Route path="/" element={<Home />} />
      
      </Switch>
    </Routes>
}