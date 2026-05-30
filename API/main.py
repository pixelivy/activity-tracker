from fastapi import FastAPI, HTTPException
from API.models_schemas import getRecommendation, getActivity, createActivity, updateActivity, Activity
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
    activity = Activity.model_validate(input)
    session.add(activity)
    session.commit()
    return {"status": "200", "message": "Activity created"}

@app.delete("/delete_activity")
def addActivity():
    return None

@app.get("/get_activity/")
def getActivity(id: int):

    return {}

@app.get("/get_activities")
def getActivities():
    return None

@app.get("/get_recommendations")
def getRecommendations():
    return None