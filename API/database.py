from sqlmodel import Session, create_engine
from typing import Annotated
from fastapi import Depends

DB_FILE = "./DB/data.db"
DB_URL = f"sqlite:///{DB_FILE}"
engine = create_engine(DB_URL)

def get_session():
    with Session(engine) as session:
        yield session

SessionDep = Annotated[Session, Depends(get_session)]