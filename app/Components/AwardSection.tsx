"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const AwardSection = ({ award }: { award: [string] | undefined }) => {
  const [list, setList] = useState<[string]>();
  //   useEffect(() => {
  //     setList(award);
  //   }, [award]);

  return (
    <>
      <ul>
        {award?.map(
          (val, index) =>
            val !== "" && (
              // <Image
              //   key={index}
              //   height={130}
              //   width={130}
              //   src={val}
              //   alt=""
              //   style={{ width: "130px", height: "130px" }}
              // />
              <li key={`${val}_${index}`}>{val}</li>
            )
        )}
      </ul>
    </>
  );
};

export default AwardSection;
