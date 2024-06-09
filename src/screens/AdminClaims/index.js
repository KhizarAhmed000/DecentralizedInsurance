import React, { useEffect, useState } from "react";
import styles from "../../../src/App.css";
import { useParams } from "react-router-dom";
import images from "../../services/utilities/images";
import { selectWalletAddress } from "../../store/WalletAddress";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import backendUrl from "../../services/backendurl";
import Modal from "react-modal";
import Cover from "../../store/Cover";
export default function AdminClaims() {
  const walletAddress = useSelector(selectWalletAddress);
  // console.log("dasda  ", walletAddress);
  const navigate = useNavigate();
  const [userdata, setData] = useState();
  const [claims, setClaims] = useState([''])
  const [claimAmount, setclaimAmount] = useState(0)
  const [modalOpen, setmodalOpen] = useState(false)
  const [claimedIndex, setclaimedIndex] = useState()
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

  const handleConfirm = () => {

    //SMART CONTRACT SHIT HERE


  }

  useEffect(() => {
    handleGetClaims();
  }, []);

  const handleGetClaims = async () => {


    const fetchData = async () => {
      try {
        const response = await fetch(
          `${backendUrl}claim/getClaims`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response}`);
        }

        const result = await response.json();
        setClaims(result);

      } catch (error) {
        console.error("Error fetching claims:", error);
      }
    };

    fetchData();
  }

  const handleChange = (value, index) => {
    claims[index].claimStatus = value

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      protocol: claims[index].protocol,
      ownerAddress: walletAddress,
      newStatus: claims[index].claimStatus
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(`${backendUrl}claim/updateClaimStatus`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result)
        handleGetClaims();
      })
      .catch((error) => console.error(error));

      
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
             
              <div className="justify-center items-center flex">
                <div className="self-stretch justify-start items-center inline-flex">
                  <div
                    className="text-center text-white text-[17px] font-normal font-Satoshi leading-7"
                    onClick={() => {
                      navigate("/AdminCovers");
                    }}
                  >
                    Home
                  </div>
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute"></div>
                  </div>
                </div>
              </div>
              <div className="justify-center items-center flex cursor-pointer"
                onClick={() => {
                  navigate("/AdminClaims");
                }}
              >
                <div className="text-center text-white text-lg font-normal font-Satoshi leading-7">
                  Claims
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
                Claim Management
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
          <div className="flex-col justify-start items-center gap-[35px] flex">
            <div className="self-stretch px-[3px] justify-center items-center gap-[61px] inline-flex">
              <div className="w-[118.22px] text-center text-white text-2xl font-bold font-Satoshi" >
                Protocol
              </div>
              <div className="text-center text-white text-2xl font-bold font-Satoshi">
                {" "}
                Cover Type
              </div>
              <div className="text-center pl-[50px] text-white text-2xl font-bold font-Satoshi">
                Claim Amount
              </div>
              <div className="text-center text-white text-2xl font-bold font-Satoshi">
                Cover Period
              </div>
              <div className="w-[200.05px] pl-[50px] text-center text-white text-2xl font-bold font-Satoshi">
                Claim Status
              </div>
              <div className="w-[190.05px] text-center text-white text-2xl font-bold font-Satoshi">
                
              </div>
                
            </div>
            {claims.map((item, index) => (
              <>
              <div className="w-[1289px] h-[67px] relative bg-white bg-opacity-10 rounded-[15px] border border-white border-opacity-25">
                <div key={index}>
                  <div className="left-[45px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                    {item.protocol}
                  </div>
                  <div className="left-[233px] top-[21px] absolute text-center">
                    <span className="text-white text-lg font-medium font-Satoshi">
                      {item.coverType}{" "}
                    </span>

                  </div>
                  <div className="left-[546px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                    {item.lossAmount}
                  </div>
                  <div className="left-[700px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                    {item.coverPeriod}
                  </div>

                  <div className="w-[160px] px-[10px] py-[9px] left-[890px] top-[11px] absolute bg-gradient-to-r from-purple-600 to-cyan-400 rounded-xl justify-center items-center gap-2.5 inline-flex">
                    <select
                      value={item.claimStatus}
                      onChange={(event) => {
                        handleChange(event.target.value, index)
                      }}
                      className="text-center text-white text-lg font-bold font-Satoshi bg-transparent outline-none cursor-pointer"
                      >
                      <option value="Denied" className="text-black bg-white">Denied</option>
                      <option value="Approved" className="text-black bg-white">Approved</option>
                      <option value="Claimed" className="text-black bg-white">Claimed</option>
                    </select>
                  </div>
                  
                </div>
              </div>
              <div className="w-[1289px] h-[67px] relative ">
              <div className="w-[350px] flex-col justify-between items-start flex">
                      
                      <div className="flex-col justify-end items-start gap-0.5 flex">
                        <div className="text-white text-2xl font-bold font-Satoshi leading-relaxed">
                          Description
                        </div>
                        <div className="text-white text-base font-medium font-Satoshi leading-relaxed">
                          {item.description}
                        </div>
                      </div>
                    </div>
            </div>  
            </>
            ))}
          </div>


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

      <Modal style={customStyles} isOpen={modalOpen} ariaHideApp={false}>
        <div className="w-[694px] h-[300px] p-[25px] bg-neutral-800 rounded-[20px] flex-col justify-start items-center gap-[50px] inline-flex">

          <div className="self-stretch h-[284px] flex-col justify-start gap-[25px] flex">
            <div className="text-center text-white text-[32px] font-bold font-Satoshi tracking-wide">
              Claim Your Insurance
            </div>
            <div className="flex-col justify-start gap-[15px] flex">


              <div className="self-stretch px-2.5 justify-between items-center inline-flex">
                <div className="text-white text-lg font-normal font-Satoshi capitalize">
                  Amount to be transferred
                </div>
                <div className="text-white text-xl font-bold font-Satoshi leading-tight">
                  {claimAmount} ETH
                </div>
              </div>
              <div className="self-stretch px-2.5 justify-between items-center inline-flex">
                <div className="text-white text-lg font-normal font-Satoshi capitalize">
                  Enter Recieving Address
                </div>
                <div className="text-white text-xl font-bold font-Satoshi leading-tight p-2 bg-gray">
                  <input placeholder="Wallet Address" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className=" mr-2 px-[35px] py-[15px] bg-teal-600 rounded-[36px] justify-start items-start gap-2.5 inline-flex cursor-pointer"
              onClick={handleConfirm}
            >
              <div className="text-center text-black text-xl font-bold font-Satoshi capitalize leading-tight"
              >
                Confirm
              </div>
            </div>
            <div className="px-[35px] py-[15px] bg-teal-600 rounded-[36px] justify-start items-start gap-2.5 inline-flex cursor-pointer"
              onClick={() => {
                setmodalOpen(false)
              }}
            >
              <div className="text-center text-black text-xl font-bold font-Satoshi capitalize leading-tight"
              >
                Cancel
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
