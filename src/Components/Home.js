import React from 'react'

export default function Home(props) {
    const {name, address, cellNumber} = props
    return (
        <div>
            <h1>Sample React application</h1>
            <h1> Name = {name } </h1> <br/>
            <h2>Address = {address } </h2>
            
            <br/>
            <h3>Cell Number = {cellNumber}</h3>
        </div>
    )
}
