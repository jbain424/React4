DROP DATABASE IF EXISTS relieve_me;
CREATE DATABASE relieve_me;

\c relieve_me;


CREATE TABLE queens (
  id SERIAL PRIMARY KEY,
  neighborhood VARCHAR,
  car_type VARCHAR,
  street VARCHAR,
  cross_streets VARCHAR
);

CREATE TABLE bronx (
  id SERIAL PRIMARY KEY,
  neighborhood VARCHAR,
  car_type VARCHAR,
  street VARCHAR,
  cross_streets VARCHAR
);

CREATE TABLE brooklyn (
  id SERIAL PRIMARY KEY,
  neighborhood VARCHAR,
  car_type VARCHAR,
  street VARCHAR,
  cross_streets VARCHAR
);

CREATE TABLE manhattan (
  id SERIAL PRIMARY KEY,
  neighborhood VARCHAR,
  car_type VARCHAR,
  street VARCHAR,
  cross_streets VARCHAR
);



INSERT INTO queens (neighborhood, car_type, street, cross_streets) VALUES
('Astoria', 'Taxi Only', '31 St (west side)','34 Ave  & 35 Ave'),
('Astoria', 'Taxi Only', '31 St (east side)', '37 Ave  & 36 Ave'),
('Astoria', 'Taxi Only', '31 St (east side)', '38 Ave  & 37 Ave'),
('Astoria', 'Taxi Only', '34 St (west side)','37 Ave  & 38 Ave'),
('Long Island City', 'Taxi/FHVs', '35 St (south side)', 'Starr Ave  & Bradley Ave'),
('Long Island City', 'Taxi/FHVs', '36 St (east side)', 'Skillman Ave & 43 Ave'),
('Long Island City', 'Taxi/FHVs',	'43 Ave (north side)','11 St  & 12 St'),
('Long Island City', 'Taxi Only',	'44 Rd (south side)','21 St  & 11 St'),
('Long Island City', 'Taxi/FHVs', '43 Ave (north side)','36 St  & 37 St'),
('Long Island City', 'Taxi/FHVs', '45 Ave (south side)', 'Jackson Ave & 23 St'),
('Long Island City', 'Taxi/FHVs', '47 Ave (south side)', '11 St  & Vernon Blvd'),
('Sunnyside', 'Taxi Only', '55 St (east side)', 'Queens Blvd  & Roosevelt Ave'),
('Sunnyside', 'Taxi Only', '64 St (west side)', '34 Ave & 35 Ave'),
('Sunnyside', 'Taxi/FHVs', '61 St (east side)','Roosevelt Ave & 39 Ave'),
('Sunnyside', 'Taxi Only',	'Queens Blvd (south side)', '50 St  & 51 St'),
('Long Island City', 'Taxi/FHVs', 'Pearson St (west side)', 'Jackson Ave  & DeadEnd'),
('Sunnyside', 'Taxi Only', 'Queens Blvd (north side)', '55 St & 54 St'),
('Astoria', 'Taxi Only', '37 Ave (north side)', '32 St & 31 St'),
('Sunnyside', 'Taxi/FHVs', 'Van Dam St (west side)', 'Queens Blvd  & Skillman Ave');

INSERT INTO bronx (neighborhood, car_type, street, cross_streets) VALUES
('Wakefield', 'Taxi/FHVs', 'E 233 St (south side)', 'Carpenter Ave & White Plains Rd'),
('Mott Haven', 'Taxi Only', 'Park Ave (east side)', 'E 135 St & E 138 St'),
('Mott Haven', 'Taxi Only', 'Park Ave (west side)', 'E 135 St & E 138 St'),
('Pelham Gardens', 'Taxi/FHVs', 'Pelham Pkwy S (south side)', 'Wilson Ave & Eastchester Rd'),
('Kingsbridge', 'Taxi/FHVs', 'W 231 St (north side)', 'Albany Cr & Broadway'),
('Kingsbridge Heights', 'Taxi/FHVs', 'West Kingsbridge Rd (south side)','Sedgwick Ave & Webb Ave');

INSERT INTO brooklyn (neighborhood, car_type, street, cross_streets) VALUES
('Gowanus', 'Taxi Only', '4 Ave (west side)', '3 St & 6 St'),
('Gowanus', 'Taxi/FHVs', '4 Ave (east side)', 'Prospect Ave'),
('Williamsburg', 'Taxi Only', 'N 6 St (north side)','Berry St & Wythe Ave'),
('Borough Park', 'Taxi Only', 'New Utrecht Ave (north side)', '55 St & 13 Ave');

