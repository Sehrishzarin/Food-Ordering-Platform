import Header from "../../Frontend/src/components/Header";
import Hero from "../../Frontend/src/components/Hero";
import Footer from "../../Frontend/src/components/Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <main className="container mx-auto flex-1 py-10 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;