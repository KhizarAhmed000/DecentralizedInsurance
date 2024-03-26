import React, { useEffect, useReducer, useState } from "react";
import styles from "../../../src/App.css";
import { useParams } from "react-router-dom";
import images from "../../services/utilities/images";
import { selectWalletAddress } from "../../store/WalletAddress";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import backendUrl from "../../services/backendurl";
import { useLocation } from 'react-router-dom';
import { createClaim } from "../../services/API";

export default function SubmitClaim() {

    const navigate = useNavigate();
    const { state } = useLocation();
    const [covers, setCovers] = useState([]);


    const userdata = state?.userdata;
    const walletAddress = state?.walletAddress;
    const userCover = state?.userCover
    const [lossTime, setLossTime] = useState('');
    const [lossAmount, setLossAmount] = useState(0);
    const [claimAmount, setClaimAmount] = useState(0);
    const [description, setDescription] = useState('');

    useEffect(() => {
        console.log(userdata)
    }, [userdata])

    const handleCreateClaim = () => {
        // const body = {
        //     protocol: userCover.protocol,
        //     coverType: userCover.coverType,
        //     ownderAddress: walletAddress,
        //     coverAmount: userdata.amount,
        //     coverPeriod: userdata.days,
        //     lossTime,
        //     lossAmount: parseInt(lossAmount),
        //     claimAmount: parseInt(claimAmount),
        //     description,
        // }
        // console.log(body)
        // const response = createClaim(body)
        // console.log(response)


        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            protocol: userCover.protocol,
            coverType: userCover.coverType,
            ownderAddress: walletAddress,
            coverAmount: userdata.amount,
            coverPeriod: userdata.days,
            lossTime,
            lossAmount: parseInt(lossAmount),
            claimAmount: parseInt(claimAmount),
            description,
        });
        console.log('this is body',raw)
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${backendUrl}claim/createClaim`, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    }


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
                <div className="flex-col justify-start items-center gap-[75px] flex">

                    <div className="text-center text-white text-5xl font-bold font-Satoshi relative right-[500px]">
                        Your Covers
                    </div>

                    <div className="w-[1302px] h-[395px] justify-start items-start gap-[35px] inline-flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[25px] inline-flex">
                            <div className="self-stretch text-white text-2xl font-bold font-Satoshi">Cover Info</div>
                            <div className="self-stretch h-[338px] p-[25px] bg-white bg-opacity-10 rounded-[20px] border border-white border-opacity-25 backdrop-blur-[25px] flex-col justify-center items-center gap-5 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-white text-lg font-normal font-Satoshi capitalize">Protocol</div>
                                    <div className="text-white text-xl font-bold font-Satoshi leading-tight">{userCover.protocol}</div>
                                </div>
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-white text-lg font-normal font-Satoshi capitalize">Cover Type</div>
                                    <div className="text-white text-xl font-bold font-Satoshi leading-tight">{userCover.coverType}</div>
                                </div>
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-white text-lg font-normal font-Satoshi capitalize">Owner</div>
                                    <div className="text-white text-xl font-bold font-Satoshi leading-tight">{walletAddress}</div>
                                </div>
                                {/* <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-white text-lg font-normal font-Satoshi capitalize">Active Cover Amount</div>
                                    <div className="text-white text-xl font-bold font-Satoshi leading-tight">12.2361 ETH</div>
                                </div> */}
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-white text-lg font-normal font-Satoshi capitalize">Total Cover Amount</div>
                                    <div className="text-white text-xl font-bold font-Satoshi leading-tight">{userdata.amount}</div>
                                </div>
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-white text-lg font-normal font-Satoshi capitalize">Cover Period</div>
                                    <div className="text-white text-xl font-bold font-Satoshi leading-tight">{userdata.days}</div>
                                </div>
                                {/* <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-white text-lg font-normal font-Satoshi capitalize">Cover Wording</div>
                                    <div className="text-teal-600 text-xl font-medium font-Satoshi leading-tight">Learn More</div>
                                </div> */}
                            </div>
                        </div>
                        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-[25px] inline-flex">
                            <div className="self-stretch text-white text-2xl font-bold font-Satoshi">Claim Info</div>
                            <div className="self-stretch grow shrink basis-0 p-[25px] bg-white bg-opacity-10 rounded-[20px] border border-white border-opacity-25 backdrop-blur-[25px] flex-col justify-center items-center gap-5 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-white text-lg font-normal font-Satoshi capitalize">Loss Event Time</div>
                                    <div className="h-[49px] px-2.5 py-[6.75px]  rounded-[10px] justify-between items-center flex">
                                        <input
                                            onChange={(event) => { setLossTime(event.target.value) }}
                                            className="text-white text-xl font-bold font-Satoshi leading-tight py-1 rounded-l px-2" type="datetime-local" />

                                    </div>
                                </div>
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-white text-lg font-normal font-Satoshi capitalize">Loss Amount</div>
                                    <div className="text-white text-xl font-bold font-Satoshi leading-tight">
                                        <input className="p-1 rounded-l" type="number" onChange={(event) => { setLossAmount(event.target.value) }} /></div>
                                </div>
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-white text-lg font-normal font-Satoshi capitalize">Claim Amount</div>
                                    <div className="text-white text-xl font-bold font-Satoshi leading-tight">
                                        <input className="p-1 rounded-l" type="number"
                                            onChange={(event) => { setClaimAmount(event.target.value) }}
                                        /></div>
                                </div>
                                <div className="self-stretch grow shrink basis-0 flex-col justify-center items-start gap-2.5 flex">
                                    <div className="text-white text-lg font-normal font-Satoshi capitalize">Description (Details provided here will be made public)</div>
                                    <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
                                        <div className="self-stretch grow shrink basis-0 px-1.5 py-[6.75px] bg-white bg-opacity-10 rounded-[10px] flex-col justify-start items-start gap-2.5 flex">
                                            <input
                                                onChange={(event) => { setDescription(event.target.value) }}
                                                className="w-[494px] text-neutral-400 text-[13px] font-normal font-Satoshi leading-none" placeholder="Please describe the claim with details, e.g. the timeline of events, wallet addresses that suffer losses, related transaction hashes, etc." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="w-[634px] h-[286px] flex-col justify-end items-end gap-5 inline-flex relative left-[340px]">
                        <div className="self-stretch px-2.5 justify-start items-start gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-white text-base font-normal font-Satoshi lowercase">Please send confidential information and supporting documents of proof of loss<br />to claims@dInsurance.com</div>
                        </div>
                        <div className="h-[152px]   p-[25px] rounded-[20px] border border-white border-opacity-50 backdrop-blur-[25px] flex-col justify-center items-center gap-[15px] flex">
                            <div className="self-stretch justify-between items-center inline-flex">
                                <div className="text-white text-lg font-normal font-Satoshi capitalize mr-10">Fee rate for Claim Application</div>
                                <div className="text-white text-xl font-bold font-Satoshi leading-tight">0.5%</div>
                            </div>
                            <div className="self-stretch justify-between items-center inline-flex">
                                <div className="text-white text-lg font-normal font-Satoshi capitalize">Fees for Claim Application</div>
                                <div className="text-white text-xl font-bold font-Satoshi leading-tight">0 ETH</div>
                            </div>
                            <div className="self-stretch justify-between items-center inline-flex">
                                <div className="text-white text-lg font-normal font-Satoshi capitalize">Wallet Balance</div>
                                <div className="text-white text-xl font-bold font-Satoshi leading-tight">12.412 ETH</div>
                            </div>
                        </div>
                        <div className="px-[35px] py-[15px] bg-teal-600 rounded-[36px] justify-start items-start gap-2.5 inline-flex">
                            <div className="text-center text-black text-xl font-bold font-Satoshi capitalize leading-tight"
                                onClick={handleCreateClaim}
                            >Confirm</div>
                        </div>
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
        </>
    );
}
