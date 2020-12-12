# You want to feed the create.sql into sqlite3 from the shell, not from inside SQLite itself:
> sqlite3 dev.db < create.sql

# Create Table
```
CREATE TABLE User (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  name TEXT,
  email TEXT UNIQUE NOT NULL
);
CREATE TABLE Post (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  title TEXT NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  content TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  authorId INTEGER NOT NULL,
  FOREIGN KEY (authorId) REFERENCES User(id)
);

CREATE TABLE Profile (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  bio TEXT,
  userId INTEGER UNIQUE NOT NULL,
  FOREIGN KEY (userId) REFERENCES User(id)
);
```

# INSERT INTO Table

```
INSERT INTO User VALUES(1,'harry','harry@gmail.com');
INSERT INTO User VALUES(2,'rose','rose@gmail.com');
```
