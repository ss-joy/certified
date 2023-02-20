import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function App() {
  const a = useLocation();
  useEffect(() => {
    console.log(a);
  }, []);
  return <div>App</div>;
}
