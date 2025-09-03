# Ports

- A port is a 16-bit unsigned integer used with an IP address to direct network traffic to the correct service on a machine.
- it is a logical number
- Range: 0 – 65535 (not 65536 because counting starts at 0)

  > Examples:

- HTTP → Port 80
- HTTPS → Port 443
- FTP → Port 21
- SSH → Port 22

# IP Addresses

> IPv4:

- 32-bit address → 2^32 = 4.3 Billion unique addresses
- Written in decimal format → Example: 192.168.1.1

> IPv6:

- 128-bit address → 2^128 huge number of addresses (practically infinite)
- Written in hexadecimal format → Example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334

# MAC Address (Media Access Control)

- 48-bit unique identifier for network interfaces.
  > Example: 00:1A:2B:3C:4D:5E
- Used for local communication inside a LAN, not across the internet.

> Why we don't use MAC for internet:

- MACs are flat, no hierarchy → can't be efficiently routed globally like IPs.
- IPs provide network-level organization; MACs don’t.

# Ways to Transfer Data Between Devices

> Ethernet Cable

- Direct, wired connection → simple but not scalable for many devices.

> Switch

- Builds a LAN (Local Area Network).
- Switches deliver data to correct devices within a LAN using MAC addresses.

> Router

- Connects multiple LANs → forms a network of networks = Internet.
- Uses IP addresses to route data to correct networks and devices.
- Routers send data hop by hop, not directly to final destination.

> Wireless Access Control (WAC)

- Wireless communication inside a LAN. Example: Wi-Fi, Airdrop.
  > Key Point:
- Within a LAN → Data sent using MAC addresses.
- Across the Internet → Data sent using IP addresses.

# Public vs Private IP

> Public IP:

- Globally unique → Identifies your network on the internet.

> Private IP:

- Used inside LANs → unique only within that network.
  > Reserved Ranges:
- 10.0.0.0 – 10.255.255.255 → Large organizations
- 172.16.0.0 – 172.31.255.255 → Medium networks
- 192.168.0.0 – 192.168.255.255 → Home networks

> How router handles multiple devices:

- Uses NAT (Network Address Translation) to map private IPs to the single public IP and back.

> Webpage Reload

- Reloading a page = new HTTP request → HTML, CSS, JS are all fetched again unless cached.

---

