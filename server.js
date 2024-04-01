const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
const port = 5500;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const carToSell = {
  id: 1,
  name: "Lexus LX570",
  yearMade: "2015",
  price: 20000,
  buys: 0,
};
const customerPurchasing = {
  fullName: "Archimedes Jacob",
  email: "miketheerudite993@gmail.com",
};
const secretKey = "sk_live_20f14f2395daebf31ffbc83cc154f983a46eab5d";
let transactionReference = "";

// Endpoint to initialize transaction and get reference
app.get("/paystack", (req, res) => {
  const params = JSON.stringify({
    email: customerPurchasing.email,
    amount: carToSell.price,
  });

  const options = {
    hostname: "api.paystack.co",
    port: 443,
    path: "/transaction/initialize",
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json",
    },
  };

  const reqpaystack = https.request(options, (respaystack) => {
    let data = "";

    respaystack.on("data", (chunk) => {
      data += chunk;
    });

    respaystack.on("end", () => {
      const responseData = JSON.parse(data);
      transactionReference = responseData.data.reference;
      const anchorTag = `<a class="payBtn" href="${authorizedUrl}" target="_blank" style="color: white; background-color: green; padding: 10px;">Click here to complete payment</a>`;
      res.send(anchorTag);
    });
  });

  reqpaystack.on("error", (error) => {
    console.error(error);
    res.status(500).send("Error initializing transaction");
  });

  reqpaystack.write(params);
  reqpaystack.end();
});

app.get("/verify", (req, res) => {
  const secretKey = "YOUR_SECRET_KEY";

  const options = {
    hostname: "api.paystack.co",
    port: 443,
    path: `/transaction/verify/${transactionReference}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json",
    },
  };

  const reqVerify = https.request(options, (resVerify) => {
    let data = "";

    resVerify.on("data", (chunk) => {
      data += chunk;
    });

    resVerify.on("end", () => {
      const responseData = JSON.parse(data);
      const transactionStatus = responseData.data.status;

      res.send(`Transaction Status: ${transactionStatus}`);
    });
  });

  reqVerify.on("error", (error) => {
    console.error(error);
    res.status(500).send("Error verifying transaction");
  });

  reqVerify.end();
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
