from fastapi import FastAPI, HTTPException
from sqlmodel import select
from API.models_schemas import getActivity, createActivity, updateActivity, Activity
from API.database import SessionDep

app = FastAPI()

@app.post("/add_activity")
def addActivity(input: createActivity, session: SessionDep):
    activity = Activity.model_validate(input.model_dump())
    session.add(activity)
    session.commit()
    return {"status": "200", "message": "Activity created"}

@app.patch("/choose_activity")
def chooseActivity(id: int, session: SessionDep):
    activity = session.get(Activity, id)
    if not activity:
        raise HTTPException(status_code=404, detail="Activity not found")
    update = {"counter": int(activity.counter) + 1}
    activity.sqlmodel_update(update)
    session.add(activity)
    session.commit()
    return {"status": "200", "message": "Activity created"}

@app.patch("/update_activity")
def updateActivity(input: updateActivity, session: SessionDep):
    activity = session.get(Activity, input.id)
    if not activity:
        raise HTTPException(status_code=404, detail="Activity not found")
    activity.description = input.description
    activity.url = input.url
    session.add(activity)
    session.commit()
    return {"status": "200", "message": "Activity updated"}

@app.delete("/delete_activity")
def addActivity(id: int, session: SessionDep):
    result = session.get(Activity, id)
    if not result:
        raise HTTPException(404, "Activity not found")
    session.delete(result)
    session.commit()
    return {"status": "200", "message": "Activity deleted"}

@app.get("/get_activity/", response_model=getActivity)
def getDescription(id: int, session: SessionDep):
    result = session.get(Activity, id)
    if not result:
        raise HTTPException(404, "Activity not found")
    return result

@app.get("/get_activities", response_model=list[getActivity])
def getActivities(session: SessionDep) -> list[Activity]:
    result = session.exec(select(Activity)).all()
    if not result:
        raise HTTPException(404, "Activity not found")
    return result

@app.get("/get_recommendations", response_model=list[getActivity])
def getRecommendations(capacities: int, cost: int, time: int, distance: int, friends: bool, session: SessionDep):
    if friends:
        statement = select(Activity).where(Activity.capacities <= capacities).where(Activity.cost <= cost).where(Activity.time <= time).where(Activity.distance <= distance).where(Activity.friends == True)
    else:
        statement = select(Activity).where(Activity.capacities <= capacities).where(Activity.cost <= cost).where(Activity.time <= time).where(Activity.distance <= distance)
    result = session.exec(statement)
    if not result:
        raise HTTPException(404, "no fitting Activity")
    return result.all()