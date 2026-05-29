from sqlmodel import SQLModel, Field
from sqlalchemy import CheckConstraint
from datetime import datetime
from typing import Optional


class Activity(SQLModel, table=True):
    __tablename__ = "activities"
    __table_args__ = (
        CheckConstraint("capacities IN (1, 2, 3)", name="check_capacities"),
        CheckConstraint("cost IN (0, 1, 2, 3)", name="check_cost"),
        CheckConstraint("distance IN (0, 1, 2, 3)", name="check_distance"),
        CheckConstraint("time IN (1, 2, 3)", name="check_time")
    )


    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(nullable=False)
    capacities: int
    cost: int
    distance: int
    time: int
    counter: int = Field(default=0)
    description: Optional[str] = None
    url: Optional[str] = None
    creation_time: datetime = Field(default_factory=datetime.utcnow)
    update_time: datetime = Field(default_factory=datetime.utcnow)

class createActivity(SQLModel):
    name: str
    capacities: str
    cost: str
    distance: str
    time: str
    description: str
    url: str


class updateActivity(SQLModel):
    description: str
    url: str

class deleteActivity(SQLModel):
    id: int
    deleted: bool
    delete_time: datetime

class getActivity(SQLModel):
    name: str
    capacities: str
    cost: str
    distance: str
    time: str
    counter: int
    description: str
    url: str


class getRecommendation(SQLModel):
    capacities: str
    cost: str
    distance: str
    time: str