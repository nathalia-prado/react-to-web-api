import { useState, useEffect } from "react"
import { Widget } from "../../models/Widget"

const initialWidgets = [] as Widget[]

function App() {
  const [widgets, setWidgets] = useState(initialWidgets)

  useEffect(() => {
    console.log('using the effect')
  }, [])
  
  return (+
    <div>
      <h1>Widgets for the win!</h1>
    </div>
  )
}

export default App
