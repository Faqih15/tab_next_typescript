'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Demo from "./demo";


export default function App() {
  const queryClient = new QueryClient();
  console.log("app")
  return (
    <div>
      <span className="text-red-500 bg-blue-300 font-semibold text-xl">test page demo app todo application</span>
      <QueryClientProvider client={queryClient}>
        <Demo />
      </QueryClientProvider>
    </div>
  )
}

// export default App;