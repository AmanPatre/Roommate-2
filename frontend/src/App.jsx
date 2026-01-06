import Approute from "./Approutes/Approute"
import { UserProvider } from "./context/userContext"
import { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";


function App() {


  return (
    <>
      <UserProvider>
        <ErrorBoundary>
          <Approute />
        </ErrorBoundary>
      </UserProvider>



    </>
  )
}

export default App
