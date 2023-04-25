# MullVadVPN How To Guide

In this guide I will show an example on how to create a wireguard vpn to be consumed by a truecharts app's vpn addon.

## MullVad account

Please go to [mullvad](https://mullvad.net/) and generate an account. The beauty of this service is the [privacy aspect](https://mullvad.net/en/help/no-logging-data-policy/#numbered) and very low price of its service of a flat rate $5 a month.

I highly recommend to checkout their [server list](https://mullvad.net/en/servers/) to verify what they own and rent and to get details of the servers you _might_ choose.

![login-account](/img/addons/vpn/mullvad/mullvad-login.png)
  
Generate account number

![gen-account](/img/addons/vpn/mullvad/mullvad-gen-1.png)

Keep this account number **private**.

![gen-account](/img/addons/vpn/mullvad/mullvad-gen-2.png)

MullVad doesn't have a recurring _subscription_ service, you need to purchase a time frame as long and as much as you want, cost the same per month, plenty of options.

![pay-account](/img/addons/vpn/mullvad/mullvad-pay.png)

## MullVad Config

Once that's all configured go to the [`WireGuard configuration`](https://mullvad.net/en/account/#/wireguard-config) tab.

In this example from the [server list](https://mullvad.net/en/servers/), I chosen `us-lax-201`.

- 10 gbps.
- ram only.

![us-lax-201](/img/addons/vpn/mullvad/mullvad-server-wg-201.png)

- Generate Key
- Select the country and city.
- Show advanced options
  - IPV4
  - Tunnel traffic:
    - Only IPv4
  - Custom port: `51820` (This doesn't need to be change.)

Download the config and I recommend selecting and downloading multiple configs from the same city, just reselect the servers in the last option.

![wg-conf-gen](/img/addons/vpn/mullvad/mullvad-wg-conf-gen.png)

## Truenas Scale

In Truenas Scale, create a dataset for vpn configs.

### Dataset Permissions

The correct perms that truecharts use by default.

![media-perms](/img/addons/vpn/mullvad/media-perms.png)

## TrueChart VPN AddOn

Please see the official doc from [truecharts](https://truecharts.org/manual/guides/vpn-setup).

- Only caveat is that the 172 ip is added automatically, no need to add it manually.
- Make sure to enable the KillSwitch and add only _your_ lan network in the `IPV4`.
