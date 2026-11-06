# SteckerKompass – kostenlose 12V-/24V-PWA

## Inhalt
Installierbare Web-App für Android und iPhone mit Offline-Grundfunktion. Enthalten sind:
- 12 V: 7-polig ISO 1724, 13-polig ISO 11446
- 24 V: 7-polig ISO 1185 (Typ N), 7-polig ISO 3731 (Typ S), 15-polig ISO 12098, 7-polig ABS/EBS ISO 7638-1
- 12 V: 7-polig ABS/EBS ISO 7638-2
- Landwirtschaft: 9-polig ISOBUS ISO 11783-2 Heck und Kabine

## Start / Installation
Die App benötigt zum Installieren einen HTTPS-Webserver:
1. Alle Dateien aus diesem Ordner auf einen statischen Webhost hochladen (z. B. GitHub Pages).
2. Die HTTPS-Adresse auf Android in Chrome öffnen und „Installieren“ / „Zum Startbildschirm hinzufügen“ wählen.
3. Auf iPhone in Safari öffnen → Teilen → „Zum Home-Bildschirm“.
4. Nach dem ersten Laden funktioniert der Kerninhalt offline.

Zum lokalen Testen einen lokalen Webserver verwenden; `file://` unterstützt Service Worker nicht.

## Grenzen / Sicherheit
Das ist ein Nachschlagewerk für ausgewählte genormte Anhänger-Stecksysteme, keine vollständige Datenbank aller Fahrzeugstecker. Kabelfarben können bei Reparaturen, Nachrüstungen und herstellerspezifischen Kabelsätzen abweichen. Vor Anschluss Schaltplan und tatsächliche Leiterbelegung prüfen. Keine elektrische Verbindung allein aufgrund der Farbe herstellen.

## Quellen
- Erich Jaeger: https://www.erich-jaeger.com/de/products/standards/iso-11446/iso-11446-umfang-und-anwendung
- HELLA: https://www.hella.com/partnerworld/assets/documents/1267_BR_Fahrzeuginstallation_HELLA_EN_print.pdf
- AO Handel: https://www.aohandel.de/anhaenger-lkw-steckeranschluss
- Jaeger Automotive: https://www.jaeger-automotive.de/wp-content/uploads/Technisches_Handbuch_03-2019_mid.pdf
- Erich Jaeger ISO 7638: https://www.erich-jaeger.com/de/products/standards/iso-7638-1/iso-7638-1-und-2-umfang-und-anwendung
- HELLA ABS/EBS: https://www.hella.com/techworld/assets/documents/1267_BR_Fahrzeuginstallation_HELLA_EN_print.pdf
- ISO 11783-2 Pinbelegung: https://assets.hoelzle.ch/image/upload/pdf/ISO-Bus_Pinbelegung.pdf
