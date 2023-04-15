import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

interface LayoutProps {
  children: JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export { Layout };
