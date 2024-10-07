import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../style/home.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <div className='divHome'>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="/bmw.png" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="/Camaro.png" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="/Mercedes.png" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </a>
                </div>
            </div>

            <div className="card" style={{ width: '20rem' }}>
                <img className="card-img-top" src="/bmw.png" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">BMW</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic deserunt quas sit porro aut, id beatae alias deleniti, quidem facilis, fuga assumenda sequi corrupti. Tenetur molestiae culpa alias dolore repellat!</p>
                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
