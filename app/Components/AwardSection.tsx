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
      {award?.map(
        (val, index) =>
          val !== "" && (
            <img
              key={`${val}_${index}`}
              src={val}
              alt=""
              style={{
                width: "130px",
                height: "130px",
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
            // <li key={`${val}_${index}`}>{val}</li>
          )
      )}
    </>
  );
};

export default AwardSection;
