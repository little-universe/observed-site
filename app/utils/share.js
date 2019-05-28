// @flow

// NOTE: https://github.com/nygardk/react-share/blob/master/src/utils/createShareButton.jsx
// need to try opening custom `window.open`

/* eslint-disable prefer-template */
const objectToGetParams = (object: Object) => '?' + Object.keys(object)
  .filter(key => !!object[key])
  .map(key => `${key}=${encodeURIComponent(object[key])}`)
  .join('&');
/* eslint-enable prefer-template */

const windowOpen = (url, { name }) => {
  const height = 400;
  const width = 500;

  /* eslint-disable no-mixed-operators */
  const left = (window.outerWidth / 2)
    + (window.screenX || window.screenLeft || 0) - (width / 2);
  const top = (window.outerHeight / 2)
    + (window.screenY || window.screenTop || 0) - (height / 2);
  /* eslint-enable no-mixed-operators */

  const config = {
    height,
    width,
    left,
    top,
    location: 'no',
    toolbar: 'no',
    status: 'no',
    directories: 'no',
    menubar: 'no',
    scrollbars: 'yes',
    resizable: 'no',
    centerscreen: 'yes',
    chrome: 'yes',
  };

  const shareDialog = window.open(
    url,
    name,
    Object.keys(config).map(key => `${key}=${config[key]}`).join(', '),
  );

  return shareDialog;
};

export const shareToFacebook =
  (url: string, { quote, hashtags = [] }: Object) => {
    const fbURL = `https://facebook.com/sharer/sharer.php${objectToGetParams({
      url,
      quote,
      hashtags: hashtags.join(','),
    })}`;

    return windowOpen(fbURL, { name: 'Share Facebook' });
  };

export const shareToTwitter =
  (url: string, { title, hashtags = [] }: Object) => {
    const twURL = `https://twitter.com/share${objectToGetParams({
      url,
      text: title,
      hashtags: hashtags.join(','),
    })}`;

    return windowOpen(twURL, { name: 'Share Twitter' });
  };
