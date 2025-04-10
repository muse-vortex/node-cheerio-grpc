import * as cheerio from "cheerio";
import * as grpc from "@grpc/grpc-js";
import { ParseHtmlRequest__Output } from "./proto/htmlParserPackage/ParseHtmlRequest";
import { ParseHtmlResponse } from "./proto/htmlParserPackage/ParseHtmlResponse";

export const parseHtml = (
  call: grpc.ServerUnaryCall<ParseHtmlRequest__Output, ParseHtmlResponse>,
  callback: grpc.sendUnaryData<ParseHtmlResponse>
) => {
  const { htmlContent, parseScript } = call.request;

  const $ = cheerio.load(htmlContent!);

  try {
    var scriptFn = new Function("$", parseScript!);
    const result = scriptFn($);
    callback(null, { data: JSON.stringify(result) });
  } catch (err) {
    console.error("Parser script error:", err);
    callback(null, {
      data: JSON.stringify({ error: "Invalid parser script or runtime error" }),
    });
  }
};
