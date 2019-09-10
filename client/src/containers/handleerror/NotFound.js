import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <div className='container col-md-8 text-center'>
                <h1 className='mt-5' style={{ fontSize: 120 }}> 404</h1>
                <h2 className='mt-4'>Not Found</h2>
                <p className='title md-5'>ขออภัยไม่พบหน้าที่คุณค้นหา ดูเหมือนว่าหน้าที่คุณพายายามเข้าถึงไม่อยู่อีกต่อไปหรืออาจจะย้ายไปยังหน้าเว็บเพจอื่น</p>

            </div>
            <Footer></Footer>
        </div>

    )
};

export default NotFound;