
import React, { useState } from 'react'
import HeaderDashboard from './Header'
import FooterDashboard from './Footer'
import Row from './Row'
import data from '../../api/api.js'


const Dashboard = () => {

    const [cryptos, setCryptos] = useState([])

    // I dont know why this runs
    // two times (?)
    data.then(result => {
        console.log(result)
        setCryptos(result.data.data)
    })

    return (
        <>
            <HeaderDashboard />
            <table>
                <tbody>
                    {
                        // cryptos.map(crypto => <Row data={cryptos} />)
                    }
                </tbody>
            </table>
            <FooterDashboard />
        </>
    )
}

export default Dashboard
