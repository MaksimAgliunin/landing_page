import React from 'react';
import './App.css';

function App() {
    return (
        <div>

            <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>

                </div>
            </nav>


            <div id="headerwrap">
                <div className="container">
                    <div className="row centered">
                        <div className="col-lg-8 col-lg-offset-2">
                            <h1>Lorem ipsum dolor.</h1>
                            <h2 className="low">Lorem ipsum dolor sit amet.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container w centered">
                <div className="row">
                    <br/><br/>
                    <div className="col-lg-4">
                        <i className="fa fa-heart"></i>
                        <h4>Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, nihil?</p>
                    </div>
                    <div className="col-lg-4">
                        <i className="fa fa-laptop"></i>
                        <h4>Computers</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, nihil?</p>
                    </div>
                    <div className="col-lg-4">
                        <i className="fa fa-trophy"></i>
                        <h4>Help</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, nihil?</p>
                    </div>
                </div>
                <br/><br/>
            </div>

            <div className="lowc">
                <div className="container centered footer1">
                    <div className="bg">Last Works</div>
                    <div className="row centered">
                        <div className="col-xl-4 tilt" id="img1"></div>
                        <div className="col-xl-4 tilt" id="img2"></div>
                        <div className="col-xl-4 tilt" id="img3"></div>
                    </div>

                </div>
            </div>

         <div className="container wb">
             <div className="row centered">
                 <br/><br/>
                 <div className="col-lg col-lg-offset-2 ">
                     <h4>Technical specialists 24 hours!</h4>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, maiores, voluptatibus? Deserunt dicta ullam ut.</p>

                     {/*<div className="col-lg-2"></div>*/}
                     <div className="col-lg col-lg-offset-1 img-responsive" id="imglow"></div>
                 </div>
             </div>

         </div>


        <div className="container soc">
                <h6>Follow US</h6>
            <div className="row justify-content-md-center centered">
                <div className="col col-lg-2"><i className="fa fa-instagram"></i></div>
                <div className="col col-lg-2"><i className="fa fa-vk"></i></div>
                <div className="col col-lg-2"><i className="fa fa-facebook"></i></div>
            </div>
        </div>




        </div>
    );
}

export default App;
