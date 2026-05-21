@echo off
echo ========================================
echo Shree Frozen Food - Clean Start
echo ========================================
echo.

echo Step 1: Stopping all Node processes...
taskkill /F /IM node.exe > nul 2>&1
timeout /t 2 > nul
echo All Node processes stopped!
echo.

echo Step 2: Clearing ports 3000 and 5000...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000') do taskkill /PID %%a /F > nul 2>&1
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :5000') do taskkill /PID %%a /F > nul 2>&1
timeout /t 2 > nul
echo Ports cleared!
echo.

echo Step 3: Checking MongoDB...
sc query MongoDB | find "RUNNING" > nul
if %errorlevel% neq 0 (
    echo Starting MongoDB...
    net start MongoDB
    if %errorlevel% neq 0 (
        echo.
        echo ========================================
        echo WARNING: MongoDB could not start!
        echo ========================================
        echo.
        echo Please do ONE of the following:
        echo 1. Install MongoDB from: https://www.mongodb.com/try/download/community
        echo 2. Or use MongoDB Atlas (cloud) and update backend\.env
        echo.
        pause
        exit /b 1
    )
) else (
    echo MongoDB is running!
)
echo.

echo Step 4: Starting Backend Server on port 5000...
start "Backend - Port 5000" cmd /k "cd /d %~dp0backend && echo Starting Backend... && npm run dev"
echo Waiting for backend to start...
timeout /t 5 > nul
echo.

echo Step 5: Starting Frontend Server on port 3000...
start "Frontend - Port 3000" cmd /k "cd /d %~dp0frontend && set PORT=3000 && echo Starting Frontend on port 3000... && npm start"
echo Waiting for frontend to start...
timeout /t 3 > nul
echo.

echo ========================================
echo Servers Starting!
echo ========================================
echo.
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:3000
echo Admin:    http://localhost:3000/admin/login
echo.
echo Two windows opened:
echo - Backend (port 5000) - Keep open!
echo - Frontend (port 3000) - Keep open!
echo.
echo Browser will open in 10 seconds...
echo.
echo Admin Login:
echo Email: admin@shreefrozenfood.com
echo Password: admin123
echo.
timeout /t 10 > nul
start http://localhost:3000
echo.
echo Press any key to close this window...
pause > nul
