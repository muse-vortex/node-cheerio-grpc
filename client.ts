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

const htmlContent = `
  <html>
    <head><title>Hello Page</title></head>
    <body>
      <a href="https://example.com">Example</a>
      <a href="https://google.com">Google 1</a>
      <a href="https://facebook.com>Facebook 1</a>

    </body>
  </html>
`;

const parserScript = `
    const title = $('title').text();
    const links = [];
    $('a').each((_, el) => {
      links.push({ text: $(el).text(), href: $(el).attr('href') });
    });
    return { title, links };
`;

client.ParseHtml(
  { htmlContent: htmlContent, parseScript: parserScript },
  (err: Error, response: ParseHtmlResponse) => {
    if (err) return console.error(err);
    const data = JSON.parse(response.data!);
    console.log("Parsed Data:", data);
  }
);
