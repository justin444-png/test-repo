import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    const users = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        age: 30,
        isActive: true
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        age: 25,
        isActive: false
      },
      {
        id: 3,
        name: "Bob Johnson",
        email: "bob@example.com",
        age: 40,
        isActive: true
      }
    ];
    let updatedArray: any = []
    users.forEach((item) => {
      if (item.age === 40) {
        updatedArray.push({ ...item, age: 9 })
      } else {
        updatedArray.push(item)
      }
    })
    return updatedArray;

  }
}
