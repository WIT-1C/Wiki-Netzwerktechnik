# Telefonie (VoIP & klassische Telefonie)

Zielgruppe: IT‑Auszubildende, Fachinformatiker Systemintegration, Einsteiger‑Administratoren

## Einführung
Telefonie umfasst klassische PSTN‑Anschlüsse und moderne VoIP‑Lösungen (SIP/RTP). Diese Seite beschreibt Grundlagen, Protokolle und Betrieb.

## Technische Definition
- VoIP (Voice over IP): Übertragung von Sprachdatenpaketen über IP‑Netzwerke, häufig mittels SIP (Signaling) und RTP (Media).
- PSTN/ISDN: traditionelle leitungsvermittelte Telefonie über Provider‑Netze.

## Detaillierte Erklärung
- SIP (Session Initiation Protocol): Signalisierung für Rufaufbau/Abbau, Authentifizierung, Proxy/Registrar.
- RTP/RTCP: Transport der Audiostreams und QoS/Statistiken.
- CODECs: G.711 (PCM), G.722, Opus (bandbreitenabhängig)

## Wie die Technologie funktioniert
- SIP‑Client registriert sich beim Registrar/Proxy; beim Anruf erfolgt INVITE/200 OK/ACK Handshake; Medien werden per RTP zwischen Endpunkten oder über Media‑Proxy übertragen.

## OSI‑Layer Relevanz
- Layer 7: SIP (Signaling)
- Layer 4: RTP über UDP (Media)

## Vorteile
- Kosteneffizienz, Flexibilität, Integration mit IT‑Infrastruktur

## Nachteile
- Abhängigkeit von Netzwerkqualität (Jitter, Packet Loss, Latency)
- NAT/Firewall‑Komplexität (SIP ALG Probleme)

## Sicherheitsüberlegungen
- SRTP (Secure RTP) für Media‑Verschlüsselung
- TLS für SIP‑Signalisierung (SIPS)
- Authentifizierung, VLAN‑Trennung für Sprachverkehr, QoS‑Priorisierung

## Typische Einsatzfälle
- Unternehmens‑Telefonanlage (IP‑PBX), Callcenter, Softphones, SIP‑Trunks

## Real‑World Beispiele
- Asterisk/FreePBX als On‑Premise PBX mit SIP‑Trunk zu Provider

## Häufige Fehler
- Fehlende QoS: Voice‑Traffic wird verzögert
- SIP ALG im Router bricht Signalisierung
- Unzureichende Bandbreite/Overhead durch CODEC Wahl

## Troubleshooting‑Hinweise
- Packet Capture (Wireshark) für SIP/RTP analysieren
- Jitter, Packet Loss, MOS‑Werte überwachen
- NAT/Firewall Regeln für SIP/RTP prüfen (SIP ALG ggf. deaktivieren)

## Beispiel (SIP INVITE Ablauf - vereinfacht)
```text
ClientA -> Proxy: INVITE
Proxy -> ClientB: INVITE
ClientB -> Proxy: 200 OK
Proxy -> ClientA: 200 OK
ClientA -> ClientB: ACK
RTP Stream startet zwischen A und B
```

## Zusammenfassung
VoIP bietet viele Vorteile, erfordert aber gepflegte Netzwerk‑ und Sicherheitskonfiguration (QoS, VLANs, SRTP). PSTN bleibt für bestimmte Fallback‑Szenarien relevant.

## Verwandte Themen
- [VLAN / QoS](../adressierung/vlan.md)
- [Firewall / NAT](../netzwerkgeraete/firewall.md)

