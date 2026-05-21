@echo off
echo ========================================
echo Seeding Shree Frozen Food Database
echo ========================================
echo.

cd backend

echo Seeding database with sample data...
echo.
npm run seed

echo.
echo ========================================
echo Database seeded successfully!
echo ========================================
echo.
echo Admin Credentials:
echo Email: admin@shreefrozenfood.com
echo Password: admin123
echo.
pause
