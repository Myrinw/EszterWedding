import React from "react";
import HomePageImage from "../../components/HomePageImage";
import LanguageChange from "../../components/LanguageChange";
export default function HomePage() {
  return (
    <div>
      <LanguageChange />
      <HomePageImage />

      <h2>10 more days until the wedding!</h2>
    </div>
  );
}
