import React from "react";
import NewsSlider from "./subComponents/NewsSlider";
import PageSuggestion from "./subComponents/PageSuggestion";
import PeopleSuggestion from "./subComponents/PeopleSuggestion";
import SponsorAds from "./subComponents/SponsorAds";

const Suggestion = () => {
  return (
    <div className="flex flex-col gap-2">
      <NewsSlider />
      <PageSuggestion />
      <PeopleSuggestion />
      <SponsorAds />
    </div>
  );
};

export default Suggestion;
