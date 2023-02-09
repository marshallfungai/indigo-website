import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import tr from "../lang/tr.json";
import en from "../lang/en.json";


const messages = {
  tr,
  en,
};

function getDirection(locale) {
  if (locale === "ar") {
    return "rtl";
  }

  return "ltr";
}

export default function App({ Component, pageProps }) {
    const { locale } = useRouter();
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Component {...pageProps} dir={getDirection(locale)} />
      </IntlProvider>
    );
    return <Component {...pageProps} />;
  }