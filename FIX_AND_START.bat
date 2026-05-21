@echo off
echo ========================================
echo Shree Frozen Food - Fix and Start
echo ========================================
echo.

echo Step 1: Killing all Node processes...
taskkill /F /IM node.exe > nul 2>&1
timeout /t 2 > nul
echo Done!
echo.

echo Step 2: Checking MongoDB...
sc query MongoDB | find "RUNNING" > nul
if %errorlevel% neq 0 (
    echo MongoDB is not running. Starting MongoDB...
    net start MongoDB
    if %errorlevel% neq 0 (
        echo WARNING: Could not start MongoDB!
        echo Please start MongoDB manually or use MongoDB Atlas.
        echo.
    )
) else (
    echo MongoDB is running!
)
echo.

echo Step 3: Checking backend setup...
cd backend
if not exist "node_modules" (
    echo Installing backend dependencies...
    call npm install
)
if not exist ".env" (
    echo Creating backend .env file...
    (
        echo PORT=5000
        echo MONGODB_URI=mongodb://localhost:27017/shree-frozen-food
        echo JWT_SECRET=shree_frozen_food_super_secret_jwt_key_2026
        echo JWT_EXPIRE=7d
        echo NODE_ENV=development
    ) > .env
)
cd ..
echo Backend setup complete!
echo.

echo Step 4: Checking frontend setup...
cd frontend
if not exist "node_modules" (
    echo Installing frontend dependencies...
    call npm install
)
if not exist ".env" (
    echo Creating frontend .env file...
    echo REACT_APP_API_URL=http://localhost:5000/api > .env
)
cd ..
echo Frontend setup complete!
echo.

echo ========================================
echo Setup Complete! Now starting servers...
echo ========================================
echo.

echo Starting Backend Server...
start "Shree Frozen Food - Backend" cmd /k "cd backend && npm run dev"
timeout /t 5 > nul

echo Starting Frontend Server...
start "Shree Frozen Food - Frontend" cmd /k "cd frontend && npm start"

echo.
echo ========================================
echo Servers are starting!
echo ========================================
echo.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo Admin: http://localhost:3000/admin/login
echo.
echo Two new windows will open:
echo 1. Backend Server (keep open)
echo 2. Frontend Server (keep open)
echo.
echo Browser will open automatically in a few seconds...
echo.
echo Press any key to close this window...
pause > nul
