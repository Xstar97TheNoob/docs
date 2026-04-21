@echo off

echo Available network interfaces:
netsh interface ipv4 show interfaces

set /p INTERFACE_ID="Enter the interface index to update: "
set /p DNS_PRIMARY="Enter the primary DNS: "

echo Updating primary DNS setting...
netsh interface ipv4 set dns name=%INTERFACE_ID% static %DNS_PRIMARY% primary
echo Primary DNS setting updated successfully.
