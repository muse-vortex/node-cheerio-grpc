import { HealthResponse } from "./proto/htmlParserPackage/HealthResponse";
import { ParseHtmlResponse } from "./proto/htmlParserPackage/ParseHtmlResponse";

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");

// Load proto
const PROTO_FILE = path.join(__dirname, "./proto/htmlparser.proto");
const packageDefinition = protoLoader.loadSync(PROTO_FILE);
const proto = grpc.loadPackageDefinition(packageDefinition);

const client = new proto.htmlParserPackage.HtmlParser(
  "localhost:8082",
  grpc.credentials.createInsecure()
);
client.Health({}, (err, response: HealthResponse) => {
  if (err) return console.error(err);
  console.log("Health message:", response.message);
});
