import React, { useState } from 'react'
import { Accordion, Row, Col } from 'react-bootstrap'

const Faq = () => {

   
    return (
        <>
            {/* <Header /> */}
            <Row>
                <Col md="1" />
                <Col md="10">
                <div className="font-face-gm">
                    <div className="mint-text">
                       <div className="font-face-gm main-color">FAQs</div><br/>
                      
                        <div >
                            <Accordion defaultActiveKey="0">
                              <Accordion.Item eventKey="0">
                                <Accordion.Header className="panel-header">What is the total supply?</Accordion.Header>
                                <Accordion.Body className="panel-body">
                                  A Total of 7,025 unique Loot Toadz NFTs will be created.
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion><br/>
                            <Accordion defaultActiveKey="1">
                              <Accordion.Item eventKey="1">
                                <Accordion.Header className="panel-header">Why Loot Toadz?</Accordion.Header>
                                <Accordion.Body className="panel-body">
                                  LootToadz is inspired by <a href="https://twitter.com/cryptoadzNFT" target="blank">CrypToadz</a> x <a href="https://twitter.com/lootproject">lootproject</a>, a NFT project coming 100% On-chain on ERC721 standards, with token utility. Holders will be able to stake NFTs and earn daily reward tokens. Come be frens and !vibe
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion> <br/>
                            <Accordion defaultActiveKey="2">
                              <Accordion.Item eventKey="2">
                                <Accordion.Header className="panel-header">Wen Mint?</Accordion.Header>
                                <Accordion.Body className="panel-body">
                                  To be announced...
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion> <br/>
                            <Accordion defaultActiveKey="3">
                              <Accordion.Item eventKey="3">
                                <Accordion.Header className="panel-header">How to buy Loot Toadz?</Accordion.Header>
                                <Accordion.Body className="panel-body">
                                  Here are the steps on what you need to do to get your Loot Toadz NFT.<br/>
                                    <ol><li> Download the metamask.io extension on your browser</li>
                                    <li>Purchase Ethereum from various exchanges, such as Coinbase or Binance</li>
                                    <li>Send Ethereum from this exchange to your MetaMask wallet</li>
                                    <li>On launch day, open the Loot Toadz website and select the number of NFTs you wish to mint</li>
                                    <li>Click “MINT” button, Metamask will popup asking for connection</li>
                                    <li>Confirm the transaction and any associated fees</li>
                                    <li>Once you have made your purchase, your NFTs will appear in your wallet and on OpenSea</li></ol>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion> <br/>
                        </div>
                      
                    </div>
                </div>
                </Col>
                <Col md="1" />
            </Row>
        </>
    )
}

export default Faq