INSERT INTO manhattan (neighborhood, car_type, street, cross_streets) VALUES
('Chelsea', 'Taxi/FHVs', '10 Ave (east side)', 'W 26 St & W 28 St'),
('Hell''s Kitchen', 'Taxi/FHVs', '11 Ave (east side)', 'W 45 St & W 46 St'),
('Gramercy Park', 'Taxi/FHVs', '3 Ave (west side)', 'E 14 St & E 15 St'),
('Gramercy Park', 'Taxi/FHVs', '3 Ave (west side)', 'E 15 St & E 14 St'),
('Lower Manhattan', 'Taxi/FHVs', '6 Ave (east side)', 'Thompson St & Grand St'),
('Chelsea', 'Taxi/FHVs', '6 Ave (west side)', 'W 22 St & W 23 St'),
('Midtown', 'Taxi/FHVs', '6 Ave (west side)', 'W 38 St & W 39 St'),
('Midtown', 'Taxi/FHVs', '6 Ave (west side)', 'W 39 St & W 40 St'),
('Midtown', 'Taxi/FHVs', '6 Ave (west side)', 'W 55 St & W 56 St'),
('Midtown', 'Taxi/FHVs', '8 Ave (west side)', 'W 46 St & W 47 St'),
('Chelsea', 'Taxi Only', '9 Ave (east side)', 'W 30 St & W  29 St'),
('Lower East Side', 'Taxi Only', 'Ave A (west side)', 'E 2 St & E. Houston St'),
('Lower Manhattan', 'Taxi/FHVs', 'Church St *E Rdway (west side)', 'Franklin St & White St'),
('East Harlem', 'Taxi/FHVs', 'E 116 St (south side)', '3 Ave & 2 Ave'),
('Gramercy Park', 'Taxi Only', 'E 15 St (north side)', 'Irving Place & Union Square E'),
('Gramercy Park', 'Taxi Only', 'E 23 St (north side)', '1 Ave & 2 Ave'),
('Gramercy Park', 'Taxi Only', 'E 26 St (south side)', '3 Ave & 2 Ave'),
('Kips Bay', 'Taxi Only', 'E 27 St (south side)', 'Park Ave S & Madison Ave'),
('Kips Bay', 'Taxi Only', 'E 28 St (north side)', 'Park Ave S & Lexington Ave'),
('Kips Bay', 'Taxi/FHVs', 'E 29 St (south side)', 'Madison Ave & 5 Ave'),
('Kips Bay', 'Taxi Only', 'E 32 St (north side)', 'Madison Ave & Park Ave S'),
('Upper East Side', 'Taxi Only', 'E 77 St (south side)', '1 Ave & 2 Ave'),
('Upper East Side', 'Taxi Only', 'E 78 St (north side)', 'Lexington Ave & 3 Ave'),
('Upper East Side', 'Taxi Only', 'E 78 St (south side)', 'Lexington Ave & 3 Ave'),
('Upper East Side', 'Taxi Only', 'E 86 St (north side)', 'Henderson Pl & York Ave'),
('Upper East Side', 'Taxi Only', 'E 87 St (south side)', '1 Ave & 2 Ave'),
('Lower East Side', 'Taxi/FHVs', 'Grand St (north side)', 'Forsyth St & Chrystie St'),
('Kips Bay', 'Taxi/FHVs', 'Madison Ave (west side)', 'E 26 St & E 27 St'),
('Lower Manhattan', 'Taxi/FHVs', 'Maiden Ln (south side)', 'Front St & South St'),
('Lower Manhattan', 'Taxi Only', 'Park Row (east side)', 'Ann St & Beekman St'),
('Lower Manhattan', 'Taxi/FHVs', 'South St (west side)', 'Wall St & Gouverneur Ln'),
('Greenwich Village', 'Taxi Only', 'University Pl (east side)', 'E 13 St & E 14 St'),
('Midtown', 'Taxi Only', 'W  33 St (north side)', '9 Ave & 10 Ave'),
('Midtown', 'Taxi Only', 'W  39 St (south side)', '8 Ave & 9 Ave'),
('Hell''s Kitchen', 'Taxi Only', 'W  41 St (north side)', '10 Ave & 11 Ave'),
('Hell''s Kitchen', 'Taxi Only', 'W  55 St (south side)', '10 Ave & 11 Ave'),
('Washington Heights', 'Taxi/FHVs', 'W 181 St (south side)', 'Pinehurst Ave & Fort Washington Ave'),
('Lower Manhattan', 'Taxi/FHVs', 'West St (east side)', 'Laight St & Vestry St');
