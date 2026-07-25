import strawberry


@strawberry.type
class Query:
    @strawberry.field
    def hello(self) -> str:
        return "Atlas is alive"

    @strawberry.field
    def sprint_goal(self) -> str:
        return "Build the learning-log foundation before Enerlink onboarding"


schema = strawberry.Schema(query=Query)
