import AppRoutes from "./routes"
import './index.css'
import { GiphyProvider } from "./context/GiphyProvider"

export default function App() {
  return (
    <GiphyProvider>
      <AppRoutes />
    </GiphyProvider>
  )
}
