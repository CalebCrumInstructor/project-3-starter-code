import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import "./edits.css";
import "symbol-observable";
import "rpgui/rpgui.css";

import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard.jsx";
import App from "./App.jsx";
import PlayerSheet from "./pages/PlayerSheet.jsx";
import CampaignSheet from "./pages/CampaignSheet.jsx";
import Player from "./pages/Player.jsx";
import Campaign from "./pages/Campaign.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    error: <Page404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/playersheet",
        element: <PlayerSheet />,
      },
      {
        path: "/campaignsheet",
        element: <CampaignSheet />,
      },
      {
        path: "/player",
        element: <Player />,
      },
      {
        path: "/campaign/:id",
        element: <Campaign />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
