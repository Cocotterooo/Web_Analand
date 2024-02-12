@echo off
call venv\Scripts\activate
pip install --upgrade pip
pip install -r requirements.txt
reflex init
reflex export --frontend-only
rmdir /s /q public
powershell -command "& { Add-Type -A 'System.IO.Compression.FileSystem'; [IO.Compression.ZipFile]::ExtractToDirectory('frontend.zip', 'public'); }"
del frontend.zip
call deactivate
