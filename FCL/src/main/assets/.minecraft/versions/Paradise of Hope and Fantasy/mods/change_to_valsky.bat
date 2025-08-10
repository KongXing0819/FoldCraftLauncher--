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
    echo touhoulittlemaid-1.20.1-release-1.3.6.jar.disabled
    echo twilightdelight-2.0.16.jar.disabled
    pause > nul
    exit /b
)

rem Read the file list and rename files
setlocal enabledelayedexpansion

for /f "delims=" %%f in (%fileList%) do (
    set "disabledFile=%%f.disabled"
    echo Processing file: !disabledFile!
    if exist "!disabledFile!" (
        ren "!disabledFile!" "%%f"
        echo Renamed !disabledFile! to %%f
    ) else (
        echo File not found: !disabledFile!
    )
)

echo.
echo Done.
