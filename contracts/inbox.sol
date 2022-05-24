pragma solidity ^0.4.17;

contract Inbox{
    string public message;

    function Inbox(string  initialMessage) public{
        message = initialMessage;
    }

    function setMessage(string newMessage) public{
        message = newMessage;
    }
    function doMath(int a,int b){
        a+b;
        b-a;
        
    }
    //not needed cos we can access it
    //  function getMessage() public view returns (string){
    //     return message;
    // }
}