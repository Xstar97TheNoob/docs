# Truenas Scale's Date and Time Issues

Truenas Scale is a powerful operating system designed for data storage and management. However, like any other operating system, it can experience issues, one of which is time synchronization. If the time on your Truenas Scale system is not properly synchronized, it can cause a variety of problems, including issues with DNS resolution, file synchronization, and more.

Fortunately, resolving time issues on Truenas Scale is relatively easy. The first step is to open the system shell and run the following command to verify if your current local time matches what scale reports:

```shell
date
```

If the time/date does match, its likely your scale server's [nameservers](/docs/platforms/scale/networking/scale-nameservers/index.md) are the issue, but if not proceed to run the following commands:

```shell
# stop ntp service
sudo systemctl stop ntp
```

```shell
# Synchronize the system clock with NTP servers
sudo ntpd -gq
```

```shell
# Start the NTP service
sudo systemctl start ntp
```

```shell
# check the time again
date
```

If the output of the "date" command matches the current local time for your system, then the time issue is resolved. However, if the output does not match, repeat the above steps until the system clock is properly synchronized.

It's also worth noting that if you are experiencing issues resolving DNS on your Truenas Scale system, you can try running the "date" command in the system shell to see if there is an issue with the system clock. If the output of the "date" command does not match the current local time for your system, it is likely that the time issue is causing the DNS issue. In this case, follow the above steps to resolve the time issue and then try resolving the DNS issue again.

In conclusion, resolving time issues on Truenas Scale is a straightforward process that can be done quickly and easily using the steps outlined above. By keeping your system clock properly synchronized, you can avoid a variety of potential issues and ensure that your Truenas Scale system is running smoothly.
