import React, { useState } from "react";
import styles from "../../../src/App.css";
import images from "../../services/utilities/images";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectWalletAddress,
  setWalletAddressRedux,
} from "../../store/WalletAddress";
import Modal from "react-modal";
import axios from "axios";

export default function Home() {
  const dispatch = useDispatch();
  const data2 = useSelector(selectWalletAddress);
  console.log(data2);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const [activeScreen, setactiveScreen] = useState("Home");
  const [walletAddress, setWalletAddress] = useState("");
  const [adminLoginModal, setAdminLoginModal] = useState(false);
  // const reduxWalletAddress = useSelector(selectWalletAddress)
  const [walletConnected, setWalletConnected] = useState(false);
  const navigate = useNavigate();

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

  const data = [
    {
      protocolName: "BabyDogeSwap",
      coverType: "Smart Contract Vulnerability",
      imgUrl: "https://via.placeholder.com/48x48",
      capacity: "~ 166.0k USD",
      coverWording: "Learn More",
    },
    {
      protocolName: "BabyDogeSwap",
      coverType: "Smart Contract Vulnerability",
      imgUrl: "https://via.placeholder.com/48x48",
      capacity: "~ 166.0k USD",
      coverWording: "Learn More",
    },
    {
      protocolName: "BabyDogeSwap",
      coverType: "Smart Contract Vulnerability",
      imgUrl: "https://via.placeholder.com/48x48",
      capacity: "~ 166.0k USD",
      coverWording: "Learn More",
    },

    // Add more objects as needed
  ];

  const leaderboardData = [
    {
      title: "Top Cover Amount",
      amount: "10M USDT",
      label: "Assets Covered",
      bgImg: "leaderboard1",
    },
    {
      title: "Top Miner",
      amount: "3.4M USDT",
      label: "Mined",
      bgImg: "leaderboard2",
    },
    {
      title: "Top Referrer",
      amount: "84.4K USDT",
      label: "Earned",
      bgImg: "leaderboard3",
    },
    // Add more objects as needed
  ];

  const handleAdminLogin = () => {
    setAdminLoginModal(false);
    console.log(password, username);
    navigate("/AdminCovers");
  };

  const handleAdminLoginOpen = async () => {
    // try {
    //   const res = await axios.post("http://192.168.100.13:3001/auth/signin", {
    //     username:"admin",
    //     password:"admin123",
    //   });
    //   console.log(res.data);
    // } catch (error) {
    //   console.log(error?.response?.data?.message);
    // }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: "admin",
      password: "admin123",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://192.168.100.13:3001/auth/signin", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    // setPassword('')
    // setUsername('')
    // setAdminLoginModal(true)
    // console.log(username,password,'-----<')
  };

  async function requestAccount() {
    if (window.ethereum) {
      console.log("metamask exists");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        setWalletConnected(true);
        if (accounts[0]) {
          dispatch(setWalletAddressRedux(accounts[0]));
          navigate("/UserHome");
        }
        // {walletConnected && navigate(`/UserHome/${walletAddress}`)}
      } catch (error) {
        console.log("Error Connecting");
      }
    } else {
      console.log("Metamask does not exist");
    }
  }

  return (
    <>
      <div className="w-full h-[1475px] shadow flex-col justify-start items-center gap-[150px] inline-flex bg-[#242324] background">
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
              <div
                className="text-center text-black text-[15px] font-bold font-Satoshi capitalize leading-tight cursor-pointer"
                onClick={handleAdminLoginOpen}
              >
                Admin Login
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-center gap-[75px] flex">
          <div className="flex-col justify-start items-center gap-5 flex">
            <div className="w-[777px] text-center text-white text-[70px] font-bold font-Satoshi tracking-wide">
              Making Web3 Safer
              <br />
              for Everyone
            </div>
            <div
              className="px-[30px] py-[15px] bg-gradient-to-r from-purple-600 to-cyan-400 rounded-[36px] border cursor-pointer border-black justify-start items-start gap-2.5 inline-flex"
              onClick={requestAccount}
            >
              <div
                className="text-center text-white text-xl font-medium font-Satoshi capitalize leading-tight"
                onClick={requestAccount}
              >
                Connect Wallet
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-[35px] flex">
            <div className="h-[353px] flex-col justify-start items-start gap-[35px] flex">
              <div className="text-center text-white text-4xl font-bold font-Satoshi">
                New Products
              </div>
              <div className="self-stretch justify-start items-start gap-5 inline-flex">
                <div>
                  {data.map((item, index) => (
                    <div
                      key={index}
                      className="grow shrink basis-0 mx-2 h-[269px] p-[35px] bg-zinc-800 bg-opacity-30 rounded-[15px] border-2 border-purple-600 backdrop-blur-[25px] flex-col justify-center items-center gap-[30px] inline-flex"
                    >
                      <div className="self-stretch grow shrink basis-0 flex-col justify-between items-center flex">
                        <div className="self-stretch h-[49px] justify-start items-start gap-2.5 inline-flex">
                          <img
                            className="w-12 h-12"
                            src={item.imgUrl}
                            alt={`Logo for ${item.protocolName}`}
                          />
                          <div className="grow shrink basis-0 flex-col justify-center items-start gap-[5px] inline-flex">
                            <div className="text-white text-[22px] font-medium font-Satoshi leading-tight">
                              {item.protocolName}
                            </div>
                            <div className="px-1 py-0.5 justify-center items-center gap-2.5 inline-flex">
                              <div className="w-[15.50px] h-[19.50px] relative"></div>
                              <div className="text-white text-lg font-normal font-Satoshi leading-tight">
                                {item.coverType}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch h-[108.03px] flex-col justify-center items-center gap-5 flex">
                          <div className="self-stretch justify-between items-center inline-flex"></div>
                          <div className="self-stretch justify-between items-center inline-flex">
                            <div className="text-white text-base font-normal font-Satoshi capitalize">
                              Capacity
                            </div>
                            <div className="text-purple-600 text-xl font-bold font-Satoshi leading-tight">
                              {item.capacity}
                            </div>
                          </div>
                          <div className="self-stretch justify-between items-center inline-flex">
                            <div className="text-white text-base font-normal font-Satoshi capitalize">
                              Cover Wording
                            </div>
                            <div className="text-teal-600 text-xl font-normal font-Satoshi leading-tight">
                              {item.coverWording}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* {dots} */}
            {/* <div className="self-stretch justify-start items-start gap-1.5 inline-flex">
              <div className="w-[15px] h-[15px] bg-teal-600 rounded-full" />
              <div className="w-[15px] h-[15px] rounded-full border border-white" />
              <div className="w-[15px] h-[15px] rounded-full border border-white" />
              <div className="w-[15px] h-[15px] rounded-full border border-white" />
            </div> */}
          </div>
          <div className="flex-col justify-start items-center gap-[35px] flex">
            <div className="h-[216px] flex-col justify-start items-start gap-[35px] flex">
              <div className="text-center text-white text-4xl font-bold font-Satoshi">
                Leaderboard
              </div>
              <div className="self-stretch h-[132px] justify-start items-start gap-5 inline-flex">
                {leaderboardData.map((item, index) => (
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
      <Modal isOpen={adminLoginModal} style={customStyles}>
        <div className="w-[645px] h-[433px] px-10 pb-[15px] pt-[15px] bg-neutral-800 rounded-[20px] border border-white border-opacity-50 flex-col justify-start items-center gap-[35px] inline-flex">
          <div className="self-stretch px-[15px] justify-between items-center inline-flex">
            <div className="text-center text-white text-[32px] font-bold font-Satoshi tracking-wide">
              Login
            </div>
          </div>
          <div className="self-stretch h-[220px] flex-col justify-start items-end gap-5 flex">
            <div className="self-stretch h-[84px] flex-col justify-start items-start gap-2.5 flex">
              <div className="text-white text-lg font-normal font-Satoshi capitalize">
                Username
              </div>
              <div className="self-stretch h-[50px] p-[15px] bg-white bg-opacity-10 rounded-[10px] flex-col justify-start items-start gap-2.5 flex">
                <input
                  placeholder="Enter Username"
                  type="text"
                  className=" text-white self-stretch text-xl font-bold font-Satoshi leading-tight bg-transparent"
                  onChange={(event) => setUsername(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="self-stretch h-[116px] flex-col justify-start items-end gap-2.5 flex">
              <div className="self-stretch h-[84px] flex-col justify-start items-start gap-2.5 flex">
                <div className="text-white text-lg font-normal font-Satoshi capitalize">
                  Password
                </div>
                <div className="self-stretch h-[50px] p-[15px] bg-white bg-opacity-10 rounded-[10px] flex-col justify-start items-start gap-2.5 flex">
                  <input
                    placeholder="Enter Password"
                    type="password"
                    className=" text-white self-stretch text-xl font-bold font-Satoshi leading-tight bg-transparent "
                    onChange={(event) => setPassword(event.target.value)}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div
            className="px-[35px] py-[15px] bg-gradient-to-r from-purple-600 to-cyan-400 rounded-[36px] cursor-pointer justify-start items-start gap-2.5 inline-flex "
            onClick={handleAdminLogin}
          >
            <div className="text-center text-white text-2xl font-bold font-Satoshi capitalize leading-tight ">
              Confirm
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
