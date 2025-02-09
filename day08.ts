class Product {
    name: string;
    price: number;
  
    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }
  }
  
  let dbProducts: Product[] = [
    new Product("apel", 3000),
    new Product("Mangga", 5000),
    new Product("Nanas", 7000),
  ];
  
  interface CartItem {
    product: { name: string; price: number; qty: number };
    total: number;
  }
  
  class Transaction {
    cart: CartItem[];
  
    constructor() {
      this.cart = [];
    }
  
    addToCart(product: Product, qty: number = 1): void {
      this.cart.push({
        product: { ...product, qty },
        total: qty * product.price,
      });
    }
    totalPayment(): number {
      const total = this.cart.reduce((sum, item) => sum + item.total, 0);
      return total;
    }
  
    checkout(): string {
      let print = this.cart
        .map(function (item, idx) {
          return `${
            idx + 1
          }. ${item.product.name}, ${item.product.price.toLocaleString("id", {
            style: "currency",
            currency: "IDR",
          })}, Qty: ${item.product.qty}, ${item.total.toLocaleString("id", {
            style: "currency",
            currency: "IDR",
          })}`;
        })
        .join("\n");
      print += `\nTotal Payment: ${this.totalPayment().toLocaleString("id", {
        style: "currency",
        currency: "IDR",
      })}`;
      this.cart = [];
      return print;
    }
  }
  
  const transaction = new Transaction();
  transaction.addToCart(dbProducts[0], 2);
  transaction.addToCart(dbProducts[1], 2);
  transaction.addToCart(dbProducts[2], 1);
  console.log(transaction.totalPayment());
  console.log(transaction.checkout());
  
  class Student {
    name: string;
    email: string;
    birthDate: Date;
    score: number;
  
    constructor(name: string, email: string, birthDate: string, score: number) {
      this.name = name;
      this.email = email;
      this.birthDate = new Date(birthDate);
      this.score = score;
    }
  }
  
  let dbStudent: Student[] = [
    new Student("Edo", "edo@mail.com", "2005-04-25", 35),
    new Student("Andrew", "and@mail.com", "2006-11-12", 65),
    new Student("Zafran", "zaf@mail.com", "2010-02-01", 95),
    new Student("Budi", "budi@mail.com", "2003-11-11", 55),
  ];
  
  const getAge = (birthDate) => {
    let today = new Date();
    let birth = new Date(birthDate);
  
    let age = today.getFullYear() - birth.getFullYear();
    return age;
  };
  
  const calculateStudent = (arr: Student[]) => {
    let highestScore = arr.sort((a, b) => b.score - a.score).at(0);
    let lowestScore = arr.sort((a, b) => a.score - b.score).at(0);
    let totalScore = arr.reduce((sum, student) => sum + student.score, 0);
    let avgScore = totalScore / arr.length;
  
    let oldest = arr
      .sort((a, b) => a.birthDate.getTime() - b.birthDate.getTime())
      .at(0);
    let youngest = arr
      .sort((a, b) => b.birthDate.getTime() - a.birthDate.getTime())
      .at(0);
    let totalAge = arr.reduce(
      (sum, student) => sum + getAge(student.birthDate),
      0
    );
    let avgAge = totalAge / arr.length;
  
    let score = {
      highestScore,
      lowestScore,
      avgScore,
    };
  
    let age = {
      oldest: { ...oldest, age: getAge(oldest?.birthDate) },
      youngest: { ...youngest, age: getAge(youngest?.birthDate) },
      avgAge,
    };
  
    let sort = {
      score,
      age,
    };
    return sort;
  };
  
  console.log(calculateStudent(dbStudent));
  
  class Employee {
    name: string;
    employeeType: string;
    workingHours: number;
    hourRate: number;
    totalSalary: number;
  
    constructor(name: string, employeeType: string) {
      this.name = name;
      this.employeeType = employeeType;
      this.workingHours = 0;
      this.hourRate = 0;
      this.totalSalary = 0;
    }
  }
  
  class FulltimeEmployee extends Employee {
    constructor(name: string) {
      super(name, "Full Time");
    }
  
    addWorkingHours(hours: number): void {
      this.workingHours += hours;
    }
  
    calculateSalary(): void {
      if (this.workingHours > 6) {
        this.hourRate = 75000;
      } else {
        this.hourRate = 100000;
      }
      this.totalSalary = this.workingHours * this.hourRate;
    }
  }
  
  class ParttimeEmployee extends Employee {
    constructor(name: string) {
      super(name, "Part Time");
    }
  
    addWorkingHours(hours: number): void {
      this.workingHours += hours;
    }
  
    calculateSalary(): number {
      if (this.workingHours > 6) {
        this.hourRate = 30000;
      } else {
        this.hourRate = 50000;
      }
      this.totalSalary = this.workingHours * this.hourRate;
      return this.totalSalary;
    }
  }
  
  let fullTimeEmployee = new FulltimeEmployee("Edo");
  fullTimeEmployee.addWorkingHours(6);
  fullTimeEmployee.calculateSalary();
  console.log(fullTimeEmployee);
  
  let partTimeEmployee = new ParttimeEmployee("Aldi");
  partTimeEmployee.addWorkingHours(8);
  console.log(partTimeEmployee.calculateSalary());
  
  class Player {
    name: string;
    health: number;
    power: number;
  
    constructor(name: string) {
      this.name = name;
      this.health = 100;
      this.power = 10;
    }
  
    damage(power): void {
      this.health -= power;
    }
  
    useItem(item): void {
      if (item.health > 0) {
        this.health += item.health;
      }
      if (item.power > 0) {
        this.power += item.power;
      }
    }
  
    showStatus() {
      console.log(
        `${this.name} (Health => ${this.health}, Power => ${this.power})`
      );
    }
  }
  
  class ShootingGames {
    player1: Player;
    player2: Player;
    constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
    }
  
    getRandomItem() {
      const boost = Math.random();
      if (boost < 0.25) {
        return { health: 0, power: 0 };
      } else if (boost < 0.5) {
        return { health: 0, power: 10 };
      } else if (boost < 0.75) {
        return { health: 10, power: 0 };
      } else {
        return { health: 10, power: 10 };
      }
    }
  
    start(): void {
      while (true) {
        this.player1.showStatus();
        this.player2.showStatus();
  
        let item1 = this.getRandomItem();
        let item2 = this.getRandomItem();
  
        this.player1.useItem(item1);
        this.player2.useItem(item2);
  
        this.player1.damage(this.player2.power);
        this.player2.damage(this.player1.power);
  
        this.player1.showStatus();
        this.player2.showStatus();
        console.log(this, this.player1.showStatus());
  
        if (this.player1.health <= 0) {
          console.log(`${this.player2.name} MENANG!`);
          break;
        }
        if (this.player2.health <= 0) {
          console.log(`${this.player1.name} MENANG!`);
          break;
        }
      }
    }
  }
  
  let playerA = new Player("Edo");
  let playerB = new Player("Budi");
  let game = new ShootingGames(playerA, playerB);
  game.start();
  