import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function NewIceCreamContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of Ice-creams - {props.numOfIceCreams}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={() => props.buyIceCream(number)}>Buy {number} Ice-cream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: number => dispatch(buyIceCream())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewIceCreamContainer)
