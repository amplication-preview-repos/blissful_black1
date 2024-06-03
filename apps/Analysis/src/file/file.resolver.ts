import * as graphql from "@nestjs/graphql";
import { FileResolverBase } from "./base/file.resolver.base";
import { File } from "./base/File";
import { FileService } from "./file.service";

@graphql.Resolver(() => File)
export class FileResolver extends FileResolverBase {
  constructor(protected readonly service: FileService) {
    super(service);
  }
}
