# Change the database schema (e.g. add more tables)

1. Manually adjust your database schema using SQL
    > e.g. CREATE TABLE, ALTER TABLE
2. Re-introspect your database (update Prisma Schema file automatically by using
   command)
    > npx prisma introspect
3. Optionally re-configure your Prisma Client API
    > manually rename models to follow Prisma's naming convention
4. Re-generate Prisma Client (update node_modules/@prisma/client automatically
   by using command)
    > npx prisma generate

```
1. 
    npx prisma introspect
2. 
    update models
3.
    npx prisma generate
```
