import React from 'react';

function LeftSection({
    imageURL, 
    productName, 
    productDesription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}){

    return ( 
        <div className='container mt-5 '>
            <div className='row'>
                <div className='col-6'>
                    <img src={imageURL} />
                </div>
                <div className='col-6 p-5 mt-2 '>
                    <h1>{productName}</h1>
                    <p className='mb-4'> {productDesription}</p>
                    <div className='mt-3 mb-5'>
                    <a href={tryDemo} style={{textDecoration: "none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{ marginLeft: "50px" , textDecoration: "none"}}> Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>                  
                    </div>
                    <div className='mt-3'>
                    <a href={googlePlay}>
                        <img src="media/images/googlePlayBadge.svg"/> 
                    </a>
                    <a href={appStore}>
                        <img src="media/images/appStoreBadge.svg" style={{ marginLeft: "50px",  }}/>
                     </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;