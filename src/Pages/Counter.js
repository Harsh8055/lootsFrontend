import React, { useState } from 'react'
import { Row, Col,Button } from 'react-bootstrap'
import {ethers} from "ethers"
import  traits  from '../json/traits.json';
import nft from "../json/nft.json";
// import { traits } from '../json/json.js';

const ContractAddress = "0x2Dcf41413d38a770860832c0F4C53d5E0230Ff82";
const Counter = () => {

    const [count,setCount]=useState(0);
    
    const checkWalletConnected = async () => {
		const { ethereum } = window
		
		if(!ethereum) {
			console.log('Install Metamask')
			return
		}

		const accounts = await ethereum.request({ method: 'eth_accounts' })

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

        const contract = new ethers.Contract(ContractAddress, nft.abi, signer);

        const id  = await contract.getCurrentJsonId();
        console.log("id", id, traits[id][0].value, traits[id][1].value);
        
        const minttxn = await contract.mint(Number(id), traits[id][0].value, traits[id][1].value, traits[id][2].value, traits[id][3].value, traits[id][4].value.toString() )
        const txn = await minttxn.wait();
        console.log(txn);
        
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