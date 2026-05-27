const outputEl = document.getElementById("lab-output");
const logs = [];

function log(message) {
  console.log(message);
  logs.push(typeof message === "string" ? message : JSON.stringify(message, null, 2));
}

function renderOutput() {
  if (outputEl) {
    outputEl.textContent = logs.join("\n\n");
  }
}

function task1VariablesAndTypes() {
  log("=== Завдання 1. Змінні та типи даних ===");

  const strValue = "Альона Чучупалова";
  const numValue = 20;
  const boolValue = true;
  const nullValue = null;
  let undefinedValue;
  const symbolValue = Symbol("student-id");
  const bigIntValue = 2026n;

  const primitives = [
    ["string", strValue],
    ["number", numValue],
    ["boolean", boolValue],
    ["null", nullValue],
    ["undefined", undefinedValue],
    ["symbol", symbolValue.toString()],
    ["bigint", bigIntValue.toString()],
  ];

  primitives.forEach(([label, value]) => {
    log(`${label}: значення = ${value}, typeof = ${typeof value}`);
  });

  log("\n--- Явне перетворення типів ---");
  log(`String(42) = "${String(42)}"`);
  log(`String(true) = "${String(true)}"`);
  log(`Number("123") = ${Number("123")}`);
  log(`Number("") = ${Number("")}`);
  log(`Number(true) = ${Number(true)}, Number(false) = ${Number(false)}`);
  log(`Number(null) = ${Number(null)}, Number(undefined) = ${Number(undefined)}`);
  log(`Boolean(0) = ${Boolean(0)}, Boolean("") = ${Boolean("")}`);
  log(`Boolean(null) = ${Boolean(null)}, Boolean(undefined) = ${Boolean(undefined)}`);
  log(`Boolean(NaN) = ${Boolean(NaN)}`);
  log(`Boolean("0") = ${Boolean("0")}, Boolean([]) = ${Boolean([])}`);

  const name = "Альона";
  const age = 20;
  const university = "НАУ «ХАІ»";
  log(`\nШаблонний рядок: Студент: ${name}, вік: ${age}, університет: ${university}`);

  log("\n--- == vs === ---");
  log(`5 == "5" → ${5 == "5"}`);
  log(`5 === "5" → ${5 === "5"}`);
  log(`0 == false → ${0 == false}`);
  log(`0 === false → ${0 === false}`);
  log(`null == undefined → ${null == undefined}`);
  log(`null === undefined → ${null === undefined}`);
}

function getGrade(score) {
  if (typeof score !== "number" || Number.isNaN(score)) {
    return "невалідний бал";
  }
  if (score < 0 || score > 100) {
    return "невалідний бал";
  }
  if (score < 60) return "незадовільно";
  if (score < 75) return "задовільно";
  if (score < 90) return "добре";
  return "відмінно";
}

function getSeasonUA(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return "зима";
    case 3:
    case 4:
    case 5:
      return "весна";
    case 6:
    case 7:
    case 8:
      return "літо";
    case 9:
    case 10:
    case 11:
      return "осінь";
    default:
      return "невалідний місяць";
  }
}

function task2Conditions() {
  log("\n=== Завдання 2. Умови та логіка ===");

  const testScores = [45, 68, 82, 95, -5, 150, "abc"];
  testScores.forEach((score) => {
    log(`getGrade(${JSON.stringify(score)}) → "${getGrade(score)}"`);
  });

  const months = [1, 4, 7, 10, 13, 0];
  months.forEach((month) => {
    log(`getSeasonUA(${month}) → "${getSeasonUA(month)}"`);
  });

  const studentAge = 19;
  const status = studentAge >= 18 ? "повнолітній" : "неповнолітній";
  log(`Тернарний оператор: вік ${studentAge} → ${status}`);
}

