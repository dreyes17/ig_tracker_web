import React from 'react';
import MobileStoreButton from 'react-mobile-store-button';

export default class PlayStore extends React.Component {
  render() {
      const androidUrl = 'https://play.google.com/store/apps/details?id=com.vacamacomp.ig_tracker';
      return (
          <div class="play-store">
              <MobileStoreButton
                className="play-button"
                store="android"
                url={androidUrl}
                height="10vh"
                width="20vw"
                linkProps={{ title: 'Play Store Button' }}
              />
          </div>
      );
  }
}