# VPN (Virtual Private Network)

Zielgruppe: IT‑Auszubildende, Fachinformatiker Systemintegration, Einsteiger‑Administratoren

## Einführung
VPNs ermöglichen sichere, verschlüsselte Verbindungen über unsichere Netzwerke (z. B. Internet) und bilden private Overlay‑Netze für Fernzugriff oder Site‑to‑Site‑Vernetzung.

## Technische Definition
Ein VPN ist ein verschlüsselter Tunnel zwischen Endpunkten, der Datenverkehr kapselt und Authentifizierung, Integrität und Vertraulichkeit sicherstellt. Typische Protokolle: IPsec, OpenVPN, WireGuard.

## Detaillierte Erklärung
- Site‑to‑Site VPN: verbindet ganze Netze zwischen Standorten.
- Remote‑Access VPN: Einzelne Clients verbinden sich ins Unternehmensnetz.
- Protokolle:
  - IPsec: etabliertes, flexibles Protokoll (IKEv2 für Key‑Exchange)
  - OpenVPN: TLS‑basiert, weit verbreitet
  - WireGuard: modernes, leichtgewichtiges Protokoll mit besserer Performance

## Wie es funktioniert
- Tunneling kapselt IP‑Pakete (z. B. in ESP für IPsec oder TLS für OpenVPN)
- Verschlüsselung schützt Daten, Authentifizierung verifiziert Endpunkte
- Routen/Policy‑Based oder Tunnel‑Interface‑basierte Weiterleitung

## OSI‑Layer Relevanz
- Primär Layer 3 (IPsec tunneling) oder Layer 4/5 (TLS‑basierte VPNs)

## Vorteile
- Sichere Verbindung über das öffentliche Internet
- Zugriff auf Ressourcen als wäre der Client im LAN
- Site‑to‑Site Vernetzung ohne teure Leased Lines

## Nachteile
- Performance‑Overhead durch Verschlüsselung
- Komplexe Konfiguration (z. B. IPsec Policies, NAT‑Traversal)

## Sicherheitsüberlegungen
- Starke Cipher Suites, Perfect Forward Secrecy (PFS) verwenden
- Authentifizierung mit Zertifikaten statt statischen Schlüsseln
- Logging und Zugriffskontrolle (ACLs, Split‑Tunneling Richtlinien)

## Typische Einsatzfälle
- Home‑Office Remote‑Access
- Filial‑Vernetzung (Site‑to‑Site)
- Sicherer Zugriff auf Cloud‑Ressourcen

## Real‑World Beispiele
- IPsec‑VPN zwischen Zentrale und Filialen
- WireGuard für leichte, performante Remote‑Access Verbindungen

## Häufige Fehler
- MTU‑Probleme (Fragmentierung) bei doppeltem Tunneling
- NAT‑Traversal Probleme, inkompatible Cipher Suiten
- Unsichere Pre‑Shared Keys

## Troubleshooting‑Hinweise
- Verbindungsaufbau prüfen: IKE/Handshake Logs (IPsec)
- MTU testen (`ping -f -l` / path MTU)
- Routen und Firewall‑Regeln prüfen

## Beispiel (WireGuard config snippet)
```text
[Interface]
PrivateKey = <privkey>
Address = 10.0.0.2/24

[Peer]
PublicKey = <peerpubkey>
AllowedIPs = 10.0.0.0/24
Endpoint = vpn.example.com:51820
```

## Mermaid‑Diagramm
```mermaid
graph LR
  Client[Remote Client] --- Internet
  Internet --- VPNGW[VPN Gateway]
  VPNGW --- LAN[Zentrale LAN]
```

## Zusammenfassung
VPNs sind essenziell für sichere Fernverbindungen und Standortvernetzung. Moderne Protokolle wie WireGuard bieten einfache Konfiguration und gute Performance; bei IPsec auf korrekte Policies und NAT‑Traversal achten.

## Verwandte Themen
- [Firewall](../netzwerkgeraete/firewall.md)
- [SSH](ssh.md)
- [AES](aes.md)
