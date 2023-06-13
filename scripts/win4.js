// add the game address here and update the contract name if necessary
const gameAddr = "0x70e0bA845a1A0F2DA3359C97E0285013525FFC49";
const contractName = "Game4";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
       
        const tx3 = await game.win(56);
        await tx3.wait();


    

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx3.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
