CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    enlistment_date DATE NOT NULL
);

INSERT INTO users (name, email, enlistment_date)
VALUES
    ('Captain Blackbeard', 'blackbeard@sea.com', '1718-05-20'),
    ('Anne Bonny', 'anne@sea.com', '1720-10-15')
ON CONFLICT (email) DO NOTHING;