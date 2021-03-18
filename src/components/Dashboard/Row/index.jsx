
import React from 'react'

// <img src={'https://messari.io/asset-images/' + props.id + '/128.png?v=2'} >
const Row = (props) => {
    return (
        <>
            <tr>
                <td>props.name</td>
                <td>props.symbol</td>
            </tr>
        </>
    )
}

export default Row
