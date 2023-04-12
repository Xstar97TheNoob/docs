# Adding LetsEncrypt Certificates

A guide to adding lets encrypt certificates to truenas scale.

Prerequisites:

- Own a **real** domain(preferably CloudFlare)
  - If the domain is provided from another registrar, you can freely change the nameservers of your domain to CF and have it manage your domain.
- This guide assumes you will be using CF.
- Root/Admin user for scale should have an email setup prior to this task.
  - Edit the user in credentials -> local users and add an email.

## Cloudflare

Go to [CF API Tokens](https://dash.cloudflare.com/profile/api-tokens) and then `create a token`. Select the edit zone template token and create one for each root domain you want to add to scale's ACME section.

![cf-tokens-template-edit-zone](/img/network/adding-letsencrypt-certificates/cf-tokens-template-edit-zone-create-token.png)

![cf-tokens-template-edit-zone-create-token](/img/network/adding-letsencrypt-certificates//cf-tokens-template-edit-zone-create-token.png)

Under Create token, edit the name for this token and give it a good name for example `token-xstar97thenoob`.

Add both a **zone DNS** `edit` and `read` permissions.

Add a specific `domain` to the **Zone Resources**.

Continue to summary and then create token.

## Truenas Scale

Go to Credentials -> Certificates page in Truenas Scale.

### ACME DNS Authenticators

Add the api token that you created for your domain in **ACME DNS-Authenticators**.

![scale-dns-auth](/img/network/adding-letsencrypt-certificates/scale-dns-auth.png)

In my example I give this the same name as my root domain and add my token to **API Token**, all over sections can be ignored.

### Certificate Signing Requests

Add a CSR and give it a good name, I typically go with a name scheme like `csr-rootdomain`.

Skip **step 2** by leaving it default.

In **step 3** give exact details or fake it, upto you however the last section.

- Common Name should be the the root domain.
- Subject Alernate Names should either contain both root domain or wild card sub domain.
  - If you want to use both root domain and sub domain, just use both pictured below.
  - Otherwise the `*.mydomain.tld` would be sufficient of creating a universal cert for that domain.

![csr-example](/img/network/adding-letsencrypt-certificates/csr-example.png)

Skip **step 4** as there's nothing to change.

Confirm and save.

:::note

Its normal for the CSR to display: `Issuer: external - signature pending`.

:::

To create the cert click the wrench icon on the CSR you just made.

![scale-csr-gen-cert](/img/network/adding-letsencrypt-certificates/scale-csr-gen-cert.png)

Give it a name like `cert-rootdomain` and check the Terms of Service.

By default the Renew Certificate Days is set at a min of 10 days, optionally change it to 30 days.

Set the ACME **Server Directory URI\*** to `Let's Encrypt Production Directory`.

Finally add the ACME you created specifically for the domain.

Once save it will take a min to process but if done correctly you should see a shiny cert :).

![csr](/img/network/adding-letsencrypt-certificates/csr-cf.png)

## How to Use Certs and Ingress

- [traefik how to](https://truecharts.org/charts/enterprise/traefik/how-to)
- Enable ingress on any app that has the option for ingress.

Here's an example:

![host ingress](/img/network/adding-letsencrypt-certificates/host-ingress.png)
