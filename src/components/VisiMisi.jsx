import { Col, Row } from "react-bootstrap";

const VisiMisi = () => {
    return(
        <div className="visimisi w-100">
            <Row className="w-100">
                <div className="visimisi-ly w-100">
                    <Col className="visi w-100">
                        <Col className="visi-title w-100 d-flex justify-content-center">
                            <h1>VISI</h1>
                        </Col>
                        <Col className="visi-txt w-100 d-flex justify-content-center">
                            <p className="mb-4 text-center">Terwujudnya sekolah dengan lulusan yang unggul dan berakhlaq mulia, berbudaya kerja, berjiwa technopreuneurship serta berwawasan global sesuai tuntutan industri dan masyarakat.</p>
                        </Col>
                    </Col>
                    <Col className="misi w-100">
                        <Col className="misi-title w-100 d-flex justify-content-center">
                            <h1>MISI</h1>
                        </Col>
                        <Col className="misi-txt w-100 d-flex justify-content-center">
                            <div className="misi-txt w-100 ly d-flex flex-row gap-5">
                                <Row className="misi-list-1 w-50 p-3">
                                    <Col>
                                        <ol>
                                            <li>Menghasilkan peserta didik yang unggul, beriman dan bertakwa kepada Tuhan Yang Maha Esa, berakhlak mulia, berkebinekaan, mandiri, bergotong royong, bernalar kritis, kreatif.</li>
                                            <li>Mewujudkan lingkungan yang berbudaya kerja.</li>
                                            <li>Menghasilkan peserta didik yang terampil serta berjiwa wirausaha sesuai dengan bidang ilmu yang dipelajarinya (Technopreuneurship).</li>
                                        </ol>
                                    </Col>
                                </Row>
                                <Row className="misi-list-2 w-50 p-3">
                                    <Col>
                                        <ol>
                                            <li>Menumbuh kembangkan literasi, penguasaan perkembangan teknologi, informasi, memahami keberagaman sosial budaya dan kultur.</li>
                                            <li>Menyiapkan peserta didik menjadi tenaga kerja yang handal serta mampu bersaing di didunia kerja.</li>
                                            <li>Meningkatkan pelayanan pendidikan dan pengelolaan sekolah melalui optimalisasi penjaminan mutu pendidikan.</li>
                                        </ol>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Col>
                </div>
            </Row>
        </div>
    )
}

export default VisiMisi;