@echo off
echo ========================================
echo Seeding Categories to Database
echo ========================================
echo.

cd backend
node utils/seedCategories.js

echo.
echo ========================================
echo Done!
echo ========================================
pause
