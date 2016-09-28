import React from 'react'
import R from 'ramda'
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'

export default ({data, color, units}) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {Math.round(R.mean(data))} {units}
      </div>
    </div>
  )
}