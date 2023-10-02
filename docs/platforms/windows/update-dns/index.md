# Update DNS

A simple guide on updating your DNS on windows.

Simply download this [win-dns-updater](./files/win-dns-updater.bat) bat file and run it.

## script

:::note

Always **VALIDATE** code/scripts/bat before executing!

:::

the code is as follows:

It list out all your network adapters and ask to input a number to correspond to your main/active network adapter for ipv4.

Once set, it requests the custom DNS to be entered.

```bat
@echo off

echo Available network interfaces:
netsh interface ipv4 show interfaces

set /p INTERFACE_ID="Enter the interface index to update: "
set /p DNS_PRIMARY="Enter the primary DNS: "

echo Updating primary DNS setting...
netsh interface ipv4 set dns name=%INTERFACE_ID% static %DNS_PRIMARY% primary
echo Primary DNS setting updated successfully.
```

## manual

The manual way of setting DNS for windows is to press the Windows key + R on your keyboard to open the Run dialog box.

Type `ncpa.cpl` into the Run dialog box and press Enter.

Double click on your network adapter.

Click on properties.

uncheck IPv6

double click IPv4.

set DNS to manual and only set your primary dns.

save it.

## Validate DNS

Run the following commands in terminal/command prompt.

```terminal
ipconfig /renew
```

```terminal
ipconfig /flushdns
```
