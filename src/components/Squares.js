/*
SQUARES Instructions

Watch this short video:
https://tk-assets.lambdaschool.com/0aebd463-7c5e-4d0b-ad22-4da8f4b54e92_squares.gif

This component keeps track of a list of "square ids" on the one hand,
and the currently active id on the other. That's two slices of state!
One is used as the source of truth to render the squares, and the other
so that the component knows which square is currently active.

Only one square (or none) can be active at any given point.

Find comments below to help you along.
*/

import React, { useState } from 'react';

// Use this variable ONLY to initialize a slice of state!
const listOfSquareIds = ['sqA', 'sqB', 'sqC', 'sqD'];
console.log(listOfSquareIds)

export default function Squares() {
        // Use the state hook twice, as we need two slices of state: 'squares' and 'activeSquare'. 
        // 'squares' holds the _array_ of square ids. 
        // 'activeSquare' keeps track of the currently active square. 
        // On page load there's no active square, so the value of 'activeSquare' should be null.
  const [squares, setSquares] = useState(listOfSquareIds); // array. id are each item
  const [activeSquare, setActiveSquare] = useState(null);  // active squares

  const getClassName = id => {
    // This is NOT a click handler but a helper, used inside the JSX (see below/ in the return)
    // It should return a string containing the class name of 'active', if the id passed as this function's argument (below) matches the active square in state, if not, make it be an empty string .
    // Right-click and "inspect element" on the square to see its effect.

   // 'id' is the name/value of each item in the array. activeSquare is the value/square name u clicked on. it's already changing the class name below, just make it say 'active' or '' here
   return id === activeSquare ? 'active' : ''
  };

  const markActive = name => {
    // This is a helper used inside an _inlined_ click handler (see below in the jsx/return).
    // Set the id/name argument to become the active id/name in state
    // (unless it already is, in which case we should reset
    // the currently active square id/name back to initial state).

    // i changed id arg to 'name' bc i was getting confused...id in this whole Square example means each name/item in the array

    console.log(name) // 1.when i click the square the name appears in console
    
    // 2. button turns green if i write setActiveSquare(name) but now i need to make it go back. 

    // 3. if name is equal to activeSquare then make it's value null. Do the work in a variable and pass it into setActiveSquare to update activeSquare state. Here, the variable is saying, if 'name' arg is set to/equal to the value in activeSquare (which has a name), then make 'newActiveSquare' change to 'null', if they are not the same/don't have same names/values, then make 'newActiveSquare' be equal to 'name'

    const newActiveSquare = name === activeSquare ? null : name
    setActiveSquare(newActiveSquare) 

  };

  return (
    <div className='widget-squares container'>
      <h2>Squares</h2>
      <div className='squares'>
        {
          // Nasty bug! We should map over a slice of state, instead of 'listOfSquareIds'.
          // We might say: "it works, though!" But if the list of squares is not state,
          // we could never add squares, change squares or remove squares in the future. Fix!
          squares.map(id =>
            <div
              id={id}
              key={id}
              className={`square ${getClassName(id)}`}
              onClick={() => markActive(id)}
            >
            </div>
          )
        }
      </div>
    </div>
  );
}