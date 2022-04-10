const postSendMsg = async (values) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": true,
    },
    body: JSON.stringify(values),
  };

  const fetchData = await fetch(`http://localhost:8080/sms`, requestOptions);

  const response = await fetchData.json();
  return response;
};


const SendMsgService = {
    postSendMsg
  };
  
  export default SendMsgService;