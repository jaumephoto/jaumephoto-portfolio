import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { StreetPhotography } from "./pages/StreetPhotography";
import { Concerts } from "./pages/Concerts";
import { WeddingsEvents } from "./pages/WeddingsEvents";
import { PortraitProject } from "./pages/PortraitProject";
import { About } from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: StreetPhotography },
      { path: "concerts", Component: Concerts },
      { path: "weddings-events", Component: WeddingsEvents },
      { path: "portrait-project", Component: PortraitProject },
      { path: "about", Component: About },
    ],
  },
]);
