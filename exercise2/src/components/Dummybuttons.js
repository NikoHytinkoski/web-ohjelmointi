import React from 'react';

export default function Dummybuttons(props) {
  return <div>
  <button className="itemButtons" onClick={ ()=> props.dummyMe(1, "makkara",1) } >Add makkara</button>
  <button className="itemButtons" onClick={ ()=> props.dummyMe(2, "maito", 1) }>Add maito</button>
  <button className="itemButtons" onClick={ ()=> props.dummyMe(3, "kahvi", 1) }>Add kahvi</button>
  <button className="itemButtons" onClick={ ()=> props.dummyMe(4, "keksi", 1) }>Add keksi</button>
</div>;
}
