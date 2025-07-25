const MIN_AGE = 14
const MAX_AGE = 99
const AlLOWED_ROLES = ['admin', 'user', 'guest']
const DEFAULT_LANGUAGE = 'uk'
const API_VERSION = 'v1'

const configData = [
    {setting: 'age_range', min: MIN_AGE, max: MAX_AGE},
    {setting: 'roles', allowed: AlLOWED_ROLES},
    {setting: 'default', language: DEFAULT_LANGUAGE, api: API_VERSION},
]
export default configData