DROP DATABASE IF EXISTS all_da_names;
CREATE DATABASE all_da_names;

\c all_da_names;

CREATE TABLE names (
  id serial,
  firstName varchar,
  lastName varchar,
  dob varchar,
  eyeColor varchar,
  phone varchar
);
