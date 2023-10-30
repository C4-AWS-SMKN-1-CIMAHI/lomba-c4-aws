import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';
import {dataSwiper} from '../data/index';
import {Row, Col} from 'react-bootstrap';

const Culture = () => {
    return(
        <div className="culture">
            <Row>
                <Col className='title'>
                    <h1 className='fw-bold text-center timeline-title mb-3'>Budaya</h1>
                </Col>

                <Col className="culture-ly">
                    <Swiper
                        slidesPerView={1.5}
                        spaceBetween={80}
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
    )
}

export default Culture;