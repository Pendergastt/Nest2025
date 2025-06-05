@echo off
echo Instalando @nestjs/typeorm, typeorm y mysql2...
npm install @nestjs/typeorm@11 typeorm@0.3 mysql2
if errorlevel 1 (
    echo Error durante la instalación del primer paquete.
    pause
    exit /b 1
)

echo Instalando @nestjs/swagger y swagger-ui-express...
npm install --save @nestjs/swagger swagger-ui-express
if errorlevel 1 (
    echo Error durante la instalación del segundo paquete.
    pause
    exit /b 1
)

echo Instalando class-validator y class-transformer...
npm install class-validator class-transformer
if errorlevel 1 (
    echo Error durante la instalación del tercer paquete.
    pause
    exit /b 1
)

echo Todas las dependencias fueron instaladas correctamente.
pause
