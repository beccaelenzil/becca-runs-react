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


const hard_coded_data = [
    {x: 1, y: 8},
    {x: 2, y: 5},
    {x: 3, y: 4},
    {x: 4, y: 9},
    {x: 5, y: 2},
    {x: 6, y: 3},
    {x: 7, y: 2},
    {x: 8, y: 9},
  ];

//console.log(hard_coded_data)


const convertToDate = (dateString) => {
  const dateObject = Date(dateString)
  return dateObject
}



const calculateMovingAverage = (data, n) => {


  const stepArray = []

  for (const dictionary of data){
    stepArray.push(dictionary.y)
  }

  const movingAverage = []
  // for (let i = 0; i<n; i++){
  //   movingAverage.push({'x': i, 'y': 10000})
  // }

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
                <YAxis/>
                <VerticalBarSeries data={data}/>
                <LineSeries 
                  data={movingAverageData} 
                  style={{ fill: 'none', strokeWidth: 2}}
                  color = 'black'
                />
                  <ChartLabel
                    text="Y Axis"
                    className="alt-y-label"
                    includeMargin={false}
                    xPercent={0.06}
                    yPercent={0.06}
                    style={{
                      transform: 'rotate(-90)',
                      textAnchor: 'end'
                    }}
                    />
            </FlexibleWidthXYPlot>
        </div>
      );
  };

Steps.propTypes = {
    data: PropTypes.array
};

export default Steps;