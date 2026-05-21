@echo off
echo ========================================
echo Creating Admin Account
echo ========================================
echo.

cd backend

echo Seeding database with admin account...
echo.
node utils/seedData.js

echo.
echo ========================================
echo Admin Account Created!
echo ========================================
echo.
echo You can now login with:
echo Email: admin@shreefrozenfood.com
echo Password: admin123
echo.
echo Press any key to close...
pause > nul
