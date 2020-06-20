DROP DATABASE IF EXISTS airbnb;
CREATE DATABASE airbnb;
use airbnb;

CREATE TABLE suggestions(
  listingId INT(10) PRIMARY NOT NULL,
  roomtypeId INT(10),
  numbOfBedrooms INT(10)
  placeName VARCHAR(255)
  price FLOAT(5)
  pictureUrl VARCHAR(255)
)


DESCRIBE airbnb;