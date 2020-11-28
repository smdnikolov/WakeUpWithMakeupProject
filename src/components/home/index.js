import React from 'react'



const Home = () => {

    const isMobile = window.screen.width > 700 ? false : true

    return (

        <div>
            <div id="example">
                {/* <img src="http://egegorgulu.com/assets/img/beforeafter/after.jpg" alt="Before" />
                <img src="http://egegorgulu.com/assets/img/beforeafter/before.jpg" alt="After" /> */}
            </div>
            {isMobile
                // ? <div style={{ width: 360, height: 200, display: 'inline-block' }}>
                //     <ImageSlider
                //         image1=""
                //         image2=""
                //     />
                // </div>
                // : <div style={{ width: 700, height: 500, display: 'inline-block' }}>
                //     <ImageSlider
                //         image1="http://egegorgulu.com/assets/img/beforeafter/after.jpg"
                //         image2="http://egegorgulu.com/assets/img/beforeafter/before.jpg"
                //     />
                // </div>
            }
        </div>
    )

}

export default Home