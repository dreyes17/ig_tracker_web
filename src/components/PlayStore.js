import React from 'react';
import MobileStoreButton from 'react-mobile-store-button';
import ReactGa from 'react-ga';

const PlayStore = (props) => { 
    const androidUrl = 'https://play.google.com/store/apps/details?id=com.vacamacomp.ig_tracker';

    function handleClick(e) {
        ReactGa.event({
            category: 'Button',
            action: 'Click the Play Store Button',
            label: 'Play Store Button'
        })
    }

    return (
        <> 
            <MobileStoreButton
              className="play-button"
              store="android"
              url={androidUrl}
              linkStyles={{height: "7.5vmax", width: "20vmax"}}
              linkProps={{ title: 'Play Store Button', rel: "nofollow" }}
              style={{width: "20vmax", height: "7.5vmax", display: "inline-block", marginTop: "0.7vh"}}
              onClick={handleClick}
            />
        </>
    );
}

export default PlayStore;