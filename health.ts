import * as grpc from "@grpc/grpc-js";
import { HealthRequest__Output } from "./proto/htmlParserPackage/HealthRequest";
import { HealthResponse } from "./proto/htmlParserPackage/HealthResponse";

export const health = (
  req: grpc.ServerUnaryCall<HealthRequest__Output, HealthResponse>,
  res: grpc.sendUnaryData<HealthResponse>
) => {
  res(null, { message: "Everything is working" });
};
