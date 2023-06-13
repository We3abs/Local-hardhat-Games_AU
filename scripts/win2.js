// add the game address here and update the contract name if necessary
const gameAddr = "0xc3e53F4d16Ae77Db1c982e75a937B9f60FE63690";
const contractName = "Game2";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
        const tx1 = await game.setX(45);
        await tx1.wait();
        const tx2 = await game.setY(5);
        await tx2.wait();
        const tx3 = await game.win();
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
