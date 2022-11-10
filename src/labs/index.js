import Nav from "../nav.js";
import Assignment6 from "./a6/index.js";
import Assignment7 from "./a7/index.js";
import {Routes, Route} from "react-router";

function Labs() {
    return (
        <div>
            <Nav/>
            <Routes>
                <Route path = "a6"
                       element={<Assignment6/>}/>
                <Route index
                       element={<Assignment7/>}/>
            </Routes>
        </div>
    );
}

export default Labs;