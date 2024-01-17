import AppRoutes from "./routes"
import './index.css'
import { GiphyProvider } from "./context/GiphyProvider"
import { DarkProvider } from "./context/DarkProvider"

export default function App() {
  return (
    <DarkProvider>
      <GiphyProvider>
        <AppRoutes />
      </GiphyProvider>
    </DarkProvider>
  )
}
