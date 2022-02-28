import React from 'react';

export default function Buttons(props) {
  return <div>
          <button className="itemButtons" onClick={ ()=> props.clickMe(1) } >Add margariini</button>
          <button className="itemButtons" onClick={ ()=> props.clickMe(2) }>Add leipä</button>
          <button className="itemButtons" onClick={ ()=> props.clickMe(3) }>Add meetvursti</button>
          <button className="itemButtons" onClick={ ()=> props.clickMe(4) }>Add juusto</button>
  </div>;
}
