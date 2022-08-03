import React from 'react'
import Likert from '../../components/charts/likert'
import HorizontalBar from '../../components/charts/horizontalBar'
import YesOrNo from '../../components/charts/yesorno'
const Graph = () => {
  return (
    <div>
      <Likert />
      {/*<HorizontalBar />*/}
      <YesOrNo />
    </div>
  )
}

export default Graph
