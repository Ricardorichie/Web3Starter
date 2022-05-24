pragma solidity ^0.4.17;
//https://rinkeby.infura.io/v3/046198ae63034b209694da840475ca54
contract Inbox{
    string public message;

    function InboxCon(string  initialMessage) public{
        message = initialMessage;
    }

    function setMessage(string newMessage) public{
        message = newMessage;
    }
    //not needed cos we can access it
    //  function getMessage() public view returns (string){
    //     return message;
    // }
}