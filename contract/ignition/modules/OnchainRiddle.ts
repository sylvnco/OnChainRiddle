import { buildModule} from "@nomicfoundation/hardhat-ignition/modules";
import {keccak256, toBytes} from "viem";

export default buildModule("OnchainRiddleModule", (m) => {
    const onchainRiddle = m.contract("OnchainRiddle");

    m.call(onchainRiddle, "setRiddle", ["I add flavor to your dishes and keep your hash safe. What am I?", keccak256(toBytes("salt"))]);

    return {onchainRiddle};
});