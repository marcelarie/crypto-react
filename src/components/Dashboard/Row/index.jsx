
import React from 'react'

const Row = ({ data }) => {
    const url = 'https://messari.io/asset-images/' + data.id + '/128.png?v=2'
    const img = document.createElement('img')
    const isLoaded = url.complete && url.naturalHeight !== 0;
    return (
        <>
            <tr >
                <td><img src={isLoaded ? url : 'https://equosevilla.es/wp-content/uploads/2017/01/interrogante.png'} width='50px' alt={data.name} /></td>
                <td>{data.name}</td>
                <td>{data.symbol}</td>
            </tr>
        </>
    )
}

export default Row
