import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
    XYPlot,
    FlexibleWidthXYPlot,
    VerticalBarSeries,
    LineSeries,
    YAxis,
    ChartLabel
  } from 'react-vis';
import { mean } from 'mathjs'

// const convertToDate = (dateString) => {
//   const dateObject = Date(dateString)
//   return dateObject
// }

const calculateMovingAverage = (data, n) => {

  const stepArray = []

  for (const dictionary of data){
    stepArray.push(dictionary.y)
  }

  const movingAverage = []
  let j
  for (j = n; j<stepArray.length; j++){
    movingAverage.push({'x': j, 'y': mean(stepArray.slice(j-n,j))})
  }
  return movingAverage
}

const Steps = (props) => {
      const data = []
      let count = 0

      for (const dictionary of props.stepData){
        const dict = {
          'x': count,//convertToDate(dictionary['x']), 
          'y': dictionary['y']
        }
        data.push(dict)
        count += 1
      }

      const movingAverageData = calculateMovingAverage(props.stepData, props.window)

      console.log("moving Average: ",movingAverageData)

      return (
        <div className="step-plot">
            <FlexibleWidthXYPlot height={500} >
                {/* <YAxis/> */}
                <VerticalBarSeries data={data}/>
                <LineSeries 
                  data={movingAverageData} 
                  style={{ fill: 'none', strokeWidth: 2}}
                  color = 'black'
                />
                  {/* <ChartLabel
                    text="Y Axis"
                    className="alt-y-label"
                    includeMargin={false}
                    xPercent={0.06}
                    yPercent={0.06}
                    style={{
                      transform: 'rotate(-90)',
                      textAnchor: 'end'
                    }}
                    /> */}
            </FlexibleWidthXYPlot>
        </div>
      );
  };

Steps.propTypes = {
    data: PropTypes.array
};

export default Steps;