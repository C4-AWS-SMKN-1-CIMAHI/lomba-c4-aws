import {Container, Row, Col} from 'react-bootstrap';
import {testimonial} from '../data/index';
import FaqComponent from '../components/Faq';

const TestimonialPage = () => {
    return (
        <div className='testimonial-page'>
            <div className="testimonial">
                <Container>
                    <Row>
                        <Col className='mb-5'>
                            <h1 className='fw-bold text-center'>Semua Testimonial</h1>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eveniet.</p>
                        </Col>
                    </Row>
                    <Row className='row-cols-lg-3 row-cols-1'>
                        {
                            testimonial.map((data) => {
                                return (
                                    <Col key={data.id} className='mb-5 test shadow-sm bg-white'>
                                        <p className='desc text-center p-3 py-3'>{data.desc}</p>
                                        <div className='people'>
                                            <img src={data.image} alt=""/>
                                            <div className='info'>
                                                <div className="rinci text-center my-2">
                                                    <h5 className='mb-1'>{data.name}</h5>
                                                    <p className='m-0 fw-bold'>{data.skill}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                );
                            })
                        }
                    </Row>
                </Container>
            </div>
            <FaqComponent/>
        </div>
    )
}

export default TestimonialPage