import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="container col-md-5">
                <h3 className="text-center">สวัสดีค่ะ</h3>
                <p className="text-center title text-justify mt-4 mb-4">
                    เราคือร้านอาหาร ที่เน้นอาหารที่อร่อยเท่านั้นจริงๆ
                    <br/>ไม่ให้ความสำคัญกับสุขภาพเท่าไหร่
                    <br/>เพราะสุขภาพที่ดีคุณสามารถสร้างได้ด้วยการ "ออกกำลังกาย"
                    ดังนั้นกินของอร่อยก่อน แล้วคุณจะมีกำลังไปทำในสิ่งที่คุณรัก นะคะ
                </p>

            </div>
            <Footer company="Maruko" email="mal2uko0.o@gmail.com"></Footer>
        </div>
    );
}
 export default About;