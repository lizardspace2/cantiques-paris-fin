import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import { ChakraProvider, Heading } from "@chakra-ui/react";
import HeaderTop from "./components/HeaderTop";
import Header from "./components/Header";
import ArtChoices from "./components/pages/ArtChoices";
import InterieurPage from "./components/pages/InterieurPage";
import BijouxPage from "./components/pages/BijouxPage";
import ItemForSale from "./components/ItemForSale";
import FooterComponent from "./components/FooterComponent";
import FooterBottom from "./components/FooterBottom";
import CollectionPreview from "./components/CollectionPreview";
import CollectionPreviewStyled from "./components/CollectionPreviewStyled";
import CollectionPreviewStyledPopulaire from "./components/CollectionPreviewStyledPopulaire";

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <HeaderTop />
        <Header />
        <Routes>
          <Route path="*" element={<ArtChoices />} /> 
          <Route path="/art" element={<ArtChoices />} />
          <Route path="/interieur" element={<InterieurPage />} />
          <Route path="/bijoux" element={<BijouxPage />} />
        </Routes>
        <Heading>Collections populaires</Heading>
        <CollectionPreview/>
        <Heading>Ventes populaires</Heading>
        <CollectionPreviewStyled/>
        <Heading>Ventes populaires</Heading>
        <CollectionPreviewStyledPopulaire/>
        <ItemForSale />
        <FooterComponent />
        <FooterBottom />
      </Router>
    </ChakraProvider>
  );
};

export default App;
