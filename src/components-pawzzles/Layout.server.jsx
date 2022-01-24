import {LocalizationProvider} from '@shopify/hydrogen';

import Header from './Header.client';
import Footer from './Footer.client';
import {SkipToContent} from './SkipToContent.client';

export default function Layout({children}) {
  const contentId = 'mainContent';

  return (
    <LocalizationProvider>
      <main className="Main">
        <SkipToContent href={`#${contentId}`} />
        <Header />

        <div id={contentId} className="Content">
          {children}
        </div>

        <Footer />
      </main>
    </LocalizationProvider>
  );
}
