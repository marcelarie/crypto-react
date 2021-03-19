
import { useState } from 'react'
import HeaderDashboard from './Header'
import FooterDashboard from './Footer'
import Row from './Row'
import data from '../../api'


const Dashboard = () => {

    const [cryptos, setCryptos] = useState([])

    // I dont know why this runs
    // two times (?)
    data.then(result => {
        setCryptos(result.data.data)
        console.log(result.data.data)
    })

    return (
        <>
            <HeaderDashboard />
            <table>
                <tbody>
                    {
                        cryptos.map((crypto, index) => {
                            return <Row key={index} data={crypto} />
                        })
                    }
                </tbody>
            </table>
            <FooterDashboard />
        </>
    )
}

export default Dashboard
