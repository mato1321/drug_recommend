from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.core.database import engine, Base
from app.api import auth

# �Ыظ�Ʈw��
Base.metadata.create_all(bind=engine)

# �Ы� FastAPI ����
app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    debug=settings.DEBUG
)

# CORS �����n��
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# �]�t���� - ���� /api �e��
app.include_router(auth.router)

@app.get("/")
def root():
    return {"message": "Drug Recommendation API", "version": settings.VERSION}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)