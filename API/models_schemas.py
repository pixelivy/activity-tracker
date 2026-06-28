from sqlmodel import SQLModel, Field
from sqlalchemy import CheckConstraint
from datetime import datetime
from typing import Optional

class BaseActivity(SQLModel):
    name: str = Field(nullable=False)
    description: str
    url: str

class Activities(BaseActivity, table=True):
    __table_args__ = (
        CheckConstraint("capacities IN (1, 2, 3)", name="check_capacities"),
        CheckConstraint("cost IN (0, 1, 2, 3)", name="check_cost"),
        CheckConstraint("distance IN (0, 1, 2, 3)", name="check_distance"),
        CheckConstraint("time IN (1, 2, 3)", name="check_time")
    )


    id: Optional[int] = Field(default=None, primary_key=True)
    capacities: int
    cost: int
    distance: int
    time: int
    friends: bool
    counter: int = Field(default=0)
    creation_time: datetime = Field(default_factory=datetime.utcnow)
    update_time: datetime = Field(default_factory=datetime.utcnow)

class createActivity(BaseActivity):
    capacities: int = Field(default=2)
    cost: int = Field(default=2)
    distance: int = Field(default=2)
    time: int = Field(default=2)
    friends: bool

class ActivityID(BaseActivity):
    id: int

class getActivity(BaseActivity):
    id: int
    cost: int
    distance: int
    time: int
    counter: int
    description: str