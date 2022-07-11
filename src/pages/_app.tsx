import { DefaultSeo } from 'next-seo';
import { defaultSeo } from 'next-seo.config';
import { AppProps } from 'next/app';
import '@/styles/index.css';
import { Container } from '@/components/processed/Container';
import { Footer } from '@/components/processed/Footer';
import { Header } from '@/components/processed/Header';
import { useRoutePath } from '@/hooks/useRoutePath';

export default function MyApp({ Component, pageProps }: AppProps) {
  const routePath = useRoutePath();

  return (
    <div className="min-h-screen vstack gap-10 bg-global">
      <DefaultSeo {...defaultSeo(routePath)} />

      <Header />
      <Container className="px-0 py-6 sm:p-6">
        <Component {...pageProps} />
      </Container>
      <Footer />
    </div>
  );
}
