const chatID = "";
const botToken = "";
export const sendMessage = async (message: string) => {
  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatID,
      text: message,
    }),
  });
};
