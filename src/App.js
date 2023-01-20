import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Menu } from "./components/Menu";
import { CreateRecordPage } from "./pages/CreateRecord";
import { RecordListPage } from "./pages/RecordListPage";
import { SingleRecordPage } from "./pages/SingleRecord";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<RecordListPage />}></Route>
          <Route path="/create" element={<CreateRecordPage />}></Route>
          <Route path="/records/view/:id" element={<SingleRecordPage />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
