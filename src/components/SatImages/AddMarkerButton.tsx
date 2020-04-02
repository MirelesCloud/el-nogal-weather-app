import useAddMarker from './AddMarker'
import React from 'react'
import { MarkerBtn } from '../../Styles'

interface Props {}

const AddMarkerButton: React.FC<Props> = (props) => {
  const {activate, setActivate }: any = useAddMarker(false)

  return <MarkerBtn onClick={() => setActivate(!activate)}>Add Points</MarkerBtn>
}

export default AddMarkerButton