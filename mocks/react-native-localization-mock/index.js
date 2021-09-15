export default class RNLocalization {
  _language = 'en';

  constructor(props) {
    this.props = props;
    this._setLanguage(this._language);
  }

  _setLanguage(interfaceLanguage) {
    this._language = interfaceLanguage;
    if (this.props[interfaceLanguage]) {
      const localizedStrings = this.props[this._language];
      for (const key in localizedStrings) {
        if (localizedStrings.hasOwnProperty(key)) {
          this[key] = localizedStrings[key];
        }
      }
    }
  }
}
