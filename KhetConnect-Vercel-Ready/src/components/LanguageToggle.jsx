import {useLanguage} from '../context/LanguageContext';
export default function LanguageToggle(){const{language,toggle}=useLanguage();return <button type="button" className="lang-pill kc-no-translate" onClick={toggle} title="Change language">{language==='hi'?'हिं':'EN'} <span>{language==='hi'?'EN':'हिं'}</span></button>}
