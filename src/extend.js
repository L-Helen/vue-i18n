/* @flow */

export default function extend (Vue: any): void {
  Vue.prototype.$t = function (key: Path, ...values: any): TranslateResult {
    const i18n = this.$i18n
    return i18n._t(key, i18n.locale, i18n.messages, this, ...values)
  }

  Vue.prototype.$tc = function (key: Path, choice?: number, ...values: any): TranslateResult {
    const i18n = this.$i18n
    return i18n._tc(key, i18n.locale, i18n.messages, this, choice, ...values)
  }

  Vue.prototype.$te = function (key: Path, locale?: Locale): boolean {
    const i18n = this.$i18n
    return i18n._te(key, i18n.locale, i18n.messages, locale)
  }

  Vue.prototype.$d = function (value: number | Date, ...args: any): DateTimeFormatResult {
    return this.$i18n.d(value, ...args)
  }

  Vue.prototype.$n = function (value: number, ...args: any): NumberFormatResult {
    return this.$i18n.n(value, ...args)
  }
}