function task3Arrays() {
  log("\n=== Завдання 3. Масиви ===");

  const students = [
    { name: "Олена Коваленко", grade: 92, courses: ["JavaScript", "HTML", "CSS"] },
    { name: "Іван Петренко", grade: 55, courses: ["HTML", "CSS"] },
    { name: "Марія Сидоренко", grade: 78, courses: ["JavaScript", "Git"] },
    { name: "Андрій Мельник", grade: 48, courses: ["CSS"] },
    { name: "Альона Чучупалова", grade: 88, courses: ["JavaScript", "HTML", "CSS", "Figma"] },
    { name: "Дмитро Коваль", grade: 95, courses: ["JavaScript", "Node.js"] },
  ];

  log("Початковий масив students:");
  log(students);

  students.push({ name: "Нова Студентка", grade: 70, courses: ["JavaScript"] });
  log("Після push (новий студент в кінці):");
  log(students[students.length - 1]);

  const removedByPop = students.pop();
  log(`Після pop видалено: ${removedByPop.name}`);

  const removedMiddle = students.splice(2, 1);
  log(`Після splice(2, 1) видалено: ${removedMiddle[0].name}`);

  students.splice(1, 0, { name: "Вставлений Студент", grade: 81, courses: ["HTML"] });
  log("Після splice(1, 0, ...) на позиції 1:");
  log(students[1]);

  const excellentStudent = students.find((s) => s.grade > 90);
  log(`find (оцінка > 90): ${excellentStudent?.name ?? "не знайдено"}`);

  const jsStudents = students.filter((s) => s.courses.includes("JavaScript"));
  log(`filter (курс JavaScript): ${jsStudents.map((s) => s.name).join(", ")}`);

  const averageGrade =
    students.reduce((sum, s) => sum + s.grade, 0) / students.length;
  log(`reduce (середня оцінка): ${averageGrade.toFixed(2)}`);

  return students;
}

function calcRectangleAreaDeclaration(width, height) {
  return width * height;
}

const calcRectangleAreaExpression = function (width, height) {
  return width * height;
};

const calcRectangleAreaArrow = (width, height) => width * height;

function createCounter() {
  let value = 0;
  return {
    increment() {
      value += 1;
    },
    decrement() {
      value -= 1;
    },
    getValue() {
      return value;
    },
  };
}

function createUser(name, role = "student", isActive = true) {
  return { name, role, isActive };
}

const sumNumbers = (...numbers) => numbers.reduce((acc, n) => acc + n, 0);

function printStudentInfo({ name, grade, courses }) {
  log(`${name} має оцінку ${grade}`);
  log(`Курси: ${courses.join(", ")}`);
}

function task4Functions() {
  log("\n=== Завдання 4. Функції ===");

  log(`Площа (Declaration): ${calcRectangleAreaDeclaration(5, 4)}`);
  log(`Площа (Expression): ${calcRectangleAreaExpression(5, 4)}`);
  log(`Площа (Arrow): ${calcRectangleAreaArrow(5, 4)}`);

  const counter = createCounter();
  counter.increment();
  counter.increment();
  counter.decrement();
  log(`createCounter: increment, increment, decrement → getValue() = ${counter.getValue()}`);

  log("createUser:");
  log(createUser("Альона"));
  log(createUser("Олена", "mentor", false));

  log(`sumNumbers(1, 2, 3) = ${sumNumbers(1, 2, 3)}`);
  log(`sumNumbers(10, 20) = ${sumNumbers(10, 20)}`);

  printStudentInfo({
    name: "Альона Чучупалова",
    grade: 88,
    courses: ["JavaScript", "HTML", "CSS"],
  });
}

function task5Objects() {
  log("\n=== Завдання 5. Обʼєкти ===");

  const studentProfile = {
    firstName: "Альона",
    lastName: "Чучупалова",
    age: 20,
    university: "НАУ «ХАІ»",
    grades: { math: 85, physics: 92, programming: 88 },
    isActive: true,
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    getAverageGrade() {
      const values = Object.values(this.grades);
      return values.reduce((sum, g) => sum + g, 0) / values.length;
    },
  };

  log(`Крапкова нотація: ${studentProfile.firstName}`);
  const field = "university";
  log(`Bracket notation [field]: ${studentProfile[field]}`);

  log(`getFullName(): ${studentProfile.getFullName()}`);
  log(`getAverageGrade(): ${studentProfile.getAverageGrade().toFixed(2)}`);

  log(`Object.keys: ${Object.keys(studentProfile.grades).join(", ")}`);
  log(`Object.values: ${Object.values(studentProfile.grades).join(", ")}`);
  Object.entries(studentProfile.grades).forEach(([subject, grade]) => {
    log(`  ${subject}: ${grade}`);
  });

  const profileCopy = { ...studentProfile, age: 21 };
  log(`Копія (spread): age = ${profileCopy.age}, оригінал age = ${studentProfile.age}`);

  const labScore = studentProfile.grades?.lab;
  const mentorName = studentProfile.mentor?.name ?? "Не призначено";
  log(`Optional chaining: grades.lab = ${labScore}, mentor.name = ${mentorName}`);

  return studentProfile;
}

