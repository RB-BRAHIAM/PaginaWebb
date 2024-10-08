
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../style/home.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>

            <div className="caption">
                <h1>Encuentra Autos en Venta Cerca de Ti</h1>
                <h4>Con nosotros, Podrás encontras tú próximo Auto</h4>
            </div>
            <div className='divHome'>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <h1 className='car-name'>BMW M3</h1>
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

            <div className="category-search">
                <h2 className="category-title">Buscar por categoria</h2> 
                <div className="category-buttons">
                  <button className="category-button">
                        <i className='bx bxs-car'></i>
                        <h3>Sedán</h3> 
                    </button>
                    <button className="category-button">
                        <i className='bx bxs-car'></i>
                        <h3>Hatchback</h3> 
                    </button>
                    <button className="category-button">
                        <i className='bx bxs-car'></i>
                        <h3>SUV</h3> 
                    </button>
                    <button className="category-button">
                        <i className='bx bxs-car'></i>
                        <h3>Electrico</h3> 
                    </button>
                    <button className="category-button">
                        <i className='bx bxs-car'></i>
                        <h3>Hibrido</h3> 
                    </button>
                </div>
            </div>

            <h1 className='mostSearched'>Autos mas Buscados</h1>
            <div className="card-container">
                <div className="card" style={{ width: '20rem' }}>
                    <img className="card-img-top" src="/bmw.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">BMW</h5>
                        <hr/>
                        <div className="card-icons">
                            <div className="icon-item">
                                <i className="bx bxs-star"></i>
                                <span className="icon-text">Feature 1</span>
                            </div>
                            <div className="icon-item">
                                <i className="bx bxs-star"></i>
                                <span className="icon-text">Feature 2</span>
                            </div>
                            <div className="icon-item">
                                <i className="bx bxs-star"></i>
                                <span className="icon-text">Feature 3</span>
                            </div>
                        </div>
                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
                <div className="card" style={{ width: '20rem' }}>
                    <img className="card-img-top" src="/Camaro.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Camaro ZL1</h5>
                        <hr/>
                        <div className="card-icons">
                            <div className="icon-item">
                                <i className="bx bxs-star"></i>
                                <span className="icon-text">Feature 1</span>
                            </div>
                            <div className="icon-item">
                                <i className="bx bxs-star"></i>
                                <span className="icon-text">Feature 2</span>
                            </div>
                            <div className="icon-item">
                                <i className="bx bxs-star"></i>
                                <span className="icon-text">Feature 3</span>
                            </div>
                        </div>
                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
                <div className="card" style={{ width: '20rem' }}>
                    <img className="card-img-top" src="/Mercedes.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Mercedes</h5>
                        <hr/>
                        <div className="card-icons">
                            <div className="icon-item">
                                <i className="bx bxs-star"></i>
                                <span className="icon-text">Feature 1</span>
                            </div>
                            <div className="icon-item">
                                <i className="bx bxs-star"></i>
                                <span className="icon-text">Feature 2</span>
                            </div>
                            <div className="icon-item">
                                <i className="bx bxs-star"></i>
                                <span className="icon-text">Feature 3</span>
                            </div>
                        </div>
                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
