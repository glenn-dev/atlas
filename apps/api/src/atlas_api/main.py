from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from strawberry.fastapi import GraphQLRouter

from atlas_api.schema import schema

app = FastAPI(title="Atlas API", version="0.1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["POST"],
    allow_headers=["Content-Type"],
)
app.include_router(GraphQLRouter(schema), prefix="/graphql")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "service": "atlas-api"}
