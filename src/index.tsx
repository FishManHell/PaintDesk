import { createRoot } from "react-dom/client";
import { App } from "app/App";
import { ThemeProvider } from "app/providers/ThemeProvider";
import "./app/styles/index.scss";
import { MobXProvider } from "app/providers/MobXProvider";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <ThemeProvider>
    <MobXProvider>
      <App />
    </MobXProvider>
  </ThemeProvider>,
);
