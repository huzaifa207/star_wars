import React from "react";
import { useParams } from "react-router-dom";

import Footer from "../components/Footer";
import Details from "../components/Details";

let ItemDetailScreen = () => {
  let params = useParams();
  return (
    <>
      <Details category={params.category} id={params.id} />
      <Footer />
    </>
  );
};

export default ItemDetailScreen;
