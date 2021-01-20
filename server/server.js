const express = require("express");
const app = express();
const baseDir = `${__dirname}/../client/build/`;
app.use(express.static(`${baseDir}`));
app.use(express.json());

app.get("/", (req, res) => res.sendfile("index.html", { root: baseDir }));

app.post("/", async (req, res) => {
    const invoiceData = req.body;
    const date = new Date();
    invoiceData.date = date.getUTCDate() + "/" + (date.getMonth() + 1) + "/" + date.getUTCFullYear();
    generateInvoice(
        invoiceData,
        `${__dirname}/../invoices/${invoiceData.number}.pdf`,
        () => {
            res.status(200).send({ success: true });
        },
        () => {
            res.status(400).send({ success: false });
        }
    );
});

var https = require("https");
var fs = require("fs");

function generateInvoice(invoice, filename, success, error) {
    var postData = JSON.stringify(invoice);
    var options = {
        hostname: "invoice-generator.com",
        port: 443,
        path: "/",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(postData),
        },
    };

    var file = fs.createWriteStream(filename);

    var req = https.request(options, function (res) {
        res.on("data", function (chunk) {
            file.write(chunk);
        }).on("end", function () {
            file.end();
            if (typeof success === "function") {
                success();
            }
        });
    });
    req.write(postData);
    req.end();

    if (typeof error === "function") {
        req.on("error", error);
    }
}

const port = 5000;
app.listen(port);
