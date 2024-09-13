import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Module } from "@nestjs/common";
import { TodoModule } from "./todo/todo.module";

@Module({
	imports: [TodoModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