function task6MethodChains(students) {
  log("\n=== Завдання 6. Ланцюжки методів масивів ===");

  const products = [
    { name: "Ноутбук", price: 25000, category: "electronics", inStock: true, quantity: 5 },
    { name: "Мишка", price: 450, category: "electronics", inStock: true, quantity: 12 },
    { name: "Стілець", price: 3200, category: "furniture", inStock: false, quantity: 3 },
    { name: "Монітор", price: 8500, category: "electronics", inStock: true, quantity: 4 },
    { name: "Книга JS", price: 650, category: "books", inStock: true, quantity: 20 },
    { name: "Стіл", price: 5500, category: "furniture", inStock: true, quantity: 2 },
    { name: "Навушники", price: 1200, category: "electronics", inStock: false, quantity: 0 },
    { name: "Клавіатура", price: 1800, category: "electronics", inStock: true, quantity: 8 },
  ];

  const totalInStockValue = products
    .filter((p) => p.inStock)
    .map((p) => p.price * p.quantity)
    .reduce((sum, value) => sum + value, 0);
  log(`filter → map → reduce (вартість в наявності): ${totalInStockValue}`);

  const electronicsNames = products
    .filter((p) => p.category === "electronics")
    .sort((a, b) => a.price - b.price)
    .map((p) => p.name);
  log(`filter → sort → map (electronics за ціною): ${electronicsNames.join(", ")}`);

  const categoryCount = products.reduce((acc, product) => {
    const { category } = product;
    acc[category] = (acc[category] ?? 0) + 1;
    return acc;
  }, {});
  log("reduce (кількість по категоріях):");
  log(categoryCount);

  const byGradeDesc = [...students].sort((a, b) => b.grade - a.grade);
  log(`Студенти за оцінкою (↓): ${byGradeDesc.map((s) => `${s.name} (${s.grade})`).join("; ")}`);

  const byNameAsc = [...students].sort((a, b) => a.name.localeCompare(b.name, "uk"));
  log(`Студенти за імʼям (А-Я): ${byNameAsc.map((s) => s.name).join("; ")}`);
}

function capitalize(str) {
  if (!str || typeof str !== "string") return "";
  const trimmed = str.trim();
  if (!trimmed) return "";
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}

function countWords(str) {
  if (!str || typeof str !== "string") return 0;
  const words = str.trim().split(" ");
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      count += 1;
    }
  }
  return count;
}

function truncate(str, maxLength) {
  if (typeof str !== "string" || maxLength < 0) return "";
  if (str.length <= maxLength) return str;
  if (maxLength <= 3) return "...".slice(0, maxLength);
  return `${str.slice(0, maxLength - 3)}...`;
}

function isValidEmail(email) {
  if (typeof email !== "string") return false;

  const atIndex = email.indexOf("@");
  if (atIndex === -1) return false;
  if (email.indexOf("@", atIndex + 1) !== -1) return false;
  const beforeAt = email.slice(0, atIndex);
  const afterAt = email.slice(atIndex + 1);

  if (beforeAt.length < 1) return false;
  if (!afterAt.includes(".")) return false;

  const lastDotIndex = afterAt.lastIndexOf(".");
  const domainPart = afterAt.slice(lastDotIndex + 1);

  if (lastDotIndex < 1) return false;
  if (domainPart.length < 2) return false;

  return true;
}

function task7Strings() {
  log("\n=== Завдання 7. Рядки ===");

  log(`capitalize("javaScript") → "${capitalize("javaScript")}"`);
  log(`capitalize("hello world") → "${capitalize("hello world")}"`);

  log(`countWords("JavaScript це круто") → ${countWords("JavaScript це круто")}`);
  log(`countWords("  пробіли між словами  ") → ${countWords("  пробіли між словами  ")}`);

  log(
    `truncate("Це довгий текст для прикладу", 15) → "${truncate("Це довгий текст для прикладу", 15)}"`
  );
  log(`truncate("Короткий", 20) → "${truncate("Короткий", 20)}"`);

  const emails = [
    "user@example.com",
    "invalid-email",
    "@example.com",
    "user@.com",
    "a@b.co",
  ];
  emails.forEach((email) => {
    log(`isValidEmail("${email}") → ${isValidEmail(email)}`);
  });
}

function runAllTasks() {
  task1VariablesAndTypes();
  task2Conditions();
  const students = task3Arrays();
  task4Functions();
  task5Objects();
  task6MethodChains(students);
  task7Strings();
  renderOutput();
}

document.addEventListener("DOMContentLoaded", runAllTasks);
