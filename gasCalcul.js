import fetch from "node-fetch";
async function gasCalcul(amount){
    const rep = await fetch("https://gasstation-mainnet.matic.network");
    const obj = await rep.json();
    
    const fast = Math.ceil(amount * obj.fast);
    const fastest = Math.ceil(amount * obj.fastest);
    const safeLow = Math.ceil(amount * obj.safeLow);
    const standard = Math.ceil(amount * obj.standard);
    return {
      fast : fast,
      fastest: fastest,
      safeLown: safeLow,
      standard: standard
    }
}

export default gasCalcul;
