import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./components/router/router";
import "./index.css";
import { Provider } from "./components/ui/provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider defaultTheme="light">
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
