import React, { useEffect, useState } from "react";
import styles from "../../../src/App.css";
import { useParams } from "react-router-dom";
import images from "../../services/utilities/images";
import { selectWalletAddress } from "../../store/WalletAddress";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import backendUrl from "../../services/backendurl";
import { Indexed } from "ethers";
export default function UserHome() {
  const walletAddress = useSelector(selectWalletAddress);
  // console.log("dasda  ", walletAddress);
  const navigate = useNavigate();
  const [userdata, setData] = useState([]);
  const [covers, setCovers] = useState();
  const [modalOpen, setmodalOpen] = useState(false)
  const [cancellationIndex, setcancellationIndex] = useState(0)
  const CoverData = [
    {
      title: "Active Cover Amount",
      amount: "12.3123 ETH",
      bgImg: "leaderboard1",
    },
    {
      title: "Total Cover Amount",
      amount: "12.3123 ETH",
      bgImg: "leaderboard2",
    },
    {
      title: "Protocols Covered",
      amount: "12.3218 ETH",
      bgImg: "leaderboard3",
    },
    // Add more objects as needed
  ];

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
  };

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      walletAddress: walletAddress,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${backendUrl}user/getUser`, requestOptions)
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        // console.log(data); // Log the full data

        // Access the transactions array
        const transactions = data.user.transactions;
        const walletAddress = data.user.walletAddress;
        console.log("test", walletAddress);
        console.log(transactions); // Log the transactions
        setData(transactions);
        console.log("dataaaaaaaaaaaaa", userdata[0]);
      })
      .catch((error) => console.log("error", error));

    const fetchData = async () => {
      try {
        const response = await fetch(`${backendUrl}cover/getCovers`);
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

  const onClaim = async (i, item) => {
    const userCover = await findCover(userdata[i].protocol);
    console.log("testtt", userCover);
    navigate("/SubmitClaim", {
      state: {
        userdata: item,
        walletAddress: walletAddress,
        userCover: userCover,
      },
    });
  };
  const findCover = async (protocol) => {
    for (const item of covers) {
      console.log("huhh", item.protocol);
      console.log(protocol);
      if (item.protocol == protocol) {
        return item;
      }
    }

    return false;
  };

  const handleModal=(index)=>{
    setmodalOpen(true)
    setcancellationIndex(index)
    console.log(modalOpen)
  }

  const getCoverRemainingTime = (index) => {
    const objectId = userdata[index]._id;
    const days = userdata[index].days;
    const timestamp = extractTimestampFromObjectId(objectId);

    if (!timestamp) {
      console.error("Invalid timestamp");
      return null;
    }

    const currentDate = new Date();
    const diffInMilliseconds = currentDate - timestamp;
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const remainingDays = Math.max(days - diffInDays, 0);
    // console.log(remainingDays);

    return remainingDays;
  };

  const extractTimestampFromObjectId = (objectId) => {
    const timestampHex = objectId.substring(0, 8);
    const timestampInt = parseInt(timestampHex, 16);
    return new Date(timestampInt * 1000);
  };

  return (
    <>
      <div className="w-full bg-[#242324]  shadow flex-col justify-start items-center gap-[150px] inline-flex background container-snap">
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
                  <div
                    className="text-center text-white text-[17px] font-normal font-Satoshi leading-7"
                    onClick={() => {
                      navigate("/BuyCovers");
                    }}
                  >
                    Covers
                  </div>
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute"></div>
                  </div>
                </div>
              </div>
              <div className="justify-center items-center flex">
                <div
                  className="text-center text-white text-lg font-normal font-Satoshi leading-7"
                  onClick={() => {
                    navigate("/ClaimAssessments");
                  }}
                >
                  Claims
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
            <div className="px-[25px] py-3 bg-white rounded-[36px] justify-start items-center gap-2.5 flex">
              <div className="w-[14.75px] h-6 relative"></div>
              <div className="text-center text-black text-[15px] font-medium font-Satoshi capitalize leading-tight relative right-2">
                {walletAddress?.slice(0, 6)}...{walletAddress?.slice(-2)}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-center gap-[75px] flex">
          <div className="flex-col justify-start items-center gap-[35px] flex">
            <div className="h-[232px] flex-col justify-start items-start gap-[35px] flex">
              <div className="text-center text-white text-5xl font-bold font-Satoshi">
                Your Covers
              </div>

              <div className="self-stretch h-[132px] justify-start items-start gap-5 inline-flex">
                {CoverData?.map((item, index) => (
                  <div
                    key={index}
                    className={`grow shrink basis-0 self-stretch px-8 py-4 rounded-[30px] flex-col justify-end items-start gap-0.5 inline-flex ${item.bgImg}`}
                  >
                    <div className="w-[350px] flex-col justify-between items-start flex">
                      <div className="text-white text-base font-medium font-Satoshi leading-relaxed">
                        {item.title}
                      </div>
                      <div className="flex-col justify-end items-start gap-0.5 flex">
                        <div className="text-white text-2xl font-bold font-Satoshi leading-relaxed">
                          {item.amount}
                        </div>
                        <div className="text-white text-base font-medium font-Satoshi leading-relaxed">
                          {item.label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {userdata[0] ? (
            <div className="flex-col justify-start items-center gap-[35px] flex">
              <div className="self-stretch px-[3px] justify-center items-center gap-[61px] inline-flex">
                <div className="w-[118.22px] text-center text-white text-2xl font-bold font-Satoshi">
                  Protocol
                </div>
                <div className="text-center text-white text-2xl font-bold font-Satoshi">
                  {" "}
                  Cover Amount
                </div>
                <div className="text-center text-white text-2xl font-bold font-Satoshi">
                  Covered Address
                </div>
                <div className="text-center text-white text-2xl font-bold font-Satoshi">
                  Cover Period
                </div>
                <div className="w-[153.05px] text-center text-white text-2xl font-bold font-Satoshi">
                  Status
                </div>
                <div className="w-[159.39px] text-center text-white text-2xl font-bold font-Satoshi">
                  Actions
                </div>
              </div>
              {userdata.map((item, index) => (
                <div className="w-[1289px] h-[67px] relative bg-white bg-opacity-10 rounded-[15px] border border-white border-opacity-25">
                  <div key={index}>
                    <div className="left-[45px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                      {item.protocol}
                    </div>
                    <div className="left-[233px] top-[21px] absolute text-center">
                      <span className="text-white text-lg font-medium font-Satoshi">
                        {item.amount}{" "}
                      </span>
                      <span className="text-white text-lg font-bold font-Satoshi">
                        ETH
                      </span>
                    </div>
                    <div className="left-[446px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                      {walletAddress?.slice(0, 6)}...{walletAddress?.slice(-2)}
                    </div>
                    <div className="left-[700px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                      {getCoverRemainingTime(index)} days
                    </div>
                    {getCoverRemainingTime(index) === 0 ? (
                      <div className="w-[100px] px-[18px] py-[9px] left-[935px] top-[11px] absolute bg-gray-500 rounded-xl justify-center items-center gap-2.5 inline-flex">
                        <div className="text-center text-white text-lg font-bold font-Satoshi">
                          Expired
                        </div>
                      </div>
                    ) : (
                      <div className="w-[100px] px-[18px] py-[9px] left-[935px] top-[11px] absolute bg-gradient-to-r from-purple-600 to-cyan-400 rounded-xl justify-center items-center gap-2.5 inline-flex">
                        <div className="text-center text-white text-lg font-bold font-Satoshi">
                          Active
                        </div>
                      </div>
                    )}

                    <div className="left-[1136px] top-[19px] absolute justify-start items-start gap-2.5 inline-flex">
                      <div
                        className="w-[30px] h-[30px] relative cursor-pointer"
                        onClick={() => {
                          handleModal(index)
                        }}
                      >
                        <img src={images.trashcan} />
                      </div>
                      <div
                        className="w-[30px] h-[30px] relative cursor-pointer"
                        onClick={() => {
                          onClaim(index, item);
                        }}
                      >
                        <img src={images.clipboard} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="  font-Satoshi text-white text-3xl font-bold">
              You haven't covered your crypto assets!
            </div>
          )}
        </div>
        <div className="w-[1295px] py-5 border-t border-neutral-700 justify-between items-center inline-flex mt-44">
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

      <Modal style={customStyles} isOpen={modalOpen}>
        <div className="w-[694px] h-[434px] p-[25px] bg-neutral-800 rounded-[20px] flex-col justify-start items-center gap-[50px] inline-flex">
          <div className="self-stretch h-[284px] flex-col justify-start gap-[25px] flex">
            <div className="text-center text-white text-[32px] font-bold font-Satoshi tracking-wide">
              Cancel Claim
            </div>
            <div className="flex-col justify-start gap-[15px] flex">
              <div className="h-[99px] p-[25px] bg-black/opacity-20 rounded-[20px] border border-white/opacity-25 backdrop-blur-[25px] flex-col justify-center items-center gap-[15px] flex">
                <div className="self-stretch h-[49px] justify-start items-start gap-2.5 inline-flex">
                  <img
                    className="w-12 h-12"
                    src="https://via.placeholder.com/48x48"
                  />
                  <div className="grow shrink basis-0 flex-col justify-center items-start gap-[5px] inline-flex">
                    <div className="text-white text-[22px] font-medium font-Satoshi leading-tight">
                      Extra Finance
                    </div>
                    <div className="px-1 py-0.5 justify-center items-center gap-2.5 inline-flex">
                      <div className="w-[15.50px] h-[19.50px] relative"></div>
                      <div className="text-white text-sm font-normal font-Satoshi leading-tight">
                        Smart Contract Vulnerability
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-end gap-2.5 inline-flex">
                    <div className="text-white text-xl font-bold font-Satoshi leading-tight">
                      23 ETH
                    </div>
                    <div className="text-white text-xl font-bold font-Satoshi leading-tight">
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch px-2.5 justify-between items-center inline-flex">
                <div className="text-white text-lg font-normal font-Satoshi capitalize">
                  Claim ID
                </div>
                <div className="text-white text-xl font-bold font-Satoshi leading-tight">
                  12
                </div>
              </div>
              <div className="self-stretch px-2.5 justify-between items-center inline-flex">
                <div className="text-white text-lg font-normal font-Satoshi capitalize">
                  Claim Amount
                </div>
                <div className="text-white text-xl font-bold font-Satoshi leading-tight">
                  3.14531 ETH
                </div>
              </div>
              <div className="self-stretch px-2.5 justify-between items-center inline-flex">
                <div className="text-white text-lg font-normal font-Satoshi capitalize">
                  Amount to be recieved{" "}
                </div>
                <div className="text-white text-xl font-bold font-Satoshi leading-tight">
                  3.14531 ETH
                </div>
              </div>
            </div>
          </div>
          <div
            className="px-[35px] py-[15px] bg-teal-600 rounded-[36px] justify-start items-start gap-2.5 inline-flex cursor-pointer"
            onClick={getCoverRemainingTime}
          >
            <div className="text-center text-black text-xl font-bold font-Satoshi capitalize leading-tight">
              Confirm
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
