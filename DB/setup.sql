DROP TABLE IF EXISTS activities;

CREATE TABLE activities (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	capacities TEXT CHECK (capacities IN ('low', 'medium', 'high')),
	cost TEXT CHECK (cost IN ('none', 'low', 'medium', 'high')),
	distance TEXT CHECK (distance IN ('none', 'low', 'medium', 'high')),
	time TEXT CHECK (time IN ('low', 'medium', 'high')),
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
