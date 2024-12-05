import Footer from '@/components/Footer'
import PreLoader from '@/components/PreLoader'
import ScrollToTop from '@/components/ScrollToTop'
import SideBar from '@/components/SideBar'
import React from 'react'

const page = () => {
    return <>

        <ScrollToTop></ScrollToTop>
        <SideBar></SideBar>

        <div id="cappa-main" style={{ background: "#242526" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>

                <h1 style={{ marginTop: "5rem", color: "#fff" }}>ONLINE REZERVASYON</h1>
                <div
                    className="reservation-widget hotelDetails hotelReservationSteps reservation"
                    id="tb-reservation"
                    style={{ background: "#242526", height: "100%", margin: "10%" }}
                />
            </div>
            <Footer></Footer>
        </div>
    </>


}

export default page