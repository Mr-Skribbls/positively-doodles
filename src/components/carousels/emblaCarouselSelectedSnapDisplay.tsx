import { FC } from 'react'

type SelectedSnapDisplayProps = {
  selectedSnap: number
  snapCount: number
}

export const SelectedSnapDisplay: FC<SelectedSnapDisplayProps> = ({ 
  selectedSnap,
  snapCount
}) => {
  return (
    <div className="embla__selected-snap-display">
      {selectedSnap + 1} / {snapCount}
    </div>
  )
}
