import Hero from "@/components/Hero";
import Header from "./../src/components/Header";
import Footer from "@/components/Footer";
type props = {
    children: React.ReactNode;
  };

  const layout = ({children}:props)=>{
    return(
      <div className="flex flex-col min-h-screen">
        <Header/>
        <Hero/>
        <main className="container mx-auto flex-1 py-10 w-full">
          {children}
        </main>
          <Footer/>
      </div>
    )
  }

  export default layout;