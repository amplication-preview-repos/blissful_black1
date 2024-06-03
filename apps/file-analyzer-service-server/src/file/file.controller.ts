import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FileService } from "./file.service";
import { FileControllerBase } from "./base/file.controller.base";

@swagger.ApiTags("files")
@common.Controller("files")
export class FileController extends FileControllerBase {
  constructor(protected readonly service: FileService) {
    super(service);
  }
}
