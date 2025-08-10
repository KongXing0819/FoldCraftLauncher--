@echo off
cd ..
cd .minecraft
cd versions
cd MOBAI
cd mods
echo Current directory file list:
dir
echo.

rem Specify the file list
set "fileList=files_to_disable.txt"

rem Check if the file list exists
if not exist "%fileList%" (
    echo Error: %fileList% not found.
    echo Please create a text file containing the names of the files to rename.
    echo For example:
    echo touhoulittlemaid-1.20.1-release-1.3.6.jar
    echo twilightdelight-2.0.16.jar
    pause > nul
    exit /b
)

rem Read the file list and rename files
setlocal enabledelayedexpansion

for /f "delims=" %%f in (%fileList%) do (
    echo Processing file: %%f
    if exist "%%f" (
        ren "%%f" "%%f.disabled"
        echo Renamed %%f to %%f.disabled
    ) else (
        echo File not found: %%f
    )
)

echo.
echo Done. 
