import { Element } from "react-scroll";
import Intro from "@/components/intro";
import IntroDescription from "@/components/intro/Description";
import Platform from "@/components/platform";
import Features from "@/components/features";
import FeaureDescription from "@/components/features/Description";
import Control from "@/components/control";
import Dashboard from "@/components/dashboard";
import DashboardDescription from "@/components/intro/Description";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import PricingDescription from "@/components/pricing/Description";
import HealthierHorses from "@/components/healthierHorses";
import Shopping from "@/components/shopping";
import RideNow from "@/components/ridenow";
import Footer from "@/components/footer";

const Index = () => {
  return (
    <>
      <Intro />
      <Element name="Sobre">
        <IntroDescription
          desTitle="Uma nova forma de fazer gestão"
          desDes="Com o Equites você pode gerenciar sua hípica de forma fácil,
        intuitiva e 100% online."
        />
      </Element>
      <Platform />
      <Element name="Benefícios">
        <Features />
      </Element>
      <FeaureDescription />
      <Control />
      <Element name="Por dentro da plataforma">
        <Dashboard />
      </Element>
      <DashboardDescription
        desTitle="Deixe a papelada para trás e abrace a modernidade com o Equites."
        desDes="Adeus quadros e blocos de anotações. O futuro da sua hípica chegou!"
      />
      <Element name="Depoimentos">
        <Testimonials />
      </Element>
      <Pricing />
      <PricingDescription />
      <HealthierHorses />
      <Element name="Equites Shopping">
        <Shopping />
      </Element>
      <RideNow />
      <Footer />
    </>
  );
};

export default Index;
