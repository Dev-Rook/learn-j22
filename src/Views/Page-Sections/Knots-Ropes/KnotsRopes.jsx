import React, { useState } from "react";
import Styles from "../../../Styles/Page-Section-Styles/General/GeneralSectionStyles.module.css";

import KnotsRopesSwiper from "../../../Components/Swiper/KnotsRopesSwiper";

import KnotsRopesData from "../../../Components/Data/Knots-Ropes/KnotsRopesData";

const KnotsRopes = () => {
  const [sectionData, setSectionData] = useState(KnotsRopesData);

  return (
    <div className={Styles.Section}>
      {sectionData.map((info) => {
        const { id, HeaderImage, Title, Description } = info;
        return (
          <>
            <div className={Styles.Section_Header_Image_Container} key={id}>
              <img src={HeaderImage} alt="" className={Styles.Section_Image} />
            </div>

            <h3 className={Styles.Section_Title}>{Title}</h3>

            <p className={Styles.Section_Description}>{Description}</p>

            <KnotsRopesSwiper />
          </>
        );
      })}
    </div>
  );
};

export default KnotsRopes;
