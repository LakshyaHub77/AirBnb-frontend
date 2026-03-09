import React from "react";
import Nav from "../component/Nav";
import { useContext } from "react";
import { listingDataContext } from "../context/ListingContext";
import Card from "../component/Card";
function Home()  {

const {listingData,newListData}=useContext(listingDataContext)

  return ( 
  <div>
    <Nav/>
  <div className="w-[100vw]  flex items-center justify-center gap-[25px] flex-wrap mt-[250px] md:mt-[180px]">
{newListData.map(list => (
  <Card key={list._id} title={list.title} landmark={list.landmark} city={list.city} image1={list.image1} image2={list.image2} image3={list.image3} rent={list.rent} id={list._id} />
))}

  </div>
  </div>
  )
};

export default Home;
