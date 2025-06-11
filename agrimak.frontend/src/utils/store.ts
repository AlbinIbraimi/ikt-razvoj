import { HttpHelpers } from "./Utils";

export class AppStore {
  static login(email: string, passowrd: string): Promise<any> {
    return HttpHelpers.post("account/login", {
      email: email,
      password: passowrd,
    }).then((result) => {
      localStorage.setItem("user", JSON.stringify(result.data));
    });
  }

  static logout(): Promise<any> {
    return HttpHelpers.get("account/logout").then(() => {
      localStorage.removeItem("user");
    });
  }

  static getProducts(): Promise<any> {
    return HttpHelpers.get("home/getAll");
  }

  static getProduct(id: any): Promise<any> {
    return HttpHelpers.get(`home/getProduct?id=${id}`);
  }

  static getProductsByType(type: number):Promise<any>{
    return HttpHelpers.get(`home/getByType?type=${type}`);
  }

  static createUser(model: any): Promise<any> {
    return HttpHelpers.post("account/register", model);
  }

  static getAllUsers(): Promise<any> {
    return HttpHelpers.get("account/allUSers");
  }

  static deleteUser(userId: string): Promise<any> {
    return HttpHelpers.post("account/deleteUser", {userId} );
  }
}
