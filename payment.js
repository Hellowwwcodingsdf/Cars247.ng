const express = require("express");
const fs = require("fs");
const app = express();

const htmlFilePath = __dirname + "/payment.html";
const secretKey = "sk_live_20f14f2395daebf31ffbc83cc154f983a46eab5d";

const carToSell = {
  name: "Lexus LX570",
  yearMade: "2015",
  price: 20000,
  buys: 0,
};
const customerPurchasing = {
  fullName: "Archimedes Jacob",
  email: "miketheerudite993@gmail.com",
};

const https = require("https");

app.get("/paystack", function (req, res) {
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

  const reqpaystack = https
    .request(options, (respaystack) => {
      let data = "";

      respaystack.on("data", (chunk) => {
        data += chunk;
      });

      respaystack.on("end", () => {
        const responseData = JSON.parse(data);
        const authorizedUrl = responseData.data.authorization_url;
        fs.readFile(htmlFilePath, "utf8", (err, htmlData) => {
          if (err) {
            console.error(err);
            res.status(500).send("Error reading HTML file");
          } else {
            const anchorTag = `<a class="payBtn" href="${authorizedUrl}" target="_blank" style="color: white; background-color: green; padding: 10px;">Click here to complete payment</a>`;
            const updatedHtmlData = htmlData.replace(
              '<div id="responseContainer"></div>',
              `<div id="responseContainer">${anchorTag}</div>`
            );
            res.send(updatedHtmlData);
          }
        });
        let transactionReference = responseData.reference;
        return transactionReference;
      });
    })
    .on("error", (error) => {
      console.error(error);
      res.status(500).send("Error initializing transaction");
    });

  reqpaystack.write(params);
    reqpaystack.end();
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.post("/paystack/verify", (req, res) => {
  const params = JSON.stringify({
    email: customerPurchasing.email,
    amount: carToSell.price,
  });
  const options = {
    hostname: "api.paystack.co",
    port: 443,
    path: `/transaction/verify/:${transactionReference}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${secretKey}`,
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

      // Send the transaction status to the client
      res.send(`Transaction Status: ${transactionStatus}`);
    });
  });

  reqVerify.on("error", (error) => {
    console.error(error);
    res.status(500).send("Error verifying transaction");
  });

  reqVerify.end();
});
app.listen(5500, () => {
  console.log("Server running on port 5000");
});
