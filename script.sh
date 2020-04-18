mkdir src/core/$1
nest g mo core/$1
nest g co core/$1
nest g s core/$1
mkdir src/core/$1/dto
touch src/core/$1/$1.providers.ts

touch src/interfaces/$1.interface.ts
touch src/database/schemas/$1.schema.ts