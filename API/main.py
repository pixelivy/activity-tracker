from fastapi import FastAPI

app = FastAPI()

@app.post("add_activity")
def addActivity():
    return None


@app.patch("choose_activity")
def chooseActivity():
    return None

@app.patch("update_activity")
def updateActivity():
    return None

@app.delete("delete_activity")
def addActivity():
    return None

@app.get("get_activities")
def getActivities():
    return None

@app.get("get_recommendations")
def getRecommendations():
    return None