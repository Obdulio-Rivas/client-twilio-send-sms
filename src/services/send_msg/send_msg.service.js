const postSendMsg = async (values) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": true,
    },
    body: JSON.stringify(values),
  };

  const fetchData = await fetch(`https://api-twilio-send-sms.herokuapp.com/sms`, requestOptions);

  const response = await fetchData.json();
  return response;
};


const SendMsgService = {
    postSendMsg
  };
  
  export default SendMsgService;