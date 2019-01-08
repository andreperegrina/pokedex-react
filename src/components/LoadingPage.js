import React from 'react';
import { Loader } from 'semantic-ui-react'

const LoadingPage = () => (
    <div className='loading-screen'>
    <div className="Aligner">
        <div className="Aligner-item">
            <div className="loader">
                <img src="images/pokemon_logo.png" alt="" style={{maxHeight:'250px',marginLeft:'-10px'}}/>
                <div>
                    <Loader inverted active inline='centered' />
                    <h3 className='loading-text'>Loading</h3>
                </div>
            </div>
        </div>
    </div>
    </div>

);

export default LoadingPage;
