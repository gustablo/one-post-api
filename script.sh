mkdir src/core/$1
mkdir src/core/$1/controller
mkdir src/core/$1/service
mkdir src/core/$1/dtos

nest g mo core/$1

nest g co core/$1/controller/$1 --flat
nest g s core/$1/service/$1 --flat

touch src/core/$1/$1.providers.ts

touch src/core/$1/$1.ts
touch src/database/schemas/$1.schema.ts
