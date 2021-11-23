import React from 'react';

const Services = () => {
    return (
        <div className="tech-color background-tech">
            <div className="my-5">
                <h1 className="container mb-5 text-center text-light">What I Do</h1>
                <div class="row row-cols-1 row-cols-md-3 g-4 container mx-auto">
                    <div class="col">
                        <div class="card h-100  px-3 pt-3 border-0 shadow first-card shadow-lg text-light">
                            <i class="fas fa-code fs-1 text-center mb-3"></i>
                            <h5 className="text-primary text-center text-warning">Web Design And <br /> Development</h5>
                            <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae nesciunt pariatur temporibus eos, animi totam fuga quisquam voluptates quidem excepturi voluptate alias!</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100  px-3 py-3 border-0 shadow-lg text-light second-card">
                        <i class="fas fa-code fs-1 text-center mb-3"></i>
                            <h5 className="text-primary text-center text-warning">Front End <br /> Development</h5>
                            <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae nesciunt pariatur temporibus eos, animi totam fuga quisquam voluptates quidem excepturi voluptate alias!</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 px-3 pt-3 border-0 shadow-lg third-card text-light">
                        <i class="fas fa-code fs-1 text-center mb-3"></i>
                            <h5 className="text-primary text-center text-warning">MERN Stack <br /> Development</h5>
                            <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae nesciunt pariatur temporibus eos, animi totam fuga quisquam voluptates quidem excepturi voluptate alias!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;