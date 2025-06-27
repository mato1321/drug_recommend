from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import date
from app.models.user import GenderEnum

# ��¦�Τ�Ҧ�
class UserBase(BaseModel):
    email: EmailStr
    name: Optional[str] = None
    gender: Optional[GenderEnum] = None
    birth_date: Optional[date] = None

# �Τ���U
class UserCreate(UserBase):
    password: str

# �Τ�n�J
class UserLogin(BaseModel):
    email: EmailStr
    password: str

# �Τ��T��
class UserResponse(UserBase):
    id: int
    is_active: bool
    is_verified: bool
    
    class Config:
        from_attributes = True

# Token �Ҧ�
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None