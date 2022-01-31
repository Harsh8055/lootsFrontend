import React, { useState } from 'react'
import { Row, Col,Button } from 'react-bootstrap'
import {ethers} from "ethers"
// import  traits  from '../json/traits.json';
// import nft from "../json/nft.json";
import newnft from "../json/newnft.json";
// import { traits } from '../json/json.js';

const ContractAddress = "0x167B6e1B35E8DABf92FCBcEB738dd3f20629aEBA";
const Counter = () => {

    const [count,setCount]=useState(0);
    const [account, setaccount] = useState("");
    const checkWalletConnected = async () => {
		// window.ethereum.enable()
		const { ethereum } = window
		if(!ethereum) {
			console.log('Install Metamask')
			return
		}

		const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
        setaccount(accounts[0])
        console.log(account);
        
		if(accounts.length !== 0) {
			const account = accounts[0]

			console.log("Found Account, ", account)
			let provider = new ethers.providers.Web3Provider(window.ethereum)
			let network = await provider.getNetwork()
			
			if(network.name !==  "maticmum") {
				alert("not connected to polygon mumbai testnet, please change the network to polygon mumbai testnet ")
			}
			else {
				console.log('maticmum connected');
				
			}
		} else {
			console.log("Create a Ethereum Account")
		}
	}

    const incrementCount= () => {
       setCount(count+1);
      }

      const decrementCount=()=>{
        if(count > 0) {  
        setCount(count-1);
        }
        else {
            setCount(count)
        }
      }


    //   function getAttributes(num) {
    //    let arrayOfTraits = []
    //    arrayOfTraits.push(traits[0]);
    //    console.log(traits[0]);
       
       
    //   }

    async function mint() {
        checkWalletConnected();

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(ContractAddress, newnft.abi, signer);

        
       try {
       console.log(account);
       
        const minttxn = await contract.mint(account, 1)
        const txn = await minttxn.wait();
        console.log(txn);
        // const uri = await contract.tokenURI();
        // console.log(uri);
        // let link = `https://testnets.opensea.io/assets/mumbai/${ContractAddress}/${Number(id)+1}`
        

       } catch (error) {
           alert(error.message);
           
           
       }
            
            



            // const minttxn = await contract.mint(Number(id), traits[id][0].value, traits[id][1].value, traits[id][2].value, traits[id][3].value, `${traits[4].value}` )
            // const txn = await minttxn.wait();
            // console.log(txn);

        
        
    } 

    
    return (
        <>
            {/* <Header /> */}
           
                <Row>
                    <Col md="6">
                    <center>
                    <div className="frame font-face-gm">
                        <img src='../assets/gif.png' alt=""/>
                    </div>
                    </center>
                    </Col>
                    <Col md="6">
                <div className="frame font-face-gm">
                    <center>
                    <div className="mint-text">
                        I WANT TO MINT
                        <div className="loot-text">
                            LOOTS TOADZ
                        </div>
                        <div className="btns">
                        <Button variant="dark" className="btns"
                            title={"-"}
                            onClick={() => decrementCount()}
                        >-</Button>{count}
                          <Button variant="dark"  className="btns"
                            title={"+"}
                            onClick={() => incrementCount()}
                        >+</Button>
                        </div>
                        <Button className="btn-mint" onClick={mint}>MINT NOW</Button>
                    </div>
                    </center>
                </div>
                </Col>
                </Row>
           

        </>
    )
}

export default Counter