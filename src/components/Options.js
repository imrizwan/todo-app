import React from 'react';
import Option from './Option';
export default (props) => (
      <div>
        <div className="widget-header">
          <h3 className="widget-header--extra">Your Options</h3>
          <button 
          className="button button--link"
          onClick={props.handleDeleteOptions}
          >
          Remove All
          </button>  
        </div>
        
        {props.options.length === 0 && <p className="widget-message">Add options to get started</p>}
        {props.options.map((option, index)=>{
          return (
            <Option 
            key={index} 
            optionText={option} 
            count={index + 1}
            handleAddOption={props.handleAddOption} 
            handleDeleteOption = {props.handleDeleteOption}
            />
          );
        })}
      </div>
    )