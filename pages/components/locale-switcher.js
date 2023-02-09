import Link from "next/link";
import {useRouter} from "next/router";
import './locale-switcher.module.css';

export default function LocaleSwitcher() {
    const { locales, locale, pathname, query, asPath } = useRouter();
    const otherLocales = locales.filter((l) => l !== locale) //// Find all the locales apart from the current locale.

    return(
        <>
            {[...locales].sort().map((locale, index) => (
             <li key={index} className="lang">
            <Link key={locale} href="/" locale={locale}>
              {locale}
            </Link>
            </li>
          ))}
          
        </>
    );
}