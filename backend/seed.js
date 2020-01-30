const database = require("./database");

const category = [
  {
    category: "Needs"
  },
  {
    category: "Wants"
  },
  {
    category: "Savings"
  }
]

database.serialize( () => {
  const dropTableUser = `DROP TABLE user`;
  const dropTableBudgetEntry = `DROP TABLE budget_entry`;
  const dropTableCategory = `DROP TABLE category`;
  const createTableUser = `CREATE TABLE IF NOT EXISTS
    user (first_name TEXT, last_name TEXT, username TEXT UNIQUE,
    email TEXT UNIQUE, password TEXT)`;
  const createTableBudgetEntry = `CREATE TABLE IF NOT EXISTS budget_entry
    (userId INTEGER, amount TEXT, category INTEGER, dayOfEntry INTEGER, weekOfEntry INTEGER, monthOfEntry INTEGER, yearOfEntry INTEGER, comment TEXT)`;
  const createTableCategory = `CREATE TABLE IF NOT EXISTS category
    (category TEXT UNIQUE)`;
  const insertIntoTableCategory = `INSERT INTO category (category) VALUES (?)`

  database.run(dropTableUser, (error => {
    if (error) {
      console.error(new Error("Failure to drop table user"));
    }
    else {
      console.log("dropped user table success");
    }
  }));

  database.run(dropTableBudgetEntry, (error => {
    if (error) {
      console.error(new Error("Failure to drop table budget entry"));
    }
    else {
      console.log("dropped budget entry table success");
    }
  }));

  database.run(dropTableCategory, (error => {
    if (error) {
      console.error(new Error("Failure to drop table category"));
    }
    else {
      console.log("dropped category table success");
    }
  }));

  database.run(createTableUser, (error => {
    if (error) {
      console.error(new Error("Failure to create table user"));
    }
    else {
      console.log("created user table success");
    }
  }));

  database.run(createTableBudgetEntry, (error => {
    if (error) {
      console.error(new Error("Failure to create table budget entry"));
    }
    else {
      console.log("created budget entry table success");
    }
  }));

  database.run(createTableCategory, (error => {
    if (error) {
      console.error(new Error("Failure to create table category"));
    }
    else {
      console.log("created category table success");
    }
  }));

  category.forEach((category) => {
    database.run(insertIntoTableCategory, [category.category], (err) => {
      if(err) {
        console.log("failed to enter category entries");
      } else {
        console.log(`category: ${category.category} added`);
      };
    });
  });
});















// end
