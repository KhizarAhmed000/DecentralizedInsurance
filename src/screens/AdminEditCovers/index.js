import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCoverArray } from "../../store/Cover";
import { selectAdminName } from "../../store/Admin";
import images from "../../services/utilities/images";
import { useNavigate } from "react-router-dom";
import backendUrl from "../../services/backendurl";
export default function AdminEditCovers() {
  const coverArray = useSelector(selectCoverArray);
  const admin = useSelector(selectAdminName);
  const [coverType, setCoverType] = useState(coverArray.coverType);
  const [protocol, setProtocol] = useState(coverArray.protocol);
  const [capacity, setCapacity] = useState(coverArray.capacity);
  const [imageURL, setImageURL] = useState();
  const [securityRating, setSecurityRating] = useState(
    coverArray.securityRating
  );
  const [dailyCost, setDailyCost] = useState(coverArray.dailyCost);
  const [toggleDropDown, setToggleDropDown] = useState(true);
  const [toggleDropDown2, setToggleDropDown2] = useState(true);
  const navigate = useNavigate();

  const securityRatings = [
    "AAA",
    "AA",
    "A",
    "BBB",
    "BB",
    "B",
    "CCC",
    "CC",
    "C",
  ];

  const handleEditCover = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      protocol: protocol,
      dailyCost: dailyCost,
      capacity: capacity,
      securityRating: securityRating,
      coverType: coverType,
      imageURL:imageURL
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${backendUrl}cover/updateCover`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        if (result.includes("Cover updated")) {
          console.log(result);
          navigate("/AdminCovers");
        } else {
          console.log("cover updating failed");
        }
      })
      .catch((error) => console.log("error", error));
  };
  const coverTypes = [
    "Smart Contract Vulnerability",
    "Custodian Risk",
    "Stablecoin De-Peg Risk",
    "MPC Cover",
    "Ethereum Slashing",
    "Risk Transfer",
    "Bridge Cover",
  ];

  const fileInputRef = useRef(null);
  const handleUpload = async () => {
    const fileInput = fileInputRef.current;
    if (fileInput && fileInput.files.length > 0) {
      const formData = new FormData();
      formData.append("image", fileInput.files[0]);

      try {
        const response = await fetch(
          `${backendUrl}auth/uploadProfile`,
          {
            method: "POST",
            body: formData,
            redirect: "follow",
          }
        );

        const result = await response.text();
        const {url} = JSON.parse(result)
        
        setImageURL(url);
        console.log("image uploaded successfully, url:",url)
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.log("No file selected");
    }
  };


  const deleteCover = () =>{
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "protocol": protocol
});

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`${backendUrl}cover/deleteCover`, requestOptions)
  .then(response => response.text())
  .then(result => {
    if (result.includes("cover deleted")) {
        console.log(result);
        navigate("/AdminCovers");
      } else {
        console.log("cover deleting failed");
        console.log(result)
      }
  })
  .catch(error => console.log('error', error));
  }
  
  const toggleDropDownFunction = () => {
    setToggleDropDown(!toggleDropDown);
  };

  const toggleDropDownFunction2 = () => {
    setToggleDropDown2(!toggleDropDown2);
  };
  //   const handleDropDown = ({func, item}) =>{
  //     // setToggleDropDown(!toggleDropDown)
  //     // func(item)
  //     // console.log(securityRating)
  //   }

  return (
    <>
      <div className="w-full h-auto shadow flex-col justify-start items-center gap-[150px] inline-flex bg-[#242324] background">
        <div className="w-full py-[15px] bg-black bg-opacity-60 justify-center items-center gap-[350px] inline-flex">
          <div className="w-[200px] h-[46px] pt-[0.50px] pb-[0.83px] justify-center items-center flex">
            <div className="w-[200px] h-[44.67px] relative flex-col justify-start items-start flex">
              <div className="w-[200.06px] h-[44.73px] relative"></div>
            </div>
          </div>
          <div className="justify-start items-center gap-14 flex">
            <div className="justify-start items-start gap-[60px] flex">
              <div className="w-[45px] h-7 justify-center items-center flex">
                <div className="w-[45px] text-center text-white text-[17px] font-normal font-Satoshi leading-7">
                  Home
                </div>
              </div>
              <div className="justify-center items-center flex">
                <div className="self-stretch justify-start items-center inline-flex">
                  <div className="text-center text-white text-[17px] font-normal font-Satoshi leading-7">
                    Covers
                  </div>
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute"></div>
                  </div>
                </div>
              </div>
              <div className="justify-center items-center flex">
                <div className="text-center text-white text-lg font-normal font-Satoshi leading-7">
                  About
                </div>
              </div>
              <div className="justify-center items-center flex">
                <div className="text-center text-white text-[17px] font-normal font-Satoshi leading-7">
                  Community Claims
                </div>
              </div>
              <div className="justify-center items-center flex">
                <div className="text-center text-white text-[17px] font-normal font-Satoshi leading-7">
                  Data
                </div>
              </div>
            </div>
            <div className="h-11 px-[25px] py-3 bg-gradient-to-r bg-white rounded-[36px] justify-center items-center gap-2.5 flex cursor-pointer">
              <div className="text-center text-black text-[15px] font-bold font-Satoshi capitalize leading-tight cursor-pointer">
                {admin}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[1302px] h-[592px] flex-col justify-start items-start gap-[75px] inline-flex">
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="justify-center items-center gap-5 flex">
              <div className="text-center text-white text-[32px] font-bold font-Satoshi tracking-wide">
                Edit Cover
              </div>
            </div>
            <div className="px-[35px] py-[15px] bg-red-500 rounded-[36px] justify-start items-start gap-2.5 flex">
              <div className="text-center text-white text-xl font-bold font-Satoshi capitalize leading-tight cursor-pointer"
              onClick={deleteCover}
              >
                Delete Cover
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-[75px] inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-[25px] inline-flex">
              <div className="self-stretch text-white text-2xl font-bold font-Satoshi">
                Cover Info
              </div>
              <div className="self-stretch h-[410px] p-[25px] bg-white bg-opacity-10 rounded-[20px] border border-white border-opacity-25 backdrop-blur-[25px] flex-col justify-center items-center gap-[15px] flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-lg font-normal font-Satoshi capitalize">
                    Protocol
                  </div>
                  <div className="h-11 px-2.5 py-3 bg-white bg-opacity-10 rounded-[10px] justify-between items-center flex">
                    <input
                      className="text-white text-xl font-bold font-Satoshi leading-tight text-right"
                      value={protocol}
                      type="text"
                      onChange={(event) => setProtocol(event.target.value)}
                    />
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-lg font-normal font-Satoshi capitalize">
                    Capacity
                  </div>
                  <div className="h-11 px-2.5 py-3 bg-white bg-opacity-10 rounded-[10px] justify-between items-center flex">
                    <input
                      className="text-white text-xl font-bold font-Satoshi leading-tight text-right"
                      value={capacity}
                      type="text"
                      onChange={(event) => {
                        setCapacity(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-lg font-normal font-Satoshi capitalize">
                    daily Cost
                  </div>
                  <div className="h-11 px-2.5 py-3 bg-white bg-opacity-10 rounded-[10px] justify-between items-center flex">
                    <input
                      className="text-white text-xl font-bold font-Satoshi leading-tight text-right"
                      value={dailyCost}
                      type="text"
                      onChange={(event) => setDailyCost(event.target.value)}
                    />
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-lg font-normal font-Satoshi capitalize">
                    Upload Logo
                  </div>
                  <div className="h-11 px-2.5 py-3 bg-white bg-opacity-10 rounded-[10px] justify-between items-center flex">
                    <input
                      className="text-white text-l  font-Satoshi leading-tight align-right"
                      type="file"
                      // onChange={(event) => setImage(event.target.files[0])}
                      ref={fileInputRef}
                      // onClick={handleUpload}
                    />
                    <div className=" text-center  text-white text-[10px] font-bold font-Satoshi cursor-pointer"
                    onClick={handleUpload}
                    >
                      Upload Cover
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex h-11">
                  <div className="text-white text-lg font-normal font-Satoshi capitalize ">
                    Security Rating
                  </div>
                  {toggleDropDown ? (
                    <div
                      className="h-11 p-2.5 bg-white bg-opacity-10 rounded-[10px] justify-between items-center flex cursor-pointer"
                      onClick={toggleDropDownFunction}
                    >
                      <div className="text-teal-600 text-xl font-bold font-Satoshi leading-tight">
                        {securityRating}
                      </div>
                      <img
                        src={images.downArrow}
                        className="w-7 h-2 px-[7px]    justify-center items-center flex "
                      />
                    </div>
                  ) : (
                    <div className="h-fit  p-2.5 bg-[#313131] border border-white border-opacity-25 rounded-[10px] justify-between items-center flex-col absolute top-[250px] left-[520px]">
                      {securityRatings.map((item, index) => (
                        <div
                          key={index}
                          className="text-teal-600 text-xl font-bold font-Satoshi leading-tight cursor-pointer"
                          onClick={() => {
                            setSecurityRating(item);
                            toggleDropDownFunction();
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-lg font-normal font-Satoshi capitalize h-11">
                    Cover Type
                  </div>
                  {toggleDropDown2 ? (
                    <div
                      className="h-11 p-2.5 bg-white bg-opacity-10 rounded-[10px] justify-between items-center flex"
                      onClick={toggleDropDownFunction2}
                    >
                      <div className="text-teal-600 text-xl font-bold font-Satoshi leading-tight">
                        {coverType}
                      </div>
                      <img
                        src={images.downArrow}
                        className="w-7 h-2 px-[7px] justify-center items-center flex cursor-pointer"
                      />
                    </div>
                  ) : (
                    <div className="h-fit  w-[300px] p-3 bg-[#313131] border border-white border-opacity-25 rounded-[10px] justify-between items-center flex-col absolute top-[300px] left-[288px]">
                      {coverTypes.map((item, index) => (
                        <div
                          key={index}
                          className="text-teal-600 text-xl font-bold font-Satoshi leading-tight cursor-pointer"
                          onClick={() => {
                            setCoverType(item);
                            toggleDropDownFunction2();
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex">
              <div className="self-stretch h-[59px] flex-col justify-start items-start gap-[5px] flex">
                <div className="self-stretch text-white text-2xl font-bold font-Satoshi">
                  Changes
                </div>
                <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-white text-base font-normal font-Satoshi lowercase">
                    PLease review the changes before confirming.
                  </div>
                </div>
              </div>
              <div className="h-[250px] w-[500px] p-[25px] rounded-[20px] border border-white border-opacity-50 backdrop-blur-[25px] flex-col justify-center items-center gap-[15px] flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-lg font-normal font-Satoshi capitalize">
                    Capacity
                  </div>
                  <div className="text-white text-xl font-bold font-Satoshi leading-tight">
                    ~ {capacity} USD
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-lg font-normal font-Satoshi capitalize">
                    daily Cost
                  </div>
                  <div className="text-white text-xl font-bold font-Satoshi leading-tight">
                    {dailyCost}%
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-lg font-normal font-Satoshi capitalize">
                    Security Rating
                  </div>
                  <div className="text-white text-xl font-bold font-Satoshi leading-tight">
                    {securityRating}
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-lg font-normal font-Satoshi capitalize">
                    Cover Type
                  </div>
                  <div className="text-white text-xl font-bold font-Satoshi leading-tight">
                    {coverType}
                  </div>
                </div>

                {/* <div className="self-stretch justify-between items-center inline-flex">
          <div className="text-white text-lg font-normal font-Satoshi capitalize">Cover Wording</div>
          <div className="text-white text-xl font-bold font-Satoshi leading-tight">Cover Wording...</div>
        </div> */}
              </div>
              <div
                className="px-[35px] py-[15px] bg-teal-600 rounded-[36px] justify-start items-start gap-2.5 inline-flex cursor-pointer"
                onClick={handleEditCover}
              >
                <div className="text-center text-black text-xl font-bold font-Satoshi capitalize leading-tight">
                  Confirm
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[1295px] py-5 border-t border-neutral-700 justify-between items-center inline-flex">
          <div className="w-[334px] h-[27px] relative">
            <div className="w-[17px] left-0 top-[-0.42px] absolute text-slate-500 text-base font-normal font-Satoshi leading-7">
              ©
            </div>
            <div className="left-[61px] top-[-0.42px] absolute text-slate-500 text-base font-normal font-Satoshi leading-7">
              Compound Foundation. All rights reserved.
            </div>
            <div className="left-[17px] top-[-0.42px] absolute text-slate-500 text-base font-normal font-Satoshi leading-7">
              2023
            </div>
          </div>
          <div className="h-[30px] pt-[4.58px] pb-[9.42px] justify-center items-start gap-2.5 flex">
            <div className="w-[26px] h-4 relative rounded-[100px] flex-col justify-start items-start flex">
              <div className="w-[26px] h-4 bg-slate-500" />
              <div className="w-4 h-4 relative rounded-[100px]" />
            </div>
            <div className="w-[26px] h-4 relative flex-col justify-start items-start flex">
              <div className="w-[26px] h-4 bg-slate-500" />
              <div className="w-4 h-4 relative" />
            </div>
            <div className="w-[26px] h-4 relative flex-col justify-start items-start flex">
              <div className="w-[26px] h-4 bg-slate-500" />
              <div className="w-4 h-4 relative" />
            </div>
            <div className="w-[26px] h-4 relative bg-white rounded-[100px] flex-col justify-start items-start flex">
              <div className="w-[26px] h-4 bg-slate-500" />
              <div className="w-4 h-4 relative" />
            </div>
            <div className="w-[26px] h-4 relative flex-col justify-start items-start flex">
              <div className="w-[26px] h-4 bg-slate-500" />
              <div className="w-4 h-4 relative" />
            </div>
            <div className="w-[26px] h-4 relative bg-white rounded-[100px] flex-col justify-start items-start flex">
              <div className="w-[26px] h-4 bg-slate-500" />
              <div className="w-4 h-4 relative" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
