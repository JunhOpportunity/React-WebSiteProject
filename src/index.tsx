import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </StrictMode>
);
