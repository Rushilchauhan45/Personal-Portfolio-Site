import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@/components/ui/theme-provider'

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
    <App />
  </ThemeProvider>
);
