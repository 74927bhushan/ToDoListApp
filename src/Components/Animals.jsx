import React from 'react'

function Animals() {
    let animals=["cat","dog","tiger","lion"];
    return (
      <div>
        {animals.map((animal) => (
          <h1 key={animal}>{animal}</h1>
        ))}
      </div>
    );
  }

export default Animals