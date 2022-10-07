import React, { useState } from "react";
import Styles from "../../../Styles/Page-Section-Styles/General/GeneralSectionStyles.module.css";


import HullStructureData from "../../../Components/Data/Hull-Structure/HullSctructureData";
import HullStructureSwiper from "../../../Components/Swiper/HullStructureSwiper";

const HullStructure = () => {
  const [sectionData, setSectionData] = useState(HullStructureData);

  return (
    <div className={Styles.Section}>
      {sectionData.map((info) => {
        const {id, HeaderImage, Title, Description} = info;
        return (
          <>
            <div className={Styles.Section_Header_Image_Container} key={id}>
              <img src={HeaderImage} alt="" className={Styles.Section_Image} />
            </div>

            <h3 className={Styles.Section_Title}>{Title}</h3>


            <p className={Styles.Section_Description}>{Description}</p>

            <HullStructureSwiper />
          </>
        );
      })}
    </div>
  );
}

export default HullStructure