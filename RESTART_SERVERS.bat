@echo off
echo ========================================
echo Restarting Frontend and Backend Servers
echo ========================================
echo.
echo This will:
echo 1. Kill any processes on port 3000 and 5000
echo 2. Start backend server
echo 3. Start frontend server
echo.
pause

echo.
echo Step 1: Killing processes on ports 3000 and 5000...
echo.

for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000') do (
    echo Killing process %%a on port 3000
    taskkill /F /PID %%a 2>nul
)

for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5000') do (
    echo Killing process %%a on port 5000
    taskkill /F /PID %%a 2>nul
)

timeout /t 2 >nul

echo.
echo Step 2: Starting Backend Server...
echo.
start "Backend Server" cmd /k "cd backend && npm start"

timeout /t 5 >nul

echo.
echo Step 3: Starting Frontend Server...
echo.
start "Frontend Server" cmd /k "cd frontend && npm start"

echo.
echo ========================================
echo Servers are starting!
echo ========================================
echo.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo Admin: http://localhost:3000/admin/login
echo.
echo Check the new terminal windows for server status.
echo.
pause
