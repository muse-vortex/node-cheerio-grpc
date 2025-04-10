import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { HtmlParserClient as _htmlParserPackage_HtmlParserClient, HtmlParserDefinition as _htmlParserPackage_HtmlParserDefinition } from './htmlParserPackage/HtmlParser';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  htmlParserPackage: {
    HealthRequest: MessageTypeDefinition
    HealthResponse: MessageTypeDefinition
    HtmlParser: SubtypeConstructor<typeof grpc.Client, _htmlParserPackage_HtmlParserClient> & { service: _htmlParserPackage_HtmlParserDefinition }
    ParseHtmlRequest: MessageTypeDefinition
    ParseHtmlResponse: MessageTypeDefinition
  }
}

