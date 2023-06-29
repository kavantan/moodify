import { Router } from "express"
import { UserController } from "../controllers/user.controller"
import { Routes } from "../interfaces/routes.interface"
import { requestHandler } from "../middlewares/requestHandler.middleware"

export class UserRoute implements Routes {
  public path = "/users"
  public router = Router()
  public user = new UserController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, requestHandler(this.user.getUsers))
    this.router.get(`${this.path}/:id`, requestHandler(this.user.getUserById))
    this.router.post(`${this.path}`, requestHandler(this.user.createUser))
    this.router.put(`${this.path}/:id`, requestHandler(this.user.updateUser))
    this.router.delete(`${this.path}/:id`, requestHandler(this.user.deleteUser))
  }
}
