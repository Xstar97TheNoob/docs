---
sidebar_position: 2
---

# Storage

My go-to storage devices are samsung and seagate. I only ever use samsung SSDs(sata & NVME) and seagate Exos drives.

## Pools

You should have a multi-pools setup:

- tank pool (HDD's)
- app pool (SSD's)

:::note

A mirror for the boot and even for the app pool is very beneficial because in a event of a disk failure, the mirrored drive(s) can immediately take over and continue to provide uninterrupted service, without the need for data recovery or backup restoration. This redundancy ensures high availability and minimizes downtime, making mirroring a popular choice for critical applications and systems where data loss or downtime is unacceptable. Additionally, mirroring can also improve read performance, as data can be read from multiple drives simultaneously. Overall, mirroring provides increased data reliability, availability, and performance, making it a beneficial option for many storage setups.

:::

## Permissions

Majority of the truecharts catalog has owner/groups permissions for `apps` or 568.

So anytime you make a dataset(s) the permissions should be set accordingly except for some charts that require `www-data`, please be sure to checkout the charts respective installation documentations for notes on permissions.

ACL's are not supported and can cause issues, so its heavily advised to _never_ use ACL's and use the correct permissions.
