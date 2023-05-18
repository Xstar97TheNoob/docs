# CloudFlared & Traefik Guide

A guide to add traefik reverse proxy to a CloudFlared tunnel to expose apps with ingress.

:::caution

Implementing this guide will publicly expose your server, use at your own risk.

:::

Create a tunnel and install [cloudflared](https://truecharts.org/charts/stable/cloudflared/installation_notes) before starting this guide.

To add [**traefik**](https://truecharts.org/charts/enterprise/traefik/how-to#how-to) to the CloudFlared tunnel.

Create all the public hostname entries in this order:

- the root domain (if you plan to use root domain).
- each sub domain record.

These are the values that would be needed and assumes that the app is named `traefik` and the port is set to `443`.

**sub domain**: `app`

**type**: `https`

**url**: `traefik-tcp.ix-traefik.svc.cluster.local:443`

if using scale certs(deprecated)

- **Additional application settings**
  - **TLS**
    - **Origin Server Name**: `mydomain.tld`

if using cert-manager (recommended)

- **Additional application settings**
  - **TLS**
    - **Origin Server Name**: `app.mydomain.tld`

![traefik-root-domain](./img/traefik-cloudflared-root-domain.png)

![cf-cname-dns-root](./img/cf-cname-root-cfargotunnel.png)

## Traefik MiddleWares

It's highly advise to add a few MiddleWares like [ipwhitelist](/docs/platforms/scale/apps-and-services/apps/traefik/traefik-middlewares-guide/index.md#ipwhitelist) and [auth](/docs/platforms/scale/apps-and-services/apps/traefik/traefik-middlewares-guide/index.md#auth) to protect certain apps from being directly or indirectly exposed publicly.
