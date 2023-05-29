import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="p-2 rounded-lg shadow-lg bg-blue-200">Hello world</div>
    </>
  )
}

export default App
