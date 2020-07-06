import React from 'react';
import MobileStoreButton from 'react-mobile-store-button';

export default class PlayStore extends React.Component {
  render() {
      const androidUrl = 'https://play.google.com/store/apps/details?id=com.vacamacomp.ig_tracker';
      return (
          <div>
                  <MobileStoreButton
                    className="play-button"
                    store="android"
                    url={androidUrl}
                    linkProps={{ title: 'Play Store Button' }}
                    height={85}
                  />
                </div>
      );
  }
}