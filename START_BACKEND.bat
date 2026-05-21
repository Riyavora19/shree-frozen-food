@echo off
echo ========================================
echo Starting Shree Frozen Food Backend
echo ========================================
echo.

cd backend

echo Checking if port 5000 is free...
netstat -ano | findstr :5000 > nul
if %errorlevel% equ 0 (
    echo Port 5000 is in use. Killing the process...
    for /f "tokens=5" %%a in ('netstat -ano ^| findstr :5000') do taskkill /PID %%a /F > nul 2>&1
    timeout /t 2 > nul
)

echo Starting backend server...
echo.
npm run dev
