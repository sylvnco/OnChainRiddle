
import hre from "hardhat";
import { assert, expect } from "chai";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { keccak256, toBytes } from "viem";

const riddleText = "I add flavor to your dishes and keep your hash safe. What am I?"

const deploy = async () => {
    const onChainRiddle = await hre.viem.deployContract("OnchainRiddle" as any);
    await onChainRiddle.write.setRiddle([riddleText, keccak256(toBytes("salt"))]);
  
    return { onChainRiddle };
  };


  describe("OnChainRiddle Contract Tests", function () {
    it("should set riddle  correctly", async function () {
      const { onChainRiddle } = await loadFixture(deploy);
  

      const isActive = await onChainRiddle.read.isActive();

      assert.equal(isActive, true);
  
      const riddle = await onChainRiddle.read.riddle();
      assert.equal(riddle, riddleText);
    });
  
    it("should submit answer correctly", async function () {
      const { onChainRiddle } = await loadFixture(deploy);

      await onChainRiddle.write.submitAnswer(["salt"]);

      const isActive = await onChainRiddle.read.isActive();
      assert.equal(isActive, false);
    });

    it("should not submit answer if riddle is not active", async function () {
      const { onChainRiddle } = await loadFixture(deploy);
      await onChainRiddle.write.submitAnswer(["salt"]);

      await expect(onChainRiddle.write.submitAnswer(["salt"])).to.be.rejectedWith(
        "No active riddle"
      );
    });
  });