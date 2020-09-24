import Cookies from 'js-cookie';
import { ResourceEN, MessageEN } from './resource.en';
import { ResourceVI, MessageVI } from './resource.vi';

const Resources = {
    en: ResourceEN,
    vi: ResourceVI,
}

const Messages = {
    en: MessageEN,
    vi: MessageVI,
}

let lang = 'en';
var langCookie = Cookies.get('lang');

switch(langCookie) {
    case 'vi':
        lang = langCookie;
        break;
    default:
        lang = 'en';
        break;
}

const Resource = Resources[lang];
const Message = Messages[lang];

export {
    Resource,
    Message
}