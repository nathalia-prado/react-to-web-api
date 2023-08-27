import { useState, useEffect } from "react"
import * as MODELS from "../../models/Widget"
import { getWidgets } from "../apiClient"

const initialWidgets = [] as MODELS.Widget[]

function App() {
  const [widgets, setWidgets] = useState(initialWidgets)

  useEffect(() => {
    try {
      // eslint-disable-next-line no-inner-declarations
      async function fetchWidgets() {
        const dbWidgets = await getWidgets()
        setWidgets(dbWidgets)
      }
      fetchWidgets()
    } catch(error) {
      console.log(error)
    }
  }, [])
  
  return (
    <div>
      <h1>Widgets for the win!</h1>
      {widgets.map(widget => {
          return (
            <div key={widget.id} className="widget-details">
              <h2>{widget.name}</h2>
              <p><b>Price: </b>{widget.price}</p>
              <p><b>Mfg: </b>{widget.mfg}</p>
              <p><b>In stock: </b>{widget.inStock}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
