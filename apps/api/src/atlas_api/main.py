from fastapi import FastAPI
from strawberry.fastapi import GraphQLRouter

from atlas_api.schema import schema

app = FastAPI(title="Atlas API", version="0.1.0")
app.include_router(GraphQLRouter(schema), prefix="/graphql")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "service": "atlas-api"}
