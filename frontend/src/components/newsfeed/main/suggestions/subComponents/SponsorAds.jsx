import React from "react";
import lunchImage from "../../../../../assets/image/lunch.png";
import semrushImage from "../../../../../assets/image/semrush.png";

const SponsorAds = () => {
  const Ads = [
    {
      title: "অপনার অফিসের লাঞ্চ",
      url: "homefectionery.com",
      img: lunchImage,
    },
    {
      title: "SEMrush এর সাথে Ubersuggest",
      url: "semrush.com",
      img: semrushImage,
    },
  ];

  return (
    <div className="bg-white rounded p-2">
      <h3 className="font-medium text-sm font-poppins">Sponsored</h3>
      <ul className="flex flex-col gap-2 py-3">
        {Ads.map((item, key) => (
          <li key={key} className="flex gap-2">
            <img src={item.img} alt="Ad image" className="rounded" />
            <div>
              <p className="font-medium text-[13px] font-poppinsa">
                {item.title}
              </p>
              <p className="font-medium text-[10px] text-body-base-color">
                {item.url}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SponsorAds;
