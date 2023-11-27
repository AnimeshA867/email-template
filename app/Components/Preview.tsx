import React, { forwardRef } from "react";

interface ChildProps {
  name: string;
  designation: string;
  industry: string;
  phone1: string;
  phone2: string;
  email: string;
  address: string;
  website: string;
  profile: string;
  award: string;
  update: boolean;
  mapLink: string;
}

const Preview = forwardRef<HTMLDivElement, ChildProps>(
  (
    {
      name,
      designation,
      industry,
      phone1,
      phone2,
      email,
      address,
      website,
      profile,
      award,
      mapLink,
    },
    ref
  ) => {
    return (
      <div className=" flex flex-col lg:items-center lg:justify-start space-y-12  w-full h-full justify-center items-center">
        <h1 className="lg:text-[40px] text-[30px] font-bold ">Preview</h1>
        <div
          ref={ref}
          className="border-black/40 border-[2px overflow-hidden lg:w-[820px] w-[350px]"
        >
          {" "}
          <h4
            // style={{ color: "#004c98", fontSize: "16px", fontWeight: "600" }}
            className="font-semibold"
            style={{ color: "#004c98", fontSize: "16px" }}
          >
            If you need any further information, please do not hesitate to
            contact me. <br />
            Kind Regards,
            <br />
          </h4>
          <div className="signature" style={{ width: "820px" }}>
            <table className="logo" style={{ width: "820px", height: "151px" }}>
              <tbody>
                <tr>
                  <td style={{ position: "relative" }}>
                    <img
                      src={profile}
                      alt=""
                      style={{
                        width: "820px",
                        height: "150px",
                        objectPosition: "center",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <table
              className="social-icons"
              style={{ width: "100%", marginTop: "10px" }}
            >
              <tbody>
                <tr style={{ padding: "0%" }}>
                  <td className="lg:w-[70%] w-[50%]">
                    <h2
                      className="font-bold"
                      style={{
                        width: "100%",
                        padding: "5px",
                        color: "#004c98",
                        fontSize: "20px",
                      }}
                    >
                      {name}
                    </h2>

                    <p
                      style={{
                        width: "100%",
                        padding: "5px",
                        fontSize: "18px",
                        color: "#004c98",
                      }}
                    >
                      <i>{designation}</i>
                    </p>
                    <h2
                      className="font-bold"
                      style={{
                        width: "100%",
                        padding: "5px",
                        color: "#004c98",
                        fontSize: "20px",
                      }}
                    >
                      {industry}
                    </h2>
                    <br />
                  </td>

                  <td
                    style={{
                      width: "40%",
                      padding: "0%",
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                  >
                    <a href="https://www.facebook.com/MDSOUTHPORT">
                      <img
                        src="https://dasraa.com/MultiDynamicEmail/facebook.png"
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                      />
                    </a>
                    <a href="https://www.instagram.com/mdsouthport/">
                      <img
                        src="https://dasraa.com/MultiDynamicEmail/insta.png"
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/multi-dynamic-61bb8b287/">
                      <img
                        src="https://dasraa.com/MultiDynamicEmail/linkedin.png"
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                      />
                    </a>
                    <a href="https://twitter.com/_multidynamic">
                      <img
                        src="https://dasraa.com/MultiDynamicEmail/twitter.png"
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                      />
                    </a>
                    <a href="https://www.youtube.com/@MultiDynamicSouthport">
                      <img
                        src="https://dasraa.com/MultiDynamicEmail/youtube.png"
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <table style={{ width: "100%" }}>
              <tbody>
                <tr className="">
                  <td className="lg:w-2/4 w-2/4">
                    <table className="address">
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="https://dasraa.com/MultiDynamicEmail/phone.png"
                              alt=""
                              style={{
                                height: "25px",
                                width: "25px",
                                objectFit: "contain",
                                objectPosition: "center",
                              }}
                            />
                          </td>
                          <td>
                            <p>
                              <a href={`tel:${phone1} `}>{phone1}</a>
                              &nbsp;&nbsp;•&nbsp;&nbsp;
                              <a href={`tel:${phone2} `}>{phone2}</a>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="https://dasraa.com/MultiDynamicEmail/email.png"
                              alt=""
                              style={{
                                height: "25px",
                                width: "25px",
                                objectFit: "contain",
                                objectPosition: "center",
                              }}
                            />
                          </td>
                          <td>
                            <p className={`lg:text-[15px] text-[11px]`}>
                              <a href={`mailto: ${email}`}>{email}</a>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="https://dasraa.com/MultiDynamicEmail/location.png"
                              alt=""
                              style={{
                                height: "25px",
                                width: "25px",
                                objectFit: "contain",
                                objectPosition: "center",
                              }}
                            />
                          </td>
                          <td>
                            <p className={`lg:text-[15px] text-[11px]`}>
                              <a href={mapLink}>{address}</a>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="https://dasraa.com/MultiDynamicEmail/website.png"
                              alt=""
                              style={{
                                height: "25px",
                                width: "25px",
                                objectFit: "contain",
                                objectPosition: "center",
                              }}
                            />
                          </td>
                          <td>
                            <p className={`lg:text-[15px] text-[11px]`}>
                              <a href={`${website}`}>{website}</a>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>

                  <td
                    style={{
                      display: "flex",
                      gap: "4px",
                      width: "fit",
                      height: "auto",
                      flexDirection: "row",
                      marginRight: "10px",
                      justifyContent: "flex-end",
                    }}
                  >
                    {award !== "" && (
                      <img
                        src={award}
                        alt=" "
                        style={{
                          height: "130px",
                          width: "130px",
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                      />
                    )}
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="footer" style={{ width: "820px", height: "10%" }}>
              <tbody>
                <tr>
                  <td
                    className="lg:w-[820px] w-[350px] h-[20px]"
                    style={{ width: "820px", height: "20px" }}
                  >
                    <img
                      src="https://i.ibb.co/rtgXKY9/footer.png"
                      alt=""
                      style={{
                        width: "100%",
                        height: "97px",
                        objectFit: "contain",
                        objectPosition: "center",
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            {/* <!-- <div className="footer" style="width: 820px ; height:10%;">
        <img src="https://dasraa.com/MultiDynamicEmail/Footer.png" />
      </div> --> */}

            <table
              className="desclaimer"
              style={{ height: "10%", width: "100%" }}
            >
              <tbody>
                <tr>
                  <td>
                    <strong>Privacy Policy:</strong>[
                    <a href="https://multidynamic.com.au/images/Privacy_policies.pdf">
                      Click Here
                    </a>
                    ]
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
);
Preview.displayName = "Preview";
export default Preview;
