import mempoolJS from "./../../../src/index";

const init = async () => {
  try {
    const { bitcoin: { addresses } } = mempoolJS();
    
    const address = 'bc1qgdjqv0av3q56jvd82tkdjpy7gdp9ut8tlqmgrpmv24sq90ecnvqqjwvw97" 
                     "bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2" 
                      "bc1qazcm763858nkj2dj986etajv6wquslv8uxwczt"
                        "3M219KR5vEneNb47ewrPfWyb5jQ2DjxRP6"
  
    const myAddress = await addresses.getAddress({ address });
    console.log(myAddress);
    
    const addressTxs = await addresses.getAddressTxs({ address });
    console.log(addressTxs);
    
    const addressTxsChain = await addresses.getAddressTxsChain({ address });
    console.log(addressTxsChain);
    
    const addressTxsMempool = await addresses.getAddressTxsMempool({ address });
    console.log(addressTxsMempool);
    
    const addressTxsUtxo = await addresses.getAddressTxsUtxo({ address });
    console.log(addressTxsUtxo);
  } catch (error) {
    console.log(error);
  }
};
init();
