CREATE TABLE trips_table (
    id SERIAL PRIMARY KEY,
    trip_name TEXT NOT NULL,
    places TEXT,
    fav_part TEXT,
    total_cost INTEGER,
    journal TEXT NOT NULL,
    date_published TIMESTAMPTZ DEFAULT now() NOT NULL

);