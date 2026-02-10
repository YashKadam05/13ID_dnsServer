import React from 'react'
import './footer.css'
import GDicon from './assets/GDIcon.png'
import GDicon2 from './assets/GDIcon2.png'
import CFIcon from './assets/CFIcon.png'

export default function Footer() {
    return (
        <>
            <div className="footerSection">

                <div className="heading">
                    <h1>popular dns providers</h1>
                </div>
                <div className="marque">

                    <div className="slidee">
                        <div className="box">
                            <img src={GDicon} alt="" />
                        </div>
                        <div className="box">
                            <img src={GDicon2} alt="" />
                        </div>
                        <div className="box">
                            <img src={CFIcon} alt="" style={{height:"70px"}} />
                        </div>
                        <div className="box">
                            <img src={GDicon} alt="" />
                        </div>
                        <div className="box">
                            <img src={GDicon2} alt="" />
                        </div>
                        <div className="box">
                            <img src={CFIcon} alt="" style={{height:"70px"}} />
                        </div>
                    </div>

                    <div className="slidee">
                        <div className="box">
                            <img src={GDicon} alt="" />
                        </div>
                        <div className="box">
                            <img src={GDicon2} alt="" />
                        </div>
                        <div className="box">
                            <img src={CFIcon} alt="" style={{height:"70px"}} />
                        </div>
                        <div className="box">
                            <img src={GDicon} alt="" />
                        </div>
                        <div className="box">
                            <img src={GDicon2} alt="" />
                        </div>
                        <div className="box">
                            <img src={CFIcon} alt="" style={{height:"70px"}} />
                        </div>
                    </div>

                </div>

                <div className="heading">
                    <p>DEVELOPED BY YASH KADAM</p>
                </div>


            </div>

        </>
    )
}
