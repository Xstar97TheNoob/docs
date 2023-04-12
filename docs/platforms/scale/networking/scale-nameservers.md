# Scale NameServers

If you're using TrueNAS Scale, it's important to understand that the default nameservers that come with the installation point to your router's IP or DNS. While this may work in some cases, it's generally not the best solution.

In order to have a more reliable and faster DNS resolution, it's recommended to change your nameservers to external DNS entries. This will ensure that your DNS queries are answered by a server that is specifically designed to handle DNS requests.

One great option for external DNS entries is Cloudflare DNS. Cloudflare is a global content delivery network that offers fast and secure DNS resolution. They also have a great dashboard and analytics tools that make managing your DNS records a breeze.

Another option is Quad9 DNS, which is a free DNS service that offers strong privacy and security features. Quad9 also has a global network of servers that can provide fast and reliable DNS resolution.

To change your nameservers in TrueNAS Scale, simply log in to your web UI and navigate to the networking settings. From there, you can change your DNS settings to point to your desired external DNS entries.

![scale-network-global-config-cf](/img/network/scale-nameservers/scale-network-global-config-cf.png)

In conclusion, changing your default nameservers in TrueNAS Scale is an important step towards better DNS resolution. Cloudflare DNS and Quad9 DNS are both great options to consider for external DNS entries. So, make the switch today and enjoy faster and more reliable DNS resolution.
