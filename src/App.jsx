import React from "react"; // Import React for component creation
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated imports for React Router
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Layout from "./layout";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import ProtectedRoute from "./ProtectedRoute";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Router> */}
      <>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<ProtectedRoute />}>
              <Route path="/page2" element={<Page2 />} />
            </Route>
            <Route path="/page2/:id" element={<Page2 />} />
            <Route path="/" element={<Page1 />} />
          </Route>
        </Routes>
      </>
      {/* </Router> */}
    </QueryClientProvider>
  );
}

export default App;
