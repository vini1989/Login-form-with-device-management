import * as React from "react";
import { FunctionComponentElement } from "react";
import { IntlProvider } from "react-intl";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DeviceList from "../device-list/device-list";
import Home from "../home/home";
import Login from "../login/login";

function App(): FunctionComponentElement<undefined> {
  const locale = "en";

  return (
    <IntlProvider locale={locale}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/devices" element={<DeviceList />} />
        </Routes>
      </Router>
    </IntlProvider>
  );
}

export default App;
