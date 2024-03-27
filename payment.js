const https = require("https");
const secretKey = "sk_live_20f14f2395daebf31ffbc83cc154f983a46eab5d";

const carToSell = {
  name: "Lexus LX570",
  yearMade: "2015",
  price: 200,
  buys: 0,
};
const customerPurchasing = {
  fullName: "Archimedes Jacob",
  email: "miketheerudite993@gmail.com",
};

const params = JSON.stringify({
  email: `${customerPurchasing.email}`,
  amount: `${carToSell.price}`,
});

const options = {
  hostname: "api.paystack.co",
  port: 443,
  path: "/transaction/initialize",
  method: "POST",
  headers: {
    Authorization: `${secretKey}`,
    "Content-Type": "application/json",
  },
};

const req = https
  .request(options, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      console.log(JSON.parse(data));
    });
  })
  .on("error", (error) => {
    console.error(error);
  });

req.write(params);
req.end();
