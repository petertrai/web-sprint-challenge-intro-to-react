// Write your Character component here
import React from "react"
import App from '../App'

const Character = (props) => {


    return (
        <div className="character-wrapper">
            <div>
                {props.data.name}
            </div>
        </div>
    )

}

//{data.map((char, idx) => (<Character data={char} key={idx}/>) )}

export default Character


// (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 0: {name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', …}
// 1: {name: 'C-3PO', height: '167', mass: '75', hair_color: 'n/a', skin_color: 'gold', …}
// 2: {name: 'R2-D2', height: '96', mass: '32', hair_color: 'n/a', skin_color: 'white, blue', …}
// 3: {name: 'Darth Vader', height: '202', mass: '136', hair_color: 'none', skin_color: 'white', …}
// 4: {name: 'Leia Organa', height: '150', mass: '49', hair_color: 'brown', skin_color: 'light', …}
// 5: {name: 'Owen Lars', height: '178', mass: '120', hair_color: 'brown, grey', skin_color: 'light', …}length: 

