import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { promiseTrackerHoc} from 'react-promise-tracker';

const InnerLoadingSpinerComponent = (props) => {
  return (
    <div>      
    {
      (props.trackedPromiseInProgress === true) ?
        <h3>Hey I'm a spinner loader wannabe !!!</h3>
      :
        null       
    }
  </div>  
  )
};

InnerLoadingSpinerComponent.propTypes = {
  trackedPromiseInProgress : PropTypes.bool.isRequired,
}

export const LoadingSpinnerComponent = promiseTrackerHoc(InnerLoadingSpinerComponent);

