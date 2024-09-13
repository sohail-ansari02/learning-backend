import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common";
import { TodoService } from "./todo.service";
import { Todo } from "./todo.interface";
@Controller("todo")
export class TodoController {
  private readonly logger = new Logger(TodoController.name);
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll() {
    this.logger.log("Handling findAll() request...");
    return this.todoService.findAll();
  }

  @Post()
  create(@Body() todo: Todo) {
    this.logger.log("Handling create() request...");
    this.todoService.create(todo);
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id) {
    this.logger.log("Handling findOne() request with id=" + id + "...");
    return this.todoService.findOne(id);
  }
  @Put(":id")
  update(@Param("id", ParseIntPipe) id, @Body() todo: Todo) {
    this.logger.log("Handling update() request with id=" + id + "...");
    return this.todoService.update(id, todo);
  }
  @Delete(":id")
  delete(@Param("id", ParseIntPipe) id) {
    this.logger.log("Handling delete() request with id=" + id + "...");
    return this.todoService.remove(id);
  }
}
