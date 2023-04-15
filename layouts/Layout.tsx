import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

interface LayoutProps {
  children: JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main className='flex flex-col gap-7'>{children}</main>
    <Footer />
  </>
);

export { Layout };
