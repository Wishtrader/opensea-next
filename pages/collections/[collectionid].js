import React from 'react';
import {useRouter} from "next/router";
import Header from "../../components/Header";

function Collection() {
  const router = useRouter();
  return(
  <div>
    <Header />
    <h2>{router.query.collectionid}</h2>
  </div>
  );
}

export default Collection;
