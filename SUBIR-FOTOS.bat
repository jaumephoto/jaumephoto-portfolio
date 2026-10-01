@echo off
chcp 65001 >nul
cd /d "%~dp0"
node subir-fotos.mjs
echo.
pause
