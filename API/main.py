from fastapi import FastAPI
from models_schemas import standardResponse, getRecommendation, getActivity, createActivity, updateActivity, deleteActivity, Activity
from database import SessionDep

app = FastAPI()

@app.post("add_activity", response_model=standardResponse)
def addActivity(activity_in: createActivity, session: SessionDep):
    input = Activity.model_validate(activity_in.model_dump())
    session.add(input)
    session.commit()
    session.refresh(input)
    return input

@app.patch("choose_activity")
def chooseActivity():
    return None

@app.patch("update_activity")
def updateActivity():
    return None

@app.delete("delete_activity")
def addActivity():
    return None

@app.get("get_activity")
def getActivity():
    return None

@app.get("get_activities")
def getActivities():
    return None

@app.get("get_recommendations")
def getRecommendations():
    return None