import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAdminName } from "../../store/Admin";
import { selectCoverArray, setCoverArray } from "../../store/Cover";
import { useNavigate } from "react-router-dom";
import { selectWalletAddress, setCartCoversRedux } from "../../store/WalletAddress";
import backendUrl from "../../services/backendurl";

export default function BuyCovers() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedCover, setSelectedCover] = useState("All Risk Types");
  const [covers, setCovers] = useState([]);
  const walletAddress = useSelector(selectWalletAddress);
  const [cartCovers,setCartCovers] = useState([])
  const [itemCount,setItemCount] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${backendUrl}cover/getCovers`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setCovers(result.covers);
      } catch (error) {
        console.error("Error fetching covers:", error);
      }
    };

    fetchData();
  }, []);

  const [coverTypes, setCoverTypes] = useState({
    "All Risk Types": true,
    "Smart Contract Vulnerability": false,
    "Custodian Risk": false,
    "Stablecoin De-Peg Risk": false,
    "MPC Cover": false,
    "Ethereum Slashing": false,
    "Risk Transfer": false,
    "Bridge Cover": false,
  });

  const handleCoverClick = (clickedType) => {
    setSelectedCover(clickedType);
    const updatedCoverTypes = {};
    Object.keys(coverTypes).forEach((type) => {
      updatedCoverTypes[type] = type === clickedType;
    });
    setCoverTypes(updatedCoverTypes);
  };


  const handleCartNavigate = () =>{
    dispatch(setCartCoversRedux(cartCovers))
    navigate('/CoverPurchase')
  }

  const addToCart = (covers) => {
    console.log(cartCovers)
    // Check if the chosen cover's protocol already exists in the cartCovers array
    let isCoverAlreadyChosen = false;
  
    for (const cover of cartCovers) {
      if (cover.protocol === covers.protocol) {
        isCoverAlreadyChosen = true;
        break;
      }
    }
  
    if (isCoverAlreadyChosen) {
      console.log('You have already chosen this cover.');
    } else {
      // If the cover is not already chosen, add it to the cartCovers array
      setCartCovers((prevArray) => [...prevArray, covers]);
      setItemCount(cartCovers.length) 
    }
  };

  const handleChooseRiskType = (riskType) => {
    setSelectedCover(riskType);
  };
  return (
    <>
      <div className="w-full h-auto shadow flex-col justify-start items-center gap-[150px] inline-flex bg-[#242324] background">
        <div className="w-full py-[15px]  bg-opacity-60 justify-center items-center gap-[350px] inline-flex ">
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
                {walletAddress?.slice(0, 6)}...{walletAddress?.slice(-2)}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[1295px]  flex-col justify-start items-start gap-[75px] inline-flex">
          <div className="text-center text-white text-5xl font-bold fontSatoshi">
            Buy Covers
          </div>
          <div className="flex-col justify-start items-start gap-[35px] flex">
            <div className="w-[1295px] justify-end items-center inline-flex">
              {/* <div className="justify-start items-center gap-4 flex">
                <div className="w-[603px] h-14 px-5 bg-white bg-opacity-20 rounded-[15px] border border-black border-opacity-25 justify-start items-center gap-5 flex">
                  <div className="w-6 h-6 relative">
                    <div className="w-[19px] h-[19px] left-[2px] top-[2px] absolute rounded-full border border-white" />
                  </div>
                  <div className="text-gray-200 text-xl font-medium fontSatoshi leading-7 tracking-tight">
                    Search
                  </div>
                </div>
              </div> */}
              <div className="px-7 py-3 bg-teal-600 rounded-[36px] justify-end items-start gap-2.5 flex">
                <div
                  className="text-center text-black text-lg font-medium fontSatoshi capitalize leading-tight cursor-pointer"
                  onClick={handleCartNavigate}
                >
                  View Cart ({itemCount !== null ? itemCount+1 : 0})
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-[19px] inline-flex">
              {/* <div className="px-5 py-2.5 bg-teal-600 rounded-[10px] justify-start items-center gap-[23px] flex cursor-pointer">
                <div className="text-black text-xl font-medium fontSatoshi leading-[27.10px]">
                  MPC Cover
                </div>
              </div> */}

              {/* <div className="px-5 py-2.5 bg-white bg-opacity-20 rounded-[10px] justify-start items-center gap-[23px] flex">
                <div className="text-gray-200 text-xl font-medium fontSatoshi leading-[27.10px]">
                  Ethereum Slashing
                </div>
              </div> */}
              {Object.entries(coverTypes).map(([type, value]) => (
                <div
                  key={type}
                  className={`px-5 py-2.5 rounded-[10px] justify-start items-center gap-[23px] flex cursor-pointer ${
                    value ? "bg-teal-600" : "bg-white bg-opacity-20"
                  }`}
                  onClick={() => handleCoverClick(type)}
                >
                  <div
                    className={`text-${
                      value ? "black" : "gray-200"
                    } text-xl font-medium fontSatoshi leading-[27.10px]`}
                  >
                    {type}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="self-stretch h-[0px] border border-white border-opacity-50"></div>
          <div className=" flex-col justify-center items-center gap-[35px] ">
            <div className="h-[1400] self-stretch justify-center items-center gap-10 flex-wrap inline-flex ">
              {covers.map((item, index) => (
                <>
                  <div
                    key={index}
                    className={`h-[375px] w-[350px] pl-[35px] pr-[34.67px] py-[35px] bg-zinc-800 bg-opacity-30 rounded-[15px] border-2 border-purple-600 backdrop-blur-[25px] justify-center items-center flex ${
                      selectedCover !== "All Risk Types" &&
                      selectedCover !== item.coverType
                        ? "hidden"
                        : ""
                    }`}
                  >
                    <div className="grow shrink basis-0 self-stretch flex-col justify-start items-end gap-[30px] inline-flex">
                      <div className="self-stretch h-[49px] justify-start items-start gap-2.5 inline-flex">
                        <img
                          className="w-12 h-12"
                          src={item.imageURL}
                          alt={item.name}
                        />
                        <div className="grow shrink basis-0 flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="text-white text-[22px] font-medium fontSatoshi leading-tight">
                            {item.protocol}
                          </div>
                          <div className="px-1 py-0.5 justify-center items-center gap-2.5 inline-flex">
                            <div className="w-[15.50px] h-[19.50px] relative"></div>
                            <div className="text-white text-sm font-normal fontSatoshi leading-tight">
                              {item.coverType}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[152px] flex-col justify-center items-center gap-2.5 flex">
                        <div className="self-stretch justify-between items-center inline-flex">
                          <div className="text-white text-base font-normal fontSatoshi capitalize">
                            Capacity
                          </div>
                          <div className="text-white text-xl font-bold fontSatoshi leading-tight">
                            ~ {item.capacity} USD
                          </div>
                        </div>
                        <div className="self-stretch justify-between items-center inline-flex">
                          <div className="text-white text-base font-normal fontSatoshi capitalize">
                            daily Cost
                          </div>
                          <div className="text-white text-xl font-bold fontSatoshi leading-tight">
                            {item.dailyCost}%
                          </div>
                        </div>
                        <div className="self-stretch justify-between items-center inline-flex">
                          <div className="text-white text-base font-normal fontSatoshi capitalize">
                            Security Rating
                          </div>
                          <div className="text-teal-600 text-xl font-bold fontSatoshi leading-tight">
                            {item.securityRating}
                          </div>
                        </div>
                      </div>
                      <div className="px-[25px] py-3 rounded-[52px] border border-white justify-center items-center gap-2.5 inline-flex">
                        <div
                          className="text-white text-lg font-medium fontSatoshi leading-tight cursor-pointer"
                          onClick={() => {
                            addToCart(item)
                          }}
                        >
                          Add to Cart
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
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
