import React, { useState } from 'react'
import { point } from 'leaflet'

const LayerContext: any = React.createContext({})

const LayerContextProvider = ({ children }: any) => {
  const [point, setPoint] =useState([0, 0])
  const defaultValue = {
    point,
    setPoint
  }

  return (
    <LayerContext.Provider value={defaultValue}>
      {children}
    </LayerContext.Provider>
  )
}

export { LayerContext, LayerContextProvider }