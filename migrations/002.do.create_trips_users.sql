CREATE TABLE trips_users (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    user_name TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    date_created TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE trips_users
    ADD COLUMN
        user_id INTEGER REFERENCES trips_users(id)
        ON DELETE SET NULL;