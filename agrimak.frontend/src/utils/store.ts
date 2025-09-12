import { Category, Product } from "../types";
import { User } from "../types/user";
import { HttpHelpers, UserHelpers } from "./Utils";

export class AppStore {

  // Users
  static login(email: string, passowrd: string): Promise<User> {
    return HttpHelpers.post("account/login", {
      email: email,
      password: passowrd,
    }).then((result) => {
      UserHelpers.setUser(result.data as User);
      return result.data as User;
    });
  }

  static logout(): Promise<any> {
    return HttpHelpers.get("account/logout").then(() => {
      UserHelpers.resetLogedInUser();
    });
  }

  static createUser(model: any): Promise<any> {
    return HttpHelpers.post("account/register", model);
  }

  static getAllUsers(): Promise<any> {
    return HttpHelpers.get("account/allUSers");
  }

  static deleteUser(userId: string): Promise<any> {
    return HttpHelpers.post("account/deleteUser", { userId });
  }

  // Products
  static getProducts(): Promise<Product[]> {
    return HttpHelpers.get("home/getAll").then((response) => {
      const data = response.data as Product[];
      return data;
    });
  }

  static getProduct(id: any): Promise<Product> {
    return HttpHelpers.get(`home/getById?id=${id}`).then((response) => {
      const product = response.data as Product;
      return product;
    });
  }

  static getProductsByType(category: Category): Promise<Product[]> {
    return HttpHelpers.get(`home/getByCategory?category=${category}`).then(
      (response) => {
        const products = response.data as Product[];
        return products;
      }
    );
  }

  static createProduct(model: Product): Promise<any> {
    return HttpHelpers.post("home/create", model);
  }
}

function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
