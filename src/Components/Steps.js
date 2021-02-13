import React from 'react';
import axios from 'axios';
import {
    XYPlot,
    FlexibleXYPlot,
    FlexibleWidthXYPlot,
    FlexibleHeightXYPlot,
    VerticalBarSeries,
    LineSeries
  } from 'react-vis';

// const data = [
//     {x: 1, y: 8},
//     {x: 2, y: 5},
//     {x: 3, y: 4},
//     {x: 4, y: 9},
//     {x: 5, y: 2},
//     {x: 6, y: 3},
//     {x: 7, y: 2},
//     {x: 8, y: 9},
//   ];



const Steps = (props) => {

    axios.get('http://localhost:5000/steps', 
          {withCredentials: true })
          .then((response) => {
            const data = response.data
            props.setStepData(data)
          })
        .catch((error)=>{
          console.log("ERROR! ", error)
        });

     
      return (
        <div className="step-plot">
            <FlexibleWidthXYPlot height={300}>
                <VerticalBarSeries data={props.stepData} />
            </FlexibleWidthXYPlot>
        </div>
      );
  };

export default Steps;