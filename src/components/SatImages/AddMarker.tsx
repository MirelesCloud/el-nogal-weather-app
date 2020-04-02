import { useContext, useEffect, useState, useCallback } from 'react'
import { useLeaflet, Marker } from 'react-leaflet'
import L, { LeafletMouseEvent } from 'leaflet'
import { LayerContext } from './LayerContext'
import React from 'react'

function useAddMarker(selected: boolean) {
  
  const { map } = useLeaflet()
  const { setPoint } = useContext(LayerContext)
  const [activate, setActivate] = useState(selected)

  const markerEvent = useCallback((e: LeafletMouseEvent) => {
    e.originalEvent.preventDefault()
    setPoint(<Marker position={e.latlng} />)
    e.originalEvent.stopPropagation();
  }, [setPoint])

  useEffect(() => {
    map?.doubleClickZoom.disable()
    if (activate === true) {
      map?.on('dblclick', markerEvent)
    }
    return () => {
      map?.off('dblclick', markerEvent)
    }
  }, [map, activate, markerEvent])

}

export default useAddMarker