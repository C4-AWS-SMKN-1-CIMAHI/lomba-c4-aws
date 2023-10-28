import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';
import {dataSwiper} from '../data/index';
import {Row, Col} from 'react-bootstrap';

function TimeLine() {
    return (
        <div className='timeline'>
            <Row className=''>
                <Col className='title'>
                    <h1 className='fw-bold text-center timeline-title mb-3'>Timeline</h1>
                </Col>

                <Col>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper">
                        {
                            dataSwiper.map((data) => {
                                return (
                                    <SwiperSlide key={data.ide}>
                                        <div>
                                            <img src={data.image} alt=""/>
                                        </div>
                                        <div className='mt-3 isi'>
                                            <p className='tanggal'>{data.name}</p>
                                            <p className='judul fw-bold'>{data.title}</p>
                                            <p className='deskrip'>{data.desc}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </Col>
            </Row>
        </div>
    );

}

export default TimeLine