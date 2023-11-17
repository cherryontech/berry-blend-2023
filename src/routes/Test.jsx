import React from 'react';
import { recommendationData } from '../static/recommendationData';

import '../Test.css';

export const Test = () => {
  const listedItems = recommendationData.map((item) => (
    <>
      <p>{item.activity}</p>
    </>
  ));

  return (
    <div>
      <h3 className="test3">Test page to be deleted when done</h3>
      <div>
        Todo <br />
        1. add in the recommendation list
        https://docs.google.com/spreadsheets/d/1xSlvI2o7M6Wiu68baxiljhXbQLGW-AChMB_3qTaqhIQ/edit#gid=0 <br />
        (note this can be broken up into 2 PRs)
        <br />
        2. update the test page with the Error page info
      </div>
      <div>{listedItems}</div>
    </div>
  );
};
