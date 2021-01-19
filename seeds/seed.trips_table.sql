BEGIN;

TRUNCATE
    trips_table
    RESTART IDENTITY CASCADE;
    
INSERT INTO trips_table (trip_name, places, fav_part, total_cost, journal)
VALUES
    ('boston','1. efefreferfe 2. fddvfdvfdvf 3. fvdfvfvfdvfdvfdv', 'food', 1200, 'Day1: kfvmdfjvfjvnfjdv Day2: smckfdmvkdfmvkfdmv Day3: vndfjvndfjvndfjvnf'),
    ('thailand','1. efefreferfe 2. fddvfdvfdvf 3. fvdfvfvfdvfdvfdv', 'food', 3500, 'Day1: kfvmdfjvfjvnfjdv Day2: smckfdmvkdfmvkfdmv Day3: vndfjvndfjvndfjvnf'),
    ('chicago','1. efefreferfe 2. fddvfdvfdvf 3. fvdfvfvfdvfdvfdv', 'sporting events', 1500, 'Day1: kfvmdfjvfjvnfjdv Day2: smckfdmvkdfmvkfdmv Day3: vndfjvndfjvndfjvnf'),
    ('death valley np','1. efefreferfe 2. fddvfdvfdvf 3. fvdfvfvfdvfdvfdv', 'hikes', 250, 'Day1: kfvmdfjvfjvnfjdv Day2: smckfdmvkdfmvkfdmv Day3: vndfjvndfjvndfjvnf'),
    ('yosemite np','1. efefreferfe 2. fddvfdvfdvf 3. fvdfvfvfdvfdvfdv', 'hikes', 500, 'Day1: kfvmdfjvfjvnfjdv Day2: smckfdmvkdfmvkfdmv Day3: vndfjvndfjvndfjvnf'),
    ('seattle','1. efefreferfe 2. fddvfdvfdvf 3. fvdfvfvfdvfdvfdv', 'seafood', 2200, 'Day1: kfvmdfjvfjvnfjdv Day2: smckfdmvkdfmvkfdmv Day3: vndfjvndfjvndfjvnf'),
    ('vancouver','1. efefreferfe 2. fddvfdvfdvf 3. fvdfvfvfdvfdvfdv', 'atmosphere', 2000, 'Day1: kfvmdfjvfjvnfjdv Day2: smckfdmvkdfmvkfdmv Day3: vndfjvndfjvndfjvnf'),
    ('havasupai','1. efefreferfe 2. fddvfdvfdvf 3. fvdfvfvfdvfdvfdv', 'hikes', 800, 'Day1: kfvmdfjvfjvnfjdv Day2: smckfdmvkdfmvkfdmv Day3: vndfjvndfjvndfjvnf');

COMMIT;
