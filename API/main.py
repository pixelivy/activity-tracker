from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import select
from collections.abc import Sequence
from API.models_schemas import Activities, getActivity, createActivity, ActivityID
from API.database import SessionDep

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/add_activity")
def add_an_activity(input: createActivity, session: SessionDep):
    activity = Activities.model_validate(input.model_dump())
    session.add(activity)
    session.commit()
    return {"status": "200", "message": "Activities created"}

@app.patch("/choose_activity")
def choose_an_activity(id: int, session: SessionDep):
    activity = session.get(Activities, id)
    if not activity:
        raise HTTPException(status_code=404, detail="Activities not found")
    update = {"counter": int(activity.counter) + 1}
    activity.sqlmodel_update(update)
    session.add(activity)
    session.commit()
    return {"status": "200", "message": "Activities created"}

@app.patch("/update_activity")
def update_an__activity(input: ActivityID, session: SessionDep):
    activity = session.get(Activities, input.id)
    if not activity:
        raise HTTPException(status_code=404, detail="Activities not found")
    activity.description = input.description
    activity.url = input.url
    session.add(activity)
    session.commit()
    return {"status": "200", "message": "Activities updated"}

@app.delete("/delete_activity")
def delete_an_activity(id: int, session: SessionDep):
    result = session.get(Activities, id)
    if not result:
        raise HTTPException(404, "Activities not found")
    session.delete(result)
    session.commit()
    return {"status": "200", "message": "Activities deleted"}

@app.get("/get_activity", response_model=getActivity)
def get_activity_Description(id: int, session: SessionDep):
    result = session.get(Activities, id)
    if not result:
        raise HTTPException(404, "Activities not found")
    return result

@app.get("/get_activities", response_model=Sequence[ActivityID])
def get_all_activities(session: SessionDep) -> Sequence[ActivityID]:
    result = session.exec(select(Activities)).all()
    if not result:
        raise HTTPException(404, "Activities not found")
    # FIX: return type error
    return result

@app.get("/get_recommendations", response_model=list[getActivity])
def get_a_list_of_recommendations(capacities: int, cost: int, time: int, distance: int, friends: bool, session: SessionDep):
    if friends:
        statement = select(Activities).where(Activities.capacities <= capacities).where(Activities.cost <= cost).where(Activities.time <= time).where(Activities.distance <= distance).where(Activities.friends == True)
    else:
        statement = select(Activities).where(Activities.capacities <= capacities).where(Activities.cost <= cost).where(Activities.time <= time).where(Activities.distance <= distance)
    result = session.exec(statement)
    if not result:
        raise HTTPException(404, "no fitting Activities")
    return result.all()