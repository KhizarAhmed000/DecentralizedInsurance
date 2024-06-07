import React, { useEffect, useState } from "react";
import styles from "../../../src/App.css";
import { useParams } from "react-router-dom";
import images from "../../services/utilities/images";
import {
  selectCartCovers,
  selectWalletAddress,
} from "../../store/WalletAddress";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import backendUrl from "../../services/backendurl";

export default function CoverPurchase() {
  const walletAddress = useSelector(selectWalletAddress);
  const cartCovers = useSelector(selectCartCovers);
  const [days, setDays] = useState();
  const [walletBalance, setWalletBalance] = useState();
  const [checkbox,setCheckbox] = useState();
  const [error, seterror] = useState("validated")
  const [totalCost,settotalCost] = useState(0)
  console.log(cartCovers);
  console.log("dasda  ", walletAddress);
  const navigate = useNavigate();

  // this is creating an array with the data for the transaction seeing how many covers there r in the cart
  const initializeArray = () => {
    return cartCovers.map((item) => ({
      protocol: item.protocol,
      address: null,
      amount: null,
      days: null,
      dailyCost: item.dailyCost,
    }));
  };
  const [newArray, setNewArray] = useState(initializeArray);
  
  const validate = () => {
    if (!checkbox) {
        seterror('Please agree to the terms and conditions.');
        return;
    }
    
    for (const item of newArray) {
        if (item.days === null || item.amount === null) {
            seterror('Days and amount values must not be null.');
            console.log(item.days,item.amount)
            return;
        }
    }
//RUN FUNCTIONS HERE IN THE EVENT OF SUCCESSFUL USER INPUT
    seterror('validated');
    createUser()
};

const calculateTotalCost = () => {
  let totalCost = 0;

  // Check if any item in cartCovers has null values for days or amount
  const hasNullValues = newArray.some((item) => item.days == null || item.amount == null);
  if (hasNullValues) {
      return totalCost; // Return 0 if any item has null values
  }

  // Calculate total cost if all items have valid days and amount
  newArray.forEach((item) => {
      const itemCost = item.dailyCost * item.days * item.amount;
      console.log(itemCost)
      totalCost += itemCost;
  });
  console.log(totalCost)
  settotalCost(totalCost)
};

const handleChange = (event, index, field) => {
  const value = event.target.value;
  const updatedArray = [...newArray];
  updatedArray[index][field] = value;
  setNewArray(updatedArray);
  calculateTotalCost();
};

  const createUser = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      walletAddress: walletAddress,
      transactions: newArray
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${backendUrl}user/createUser`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        //NAVIGATING FROM HERE
        navigate('/UserHome')
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div className="w-full bg-[#242324]  shadow flex-col justify-start items-center gap-[150px] inline-flex background">
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
            <div className="px-[25px] py-3 bg-white rounded-[36px] justify-start items-center gap-2.5 flex">
              <div className="w-[14.75px] h-6 relative"></div>
              <div className="text-center text-black text-[15px] font-medium font-Satoshi capitalize leading-tight relative right-2">
                {walletAddress?.slice(0, 6)}...{walletAddress?.slice(-2)}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[1294px] h-[1071px] flex-col justify-start items-center gap-[75px] inline-flex">
          <div className="self-stretch h-[134px] flex-col justify-start items-start gap-[35px] flex">
            <div className="justify-center items-center gap-5 inline-flex">
              <div className="text-center text-white text-[32px] font-bold font-Satoshi tracking-wide">
                Cover Purchase
              </div>
            </div>
            {/* <div className="w-[603px] h-14 px-5 bg-white bg-opacity-20 rounded-[15px] border border-black border-opacity-25 justify-start items-center gap-5 inline-flex">
              <div className="w-6 h-6 relative">
                <div className="w-[19px] h-[19px] left-[2px] top-[2px] absolute rounded-full border border-white" />
              </div>
              <div className="text-gray-200 text-xl font-medium font-Satoshi leading-7 tracking-tight">
                Add more products
              </div>
            </div> */}
          </div>
          <div className="flex-col justify-start items-start gap-[35px] flex">
            <div className="self-stretch px-[39px] justify-center items-start gap-[133px] inline-flex">
              <div className="w-[118.22px] text-center text-white text-2xl font-bold font-Satoshi">
                Product
              </div>
              <div className="text-center text-white text-2xl font-bold font-Satoshi">
                Covered Asset Identifier
              </div>
              <div className="text-center text-white text-2xl font-bold font-Satoshi">
                Cover Amount
              </div>
              <div className="w-[153.05px] text-center text-white text-2xl font-bold font-Satoshi">
                Cover Period
              </div>
            </div>

            <div className="w-[1350px] h-auto pb-16 p-[31px] bg-white bg-opacity-10 rounded-[20px] border border-white border-opacity-25 backdrop-blur-[25px] justify-center items-center inline-flex">
              <div className="w-[1400px] h-auto relative flex-col justify-start items-start flex">
                {cartCovers.map((item, index) => (
                  <div
                    key={index}
                    className="w-[1175px] h-[54px] relative my-11"
                  >
                    <div className="w-[348.33px] h-[49px] left-0 top-[3px] absolute justify-start items-start gap-2.5 inline-flex">
                      <img
                        className="w-12 h-12"
                        src={item.imageURL}
                        alt="Cover Logo"
                      />
                      <div className="grow shrink basis-0 flex-col justify-center items-start gap-[5px] inline-flex">
                        <div className="text-white text-[22px] font-medium font-Satoshi leading-tight">
                          {item.protocol}
                        </div>
                        <div className="px-1 py-0.5 justify-center items-center gap-2.5 inline-flex">
                          <div className="w-[15.50px] h-[19.50px] relative"></div>
                          <div className="text-white text-sm font-normal font-Satoshi leading-tight">
                            {item.coverType}
                          </div>
                          {}
                        </div>
                      </div>
                    </div>
                    <div className="w-[264px] px-1.5 py-[6.75px] left-[327px] top-0 absolute bg-white bg-opacity-10 rounded-[10px] justify-start items-start gap-2.5 inline-flex">
                      <div className="px-[13px] py-[5.75px] rounded-[5px] justify-start items-start gap-2.5 flex">
                        <input
                          className="text-zinc-400 text-xl font-medium font-Satoshi leading-[27.10px]"
                          placeholder="Enter Address"
                          value={walletAddress}
                          onChange={(event) =>{
                            newArray[index].address = event.target.value
                            calculateTotalCost()
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-[267px] px-1.5 py-[6.75px] left-[642px] top-[1px] absolute bg-white bg-opacity-10 rounded-[10px] justify-between items-start inline-flex">
                      <div className="px-[13px] py-[5.75px] rounded-[5px] justify-start items-start gap-2.5 flex">
                        <input
                          className="text-zinc-400 text-xl font-medium font-Satoshi leading-[27.10px]"
                          placeholder="Cover Amount (ETH)"
                          onChange={(event) =>{
                              handleChange(event,index,'amount')
                            }}
                        />
                      </div>
                    </div>
                    <div className="px-1.5 py-[6.75px] left-[937px] top-[2px] absolute bg-white bg-opacity-10 rounded-[10px] justify-start items-start gap-2.5 inline-flex">
                      <div className="px-[13px] py-[5.75px] rounded-[5px] justify-start items-start gap-2.5 flex">
                        <input
                          className="text-zinc-400 text-xl font-medium font-Satoshi leading-[27.10px]"
                          onChange={(event) =>
                            {
                              handleChange(event,index,'days')
                            }
                          }
                        />
                      </div>
                      <div className="px-[13px] py-[5.75px] bg-white bg-opacity-20 rounded-[10px] justify-start items-center gap-[23px] flex">
                        <div className="text-gray-200 text-xl font-bold font-Satoshi leading-[27.10px]">
                          Days
                        </div>
                      </div>
                    </div>
                    <div className="w-9 h-9 relative" />
                    <div className="justify-end items-end  gap-14 inline-flex ml-[650px] mt-10">
                      <div className="flex-col justify-end items-end gap-[5px] inline-flex">
                        <div className="w-[242px] justify-between items-center inline-flex">
                          <div className="text-white text-base font-normal font-Satoshi capitalize">
                            daily Cost
                          </div>
                          <div className="text-zinc-300 text-lg font-bold font-Satoshi leading-tight">
                            {item.dailyCost}%
                          </div>
                        </div>
                        <div className="w-[242px] justify-between items-center inline-flex">
                          <div className="text-white text-base font-normal font-Satoshi capitalize">
                            Capacity
                          </div>
                          <div className="text-zinc-300 text-lg font-bold font-Satoshi leading-tight">
                            ~ {item.capacity} USD
                          </div>
                        </div>
                      </div>
                      <div className="text-zinc-300 text-lg font-bold font-Satoshi leading-tight">
                        {item.dateRange}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="justify-start items-center gap-[35px] inline-flex">
              <div className="w-[644px] p-[25px] bg-white bg-opacity-10 rounded-[20px] border border-white border-opacity-25 backdrop-blur-[25px] flex-col justify-center items-center gap-[15px] inline-flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-lg font-normal font-Satoshi capitalize">
                    Wallet Balance
                  </div>
                  <div className="text-white text-xl font-bold font-Satoshi leading-tight">
                    0.0000 ETH
                  </div>
                </div>

                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-lg font-normal font-Satoshi capitalize">
                    Cover Payment
                  </div>
                  <div className="text-teal-600 text-xl font-bold font-Satoshi leading-tight">
                    {totalCost} ETH
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-lg font-normal font-Satoshi capitalize">
                    Referral Code
                  </div>
                  <div className="px-[13px] py-[5.75px] rounded-[5px] justify-start items-start gap-2.5 flex">
                        <input
                          className="text-zinc-400 text-xl font-medium font-Satoshi leading-[27.10px]"
                          placeholder="Enter Referral Code"
                          // value={walletAddress}
                          // onChange={(event) =>
                          //   (newArray[index].address = event.target.value)
                          // }
                        />
                      </div>
                </div>
              </div>
              <div className="h-[150px] flex-col justify-between items-start inline-flex">
                <div className="flex-col justify-start items-start gap-2.5 flex">
                  <div className="w-[462px] text-white text-base font-normal font-Satoshi capitalize">
                    Please ensure you have read the terms and conditions and understand the scope of the following risk:
                  </div>
                  <div className="px-1 py-0.5 justify-center items-center gap-2.5 inline-flex">
                    <div className="w-[15.50px] h-[19.50px] relative"></div>
                    <div className="text-white text-sm font-normal font-Satoshi leading-tight">
                      Smart Contract Vulnerability
                    </div>
                  </div>
                  <div className="w-[462px] text-red-600 font-normal font-Satoshi capitalize">
                    {error == "validated" ? "" : error}
                  </div>
                </div>
                <div className="justify-start items-start gap-2.5 inline-flex">
                  
                  <input className="w-[19px] h-[19px] bg-zinc-300 bg-opacity-0 rounded-[1px] border border-white"
                   type="checkbox" id="checkbox1" onClick={(event)=>{
                    setCheckbox(event.target.checked)
                   }}></input>
                  <div className="text-white text-sm font-normal font-Satoshi leading-tight">
                    I agree to the terms and conditions and understand the scope of the risk
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-[35px] py-[15px] bg-gradient-to-r from-purple-600 to-cyan-400 rounded-[36px] cursor-pointer justify-start items-start gap-2.5 inline-flex"
          onClick={()=>{
            validate()
          }}
          >
            <div
              className="text-center text-white text-2xl font-bold font-Satoshi capitalize leading-tight "
            >
              Confirm
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
