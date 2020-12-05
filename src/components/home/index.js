import React from 'react'
import {
    defineCustomElements,
    applyPolyfills,
} from 'img-comparison-slider/loader';

applyPolyfills().then(() => defineCustomElements(window));

const Home = () => {


    return (

        <div>
            <img-comparison-slider>
                <img className='img' slot="before" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/before.jpg" alt='' />
                <img className='img' slot="after" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/after.jpg" alt='' />
            </img-comparison-slider>
        </div>

    )

}

export default Home