// Original file: proto/htmlparser.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { HealthRequest as _htmlParserPackage_HealthRequest, HealthRequest__Output as _htmlParserPackage_HealthRequest__Output } from '../htmlParserPackage/HealthRequest';
import type { HealthResponse as _htmlParserPackage_HealthResponse, HealthResponse__Output as _htmlParserPackage_HealthResponse__Output } from '../htmlParserPackage/HealthResponse';
import type { ParseHtmlRequest as _htmlParserPackage_ParseHtmlRequest, ParseHtmlRequest__Output as _htmlParserPackage_ParseHtmlRequest__Output } from '../htmlParserPackage/ParseHtmlRequest';
import type { ParseHtmlResponse as _htmlParserPackage_ParseHtmlResponse, ParseHtmlResponse__Output as _htmlParserPackage_ParseHtmlResponse__Output } from '../htmlParserPackage/ParseHtmlResponse';

export interface HtmlParserClient extends grpc.Client {
  Health(argument: _htmlParserPackage_HealthRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_htmlParserPackage_HealthResponse__Output>): grpc.ClientUnaryCall;
  Health(argument: _htmlParserPackage_HealthRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_htmlParserPackage_HealthResponse__Output>): grpc.ClientUnaryCall;
  Health(argument: _htmlParserPackage_HealthRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_htmlParserPackage_HealthResponse__Output>): grpc.ClientUnaryCall;
  Health(argument: _htmlParserPackage_HealthRequest, callback: grpc.requestCallback<_htmlParserPackage_HealthResponse__Output>): grpc.ClientUnaryCall;
  health(argument: _htmlParserPackage_HealthRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_htmlParserPackage_HealthResponse__Output>): grpc.ClientUnaryCall;
  health(argument: _htmlParserPackage_HealthRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_htmlParserPackage_HealthResponse__Output>): grpc.ClientUnaryCall;
  health(argument: _htmlParserPackage_HealthRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_htmlParserPackage_HealthResponse__Output>): grpc.ClientUnaryCall;
  health(argument: _htmlParserPackage_HealthRequest, callback: grpc.requestCallback<_htmlParserPackage_HealthResponse__Output>): grpc.ClientUnaryCall;
  
  ParseHtml(argument: _htmlParserPackage_ParseHtmlRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_htmlParserPackage_ParseHtmlResponse__Output>): grpc.ClientUnaryCall;
  ParseHtml(argument: _htmlParserPackage_ParseHtmlRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_htmlParserPackage_ParseHtmlResponse__Output>): grpc.ClientUnaryCall;
  ParseHtml(argument: _htmlParserPackage_ParseHtmlRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_htmlParserPackage_ParseHtmlResponse__Output>): grpc.ClientUnaryCall;
  ParseHtml(argument: _htmlParserPackage_ParseHtmlRequest, callback: grpc.requestCallback<_htmlParserPackage_ParseHtmlResponse__Output>): grpc.ClientUnaryCall;
  parseHtml(argument: _htmlParserPackage_ParseHtmlRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_htmlParserPackage_ParseHtmlResponse__Output>): grpc.ClientUnaryCall;
  parseHtml(argument: _htmlParserPackage_ParseHtmlRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_htmlParserPackage_ParseHtmlResponse__Output>): grpc.ClientUnaryCall;
  parseHtml(argument: _htmlParserPackage_ParseHtmlRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_htmlParserPackage_ParseHtmlResponse__Output>): grpc.ClientUnaryCall;
  parseHtml(argument: _htmlParserPackage_ParseHtmlRequest, callback: grpc.requestCallback<_htmlParserPackage_ParseHtmlResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface HtmlParserHandlers extends grpc.UntypedServiceImplementation {
  Health: grpc.handleUnaryCall<_htmlParserPackage_HealthRequest__Output, _htmlParserPackage_HealthResponse>;
  
  ParseHtml: grpc.handleUnaryCall<_htmlParserPackage_ParseHtmlRequest__Output, _htmlParserPackage_ParseHtmlResponse>;
  
}

export interface HtmlParserDefinition extends grpc.ServiceDefinition {
  Health: MethodDefinition<_htmlParserPackage_HealthRequest, _htmlParserPackage_HealthResponse, _htmlParserPackage_HealthRequest__Output, _htmlParserPackage_HealthResponse__Output>
  ParseHtml: MethodDefinition<_htmlParserPackage_ParseHtmlRequest, _htmlParserPackage_ParseHtmlResponse, _htmlParserPackage_ParseHtmlRequest__Output, _htmlParserPackage_ParseHtmlResponse__Output>
}
