import React from 'react'
import EditForm from '../../Forms/EditForm'

const ShowEdit = (props) => {
  return (
    <div className="popup">
      <div className="popup\_inner">
            <EditForm  id={props.id}/>
      </div>
    </div>
  );
};

export default ShowEdit
