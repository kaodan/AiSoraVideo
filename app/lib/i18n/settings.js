export const fallbackLng = 'en'
export const languages = [fallbackLng, 'it', "cn", "ru", "ja", "en", "kr","zh-CN"]
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
    return {
        // debug: true,
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns
    }
}