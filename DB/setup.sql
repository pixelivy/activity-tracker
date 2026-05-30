DROP TABLE IF EXISTS activities;

CREATE TABLE activities (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	capacities INTEGER CHECK (capacities IN (1, 2, 3)),
	cost INTEGER CHECK (cost IN (0, 1, 2, 3)),
	distance INTEGER CHECK (distance IN (0, 1, 2, 3, 4)),
	time INTEGER CHECK (time IN (1, 2, 3, 4)),
	friends BOOLEAN,
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
