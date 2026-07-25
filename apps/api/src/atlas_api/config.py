from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    database_url: str = "postgresql+psycopg://atlas:atlas@localhost:5432/atlas"

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")


settings = Settings()
