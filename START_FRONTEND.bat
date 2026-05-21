@echo off
echo ========================================
echo Starting Shree Frozen Food Frontend
echo ========================================
echo.

cd frontend

echo Checking frontend setup...
if not exist "node_modules" (
    echo ERROR: node_modules not found!
    echo Please run: npm install
    pause
    exit /b 1
)

if not exist ".env" (
    echo ERROR: .env file not found!
    echo Creating .env file...
    (
        echo PORT=3000
        echo REACT_APP_API_URL=http://localhost:5000/api
    ) > .env
)

echo Setting PORT to 3000...
set PORT=3000

echo Starting frontend server on port 3000...
echo Browser will open automatically at http://localhost:3000
echo.
echo If you see errors, press Ctrl+C and check the error message.
echo.
npm start
pause
