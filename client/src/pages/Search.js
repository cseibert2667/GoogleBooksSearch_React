import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import Results from "../components/Results/Results";

export default function Search() {
  return (
    <div>
      <SearchBar />
      <Results button2="Save"/>
    </div>
  );
}
