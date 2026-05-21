@echo off
echo ========================================
echo Shree Frozen Food - Status Check
echo ========================================
echo.

echo Checking Node.js...
node --version > nul 2>&1
if %errorlevel% equ 0 (
    node --version
    echo [OK] Node.js is installed
) else (
    echo [ERROR] Node.js is NOT installed!
)
echo.

echo Checking npm...
npm --version > nul 2>&1
if %errorlevel% equ 0 (
    npm --version
    echo [OK] npm is installed
) else (
    echo [ERROR] npm is NOT installed!
)
echo.

echo Checking MongoDB...
sc query MongoDB | find "RUNNING" > nul
if %errorlevel% equ 0 (
    echo [OK] MongoDB is RUNNING
) else (
    echo [WARNING] MongoDB is NOT running
    echo Run: net start MongoDB
)
echo.

echo Checking Backend...
if exist "backend\node_modules" (
    echo [OK] Backend dependencies installed
) else (
    echo [ERROR] Backend dependencies NOT installed
    echo Run: cd backend && npm install
)
if exist "backend\.env" (
    echo [OK] Backend .env file exists
) else (
    echo [ERROR] Backend .env file NOT found
)
echo.

echo Checking Frontend...
if exist "frontend\node_modules" (
    echo [OK] Frontend dependencies installed
) else (
    echo [ERROR] Frontend dependencies NOT installed
    echo Run: cd frontend && npm install
)
if exist "frontend\.env" (
    echo [OK] Frontend .env file exists
) else (
    echo [ERROR] Frontend .env file NOT found
)
echo.

echo Checking Ports...
netstat -ano | findstr ":5000" > nul
if %errorlevel% equ 0 (
    echo [OK] Port 5000 is IN USE (Backend running)
) else (
    echo [INFO] Port 5000 is FREE (Backend not running)
)

netstat -ano | findstr ":3000" > nul
if %errorlevel% equ 0 (
    echo [OK] Port 3000 is IN USE (Frontend running)
) else (
    echo [INFO] Port 3000 is FREE (Frontend not running)
)
echo.

echo ========================================
echo Status Check Complete!
echo ========================================
echo.
pause
