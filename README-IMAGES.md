# Návod na správu obrázkov

Tento návod vám ukáže, ako jednoducho pridať, zmeniť alebo odstrániť obrázky na webovej stránke.

## 📁 Kde sú obrázky?

Všetky obrázky sú uložené v priečinku:
```
public/images/
```

## 📝 Ako pridať alebo zmeniť obrázok?

### Krok 1: Pripravte obrázok
1. **Odporúčaná veľkosť**: 1200-2000px na širšej strane
2. **Optimalizácia** (nepovinné, ale odporúčané):
   - Navštívte [tinypng.com](https://tinypng.com)
   - Nahrajte váš obrázok
   - Stiahnite komprimovanú verziu
   - Toto zmenší veľkosť súboru bez straty kvality

### Krok 2: Nahrajte obrázok
1. Otvorte priečinok `public/images/`
2. Skopírujte váš obrázok do tohto priečinka
3. Pomenujte súbor jednoducho (napr. `hero-background.jpg`, `gallery-1.jpg`)
   - Používajte len malé písmená, čísla a pomlčky
   - Bez medzier alebo špeciálnych znakov

### Krok 3: Upravte konfiguráciu
Otvorte súbor `src/data/config.json` a nájdite sekciu `"images"`.

## 🎯 Typy obrázkov

### 1. Hlavný obrázok na úvodnej stránke (Hero)
```json
"hero": {
  "filename": "hero-background.jpg",
  "alt": "Lešenie na bytovom dome"
}
```
- Zmeniť obrázok: Nahrajte nový obrázok a zmeňte `filename`
- Zmeniť popis: Upravte text v `alt`

### 2. Obrázok v sekcii O nás (About)
```json
"about": {
  "filename": "about-feature.jpg",
  "alt": "Tím EMT Lešenie pripravuje certifikované lešenie"
}
```
- Funguje rovnako ako hero obrázok

### 3. Galéria obrázkov (Gallery)
```json
"gallery": [
  {
    "filename": "gallery-1.jpg",
    "title": "Rodinný dom",
    "description": "Lešenie na rodinnom dome"
  },
  {
    "filename": "gallery-2.jpg",
    "title": "Bytový dom",
    "description": "Lešenie na bytovom dome"
  }
]
```

**Pridať nový obrázok do galérie:**
1. Nahrajte obrázok do `public/images/` (napr. `gallery-11.jpg`)
2. Pridajte nový záznam do `gallery` poľa:
```json
{
  "filename": "gallery-11.jpg",
  "title": "Názov projektu",
  "description": "Krátky popis obrázka"
}
```

**Zmeniť existujúci obrázok:**
- Nahrajte nový obrázok s rovnakým názvom alebo
- Zmeňte hodnotu `filename` v config.json

**Odstrániť obrázok z galérie:**
- Vymažte celý blok `{...}` pre daný obrázok z config.json
- Nezabudnite odstrániť čiarku, ak je to posledný prvok

## ⚠️ Dôležité upozornenia

1. **Formáty obrázkov**: Používajte `.jpg`, `.jpeg` alebo `.png`
2. **Čiarky v JSON**: Nezabudnite na čiarky medzi záznamami (ale nie za posledným!)
3. **Úvodzovky**: Všetky texty musia byť v úvodzovkách `"text"`
4. **Zálohovanie**: Pred väčšími zmenami si vytvorte kópiu `config.json`

## ✅ Kontrola správnosti

Po úprave `config.json`:
1. Uložte súbor
2. Skontrolujte, či sa web správne zobrazuje
3. Ak vidíte chybu, skontrolujte:
   - Správne umiestnené čiarky
   - Všetky úvodzovky sú párové
   - Názvy súborov sa zhodujú s názvami v `public/images/`

## 🚀 Po úprave obrázkov

Keď ste spokojní so zmenami:
1. Spustite build: `npm run build`
2. Nahrajte zmeny na server

## 📞 Potrebujete pomoc?

Ak niečomu nerozumiete alebo niečo nefunguje, kontaktujte vývojára.

---

**Príklad kompletnej galérie s 3 obrázkami:**

```json
"gallery": [
  {
    "filename": "gallery-1.jpg",
    "title": "Rodinný dom",
    "description": "Lešenie na rodinnom dome"
  },
  {
    "filename": "gallery-2.jpg",
    "title": "Bytový dom",
    "description": "Lešenie na bytovom dome"
  },
  {
    "filename": "gallery-3.jpg",
    "title": "Naše vybavenie",
    "description": "Komponenty lešenia"
  }
]
```
