import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import Results from "../components/Results/Results";

export default function Saved() {
  return (
    <div>
      <SearchBar />
      <Results button2="Delete"/>
    </div>
  );
}
