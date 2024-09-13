import { Injectable } from "@nestjs/common";
import { Todo } from "./todo.interface";

@Injectable()
export class TodoService {
  private storage: Todo[] = Array.from({ length: 10 }).map((val, _i) => {
    return {
      complete: false,
      label: "test " + _i,
      id: _i,
    };
  });

  create(todo: Todo) {
    todo["id"] = Date.now();
    this.storage.push(todo);
  }
  findOne(id: number): Todo {
    return this.storage.find((t: Todo) => t.id === id);
  }
  findAll() {
    return this.storage;
  }

  update(id: number, todo: Todo): void {
    const index = this.storage.findIndex((t: Todo) => t.id === id);
    this.storage[index] = todo;
  }

  remove(id: number): void {
    const index = this.storage.findIndex((t: Todo) => t.id === id);
    this.storage.splice(index, 1);
  }
}
