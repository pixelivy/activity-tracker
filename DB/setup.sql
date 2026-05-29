DROP TABLE IF EXISTS activities;

CREATE TABLE activities (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	capacities TEXT CHECK (capacities IN ('1', '2', '3')),
	cost TEXT CHECK (cost IN ('0', '1', '2', '3')),
	distance TEXT CHECK (distance IN ('0', '1', '2', '3')),
	time TEXT CHECK (time IN ('1', '2', '3')),
	counter INTEGER DEFAULT 0,
	description TEXT,
	url TEXT,
	creation_time DATETIME DEFAULT CURRENT_TIMESTAMP,
	update_time DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_activities_capacities ON activities(capacities);
CREATE INDEX idx_activities_cost ON activities(cost);
CREATE INDEX idx_activities_distance ON activities(distance);
CREATE INDEX idx_activities_time ON activities(time);
