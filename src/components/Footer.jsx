import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import LogoFooter from '../assets/img/logo-footer.png'

const FooterComponent = () => {
    return (
        <div className='footer py-5'>
            <Container>
                <Row className='d-flex justify-content-between'>
                    <Col>
                        <img src={LogoFooter} alt="logo-footer" />
                        <p className='desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Laborum, similique ex reprehenderit facilis exercitationem libero. Delectus
                            error magni corrupti impedit?</p>
                        <div className='no mb-1 mt-4'>
                            <Link className='text-decoration-none'>
                                <i className='fa-brands fa-whatsapp'></i>
                                <p className='m-0'>+62 123-4567-8912</p>
                            </Link>
                        </div>
                        <div className='mail'>
                            <Link className='text-decoration-none'>
                                <i className='fa-regular fa-envelope'></i>
                                <p className='m-0'>person-email@gmail.com</p>
                            </Link>
                        </div>
                    </Col>
                    <Col className='d-flex flex-column col-lg-2 col'>
                        <h5 className='fw-bold'>Menu</h5>
                        <Link className='text-decoration-none' to=".">Home</Link>
                        <Link className='text-decoration-none' to="kelas">Kelas</Link>
                        <Link className='text-decoration-none' to="testimonial">Testimonial</Link>
                        <Link className='text-decoration-none' to="faq">Faq</Link>
                        <Link className='text-decoration-none' to="syaratketen">Syarat & Ketentuan</Link>
                    </Col>
                    <Col className='col-lg-3'>
                        <h5 className='fw-bold mb-3'>Subscribe untuk info menarik</h5>
                        <div className='subscribe'>
                            <input type="text" placeholder='subscribe...'/>
                            <button className='btn btn-danger rounded-end rounded-0'>Subscribe</button>
                        </div>
                        <div className='social mt-3'>
                            <Link to='https://www.facebook.com' className='fb'>
                                <i className='fa-brands fa-facebook'></i>
                            </Link>
                            <Link to='http://twitter.com' className='tw'>
                                <i className='fa-brands fa-twitter'></i>
                            </Link>
                            <Link to='http://linkedin.com' className='lk'>
                                <i className='fa-brands fa-linkedin'></i>
                            </Link>
                            <Link to='http://www.youtube.com' className='yt'>
                                <i className='fa-brands fa-youtube'></i>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterComponent