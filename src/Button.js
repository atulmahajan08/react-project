import React from 'react'

//! 1 way to  use es6 arrow function
// If we use curly braces then we have to use return keyword


// const Button = () => {
//   return (
//     <div>Button</div>
//   )
// }

//! 2 way to use es6 arrow function
const Button = ({title ="Nothing has been passed"}) => (
    // while passing default value it has to been in curly braces
    <div>
        <button className="button">{title}</button>
    </div>
)

export default Button