import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OnchainRiddle
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5FbDB2315678afecb367f032d93F642f64180aa3)
 */
export const onchainRiddleAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'riddleHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      { name: 'correct', internalType: 'bool', type: 'bool', indexed: false },
      {
        name: 'anwser',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'AnswerAttempt',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'riddle',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'RiddleSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'Winner',
  },
  {
    type: 'function',
    inputs: [],
    name: 'bot',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isActive',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'riddle',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_riddle', internalType: 'string', type: 'string' },
      { name: '_answerHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'setRiddle',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_answer', internalType: 'string', type: 'string' }],
    name: 'submitAnswer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'winner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

/**
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5FbDB2315678afecb367f032d93F642f64180aa3)
 */
export const onchainRiddleAddress = {
  31337: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
  11155111: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
} as const

/**
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5FbDB2315678afecb367f032d93F642f64180aa3)
 */
export const onchainRiddleConfig = {
  address: onchainRiddleAddress,
  abi: onchainRiddleAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onchainRiddleAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5FbDB2315678afecb367f032d93F642f64180aa3)
 */
export const useReadOnchainRiddle = /*#__PURE__*/ createUseReadContract({
  abi: onchainRiddleAbi,
  address: onchainRiddleAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onchainRiddleAbi}__ and `functionName` set to `"bot"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5FbDB2315678afecb367f032d93F642f64180aa3)
 */
export const useReadOnchainRiddleBot = /*#__PURE__*/ createUseReadContract({
  abi: onchainRiddleAbi,
  address: onchainRiddleAddress,
  functionName: 'bot',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onchainRiddleAbi}__ and `functionName` set to `"isActive"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5FbDB2315678afecb367f032d93F642f64180aa3)
 */
export const useReadOnchainRiddleIsActive = /*#__PURE__*/ createUseReadContract(
  {
    abi: onchainRiddleAbi,
    address: onchainRiddleAddress,
    functionName: 'isActive',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onchainRiddleAbi}__ and `functionName` set to `"riddle"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5FbDB2315678afecb367f032d93F642f64180aa3)
 */
export const useReadOnchainRiddleRiddle = /*#__PURE__*/ createUseReadContract({
  abi: onchainRiddleAbi,
  address: onchainRiddleAddress,
  functionName: 'riddle',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onchainRiddleAbi}__ and `functionName` set to `"winner"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5FbDB2315678afecb367f032d93F642f64180aa3)
 */
export const useReadOnchainRiddleWinner = /*#__PURE__*/ createUseReadContract({
  abi: onchainRiddleAbi,
  address: onchainRiddleAddress,
  functionName: 'winner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link onchainRiddleAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5FbDB2315678afecb367f032d93F642f64180aa3)
 */
export const useWriteOnchainRiddle = /*#__PURE__*/ createUseWriteContract({
  abi: onchainRiddleAbi,
  address: onchainRiddleAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link onchainRiddleAbi}__ and `functionName` set to `"setRiddle"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5FbDB2315678afecb367f032d93F642f64180aa3)
 */
export const useWriteOnchainRiddleSetRiddle =
  /*#__PURE__*/ createUseWriteContract({
    abi: onchainRiddleAbi,
    address: onchainRiddleAddress,
    functionName: 'setRiddle',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link onchainRiddleAbi}__ and `functionName` set to `"submitAnswer"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5FbDB2315678afecb367f032d93F642f64180aa3)
 */
export const useWriteOnchainRiddleSubmitAnswer =
  /*#__PURE__*/ createUseWriteContract({
    abi: onchainRiddleAbi,
    address: onchainRiddleAddress,
    functionName: 'submitAnswer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link onchainRiddleAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5FbDB2315678afecb367f032d93F642f64180aa3)
 */
export const useSimulateOnchainRiddle = /*#__PURE__*/ createUseSimulateContract(
  { abi: onchainRiddleAbi, address: onchainRiddleAddress },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link onchainRiddleAbi}__ and `functionName` set to `"setRiddle"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5FbDB2315678afecb367f032d93F642f64180aa3)
 */
export const useSimulateOnchainRiddleSetRiddle =
  /*#__PURE__*/ createUseSimulateContract({
    abi: onchainRiddleAbi,
    address: onchainRiddleAddress,
    functionName: 'setRiddle',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link onchainRiddleAbi}__ and `functionName` set to `"submitAnswer"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5FbDB2315678afecb367f032d93F642f64180aa3)
 */
export const useSimulateOnchainRiddleSubmitAnswer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: onchainRiddleAbi,
    address: onchainRiddleAddress,
    functionName: 'submitAnswer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link onchainRiddleAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5FbDB2315678afecb367f032d93F642f64180aa3)
 */
export const useWatchOnchainRiddleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: onchainRiddleAbi,
    address: onchainRiddleAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link onchainRiddleAbi}__ and `eventName` set to `"AnswerAttempt"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5FbDB2315678afecb367f032d93F642f64180aa3)
 */
export const useWatchOnchainRiddleAnswerAttemptEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: onchainRiddleAbi,
    address: onchainRiddleAddress,
    eventName: 'AnswerAttempt',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link onchainRiddleAbi}__ and `eventName` set to `"RiddleSet"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5FbDB2315678afecb367f032d93F642f64180aa3)
 */
export const useWatchOnchainRiddleRiddleSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: onchainRiddleAbi,
    address: onchainRiddleAddress,
    eventName: 'RiddleSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link onchainRiddleAbi}__ and `eventName` set to `"Winner"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5FbDB2315678afecb367f032d93F642f64180aa3)
 */
export const useWatchOnchainRiddleWinnerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: onchainRiddleAbi,
    address: onchainRiddleAddress,
    eventName: 'Winner',
  })
