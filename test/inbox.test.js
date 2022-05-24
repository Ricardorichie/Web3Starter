const assert = require("assert");
const ganache = require("ganache-cli"); //local ethereum test network
const Web3 = require("web3"); //constructor function used to create instances of web3
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require("../compile");

let accounts;
let inbox;
const INITIAL_STRING = "Hi there!";

beforeEach(async () => {
  //get all accounts
  accounts = await web3.eth.getAccounts();

  //use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: [INITIAL_STRING],
    })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    // console.log("inbox", inbox);
    assert.ok(inbox.options.address);
  });
  it("it has a defaut message", async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, INITIAL_STRING);
  });
  it("can change the message", async () => {
    await inbox.methods.setMessage("bye").send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, "bye");
  });
});

// class Car {
//   park() {
//     return "stopped";
//   }
//   drive() {
//     return "vroom";
//   }
// }

// let car;
// beforeEach(() => {
//   car = new Car();
// });

// describe("Testing Car class", () => {
//   it("testing the park function", () => {
//     assert.equal(car.park(), "stopped");
//   });
//   it("testing the drive function", () => {
//     assert.equal(car.drive(), "vroom");
//   });
// });
