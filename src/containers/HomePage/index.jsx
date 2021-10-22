import React from "react";
import { Navbar } from "../../components/navbar";
import PageContainer from "../../components/pageContainer";
import TopSection from "./topSection";
import Fade from "react-reveal/Fade";

import CarouselShoes from "./CarouselShoes";
import PopulerProduct from "./PopulerProduct";
import HomeShoesDetails from "./HomeShoesDetails";

function HomePage() {
  return (
    <>
      <div>
        <PageContainer>
          <TopSection>
            <Fade top>
              <Navbar />
            </Fade>
          </TopSection>
        </PageContainer>
        <CarouselShoes />
      </div>
      <PopulerProduct />
      <HomeShoesDetails />
    </>
  );
}

export default HomePage;
