# VICTORIA COSMOS LTD — CORPORATE WEBSITE
## Domain: victoriacosmos.com

Acest director conține codul sursă complet al website-ului oficial de prezentare și vânzare de servicii B2B pentru **Victoria Cosmos Ltd**.

---

### STRUCTURA FIȘIERELOR:
- **`index.html`**: Pagina principală corporate cu cele 3 divizii (Transferuri Flote Auto, Intendență Domenii Private VIP, Suport Comercial Ramstein/DoD), calculator interactiv de tarife B2B, selector bilingv (EN/DE) și formular de solicitare Acord Cadru.
- **`styles.css`**: Stiluri corporate premium (temă Obsidian Dark cu accente Champagne Gold), complet responsive pe telefoane, tablete și desktop.
- **`script.js`**: Motorul de calcul interactiv al tarifelor per rută, logica de comutare bilingvă instantanee și procesarea solicitărilor de contract.

---

### CUM SE TESTEAZĂ LOCAL:
Pur și simplu deschideți fișierul `index.html` în orice browser web (Google Chrome, Edge, Safari):
`file:///c:/Dev/gabi/victoriacosmos_site/index.html`

---

### PROCEDURA DE PUBLICARE LIVE PE `victoriacosmos.com`:
Când utilizatorul furnizează datele de acces (cPanel, Cloudflare Pages, Netlify, Vercel, FTP sau GitHub Pages):
1. **Opțiunea 1 (Cloudflare Pages / Vercel / Netlify - Gratuit & Ultra-Rapid):** Se încarcă folderul `victoriacosmos_site` și se conectează domeniul `victoriacosmos.com` prin DNS (CNAME / A Record).
2. **Opțiunea 2 (Găzduire clasică cPanel / FTP):** Se încarcă conținutul folderului direct în directorul `public_html` al serverului de găzduire.
3. Se configurează adresele profesionale de email: `operations@victoriacosmos.com` și `director@victoriacosmos.com`.
