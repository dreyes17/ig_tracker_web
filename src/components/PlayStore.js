import React from 'react';
import MobileStoreButton from 'react-mobile-store-button';
import ReactGa from 'react-ga';

const PlayStore = (props) => { 
    const androidUrl = 'https://play.google.com/store/apps/details?id=com.vacamacomp.ig_tracker';

    function handleClick(e) {
        ReactGa.event({
            category: 'Button',
            action: 'Click the Play Store Button'
        })
    }

    return (
        <> 
            <MobileStoreButton
              className="play-button"
              store="android"
              url={androidUrl}
              linkStyles={{height: "7.5vmax", width: "20vmax", paddingRight: "2vmax"}}
              linkProps={{ title: 'Play Store Button' }}
              onClick={handleClick}
            />
        </>
    );
}

export default PlayStore;