# gnoke-skins

UI skins for hardware devices. One `config.js`. Any device.

Each skin is a single `index.html` file. Point it at your device's JSON endpoint and it works — no framework, no install, no firmware changes.

**Site:** [gnoke-skins.netlify.app](https://gnoke-skins.netlify.app)

## How it works

```
Device (JSON) → config.js → Gnoke skin → Browser
```

Your device broadcasts state as JSON. `config.js` maps the keys. The skin renders. Swap skins freely — the device never changes.

## Skins

| Skin | Status |
|---|---|
| Industrial Dim | Available |
| Minimal Light | Available |
| Mobile-first | Available |
| Risin RSPWM30 | Prototype |
| Solar Monitor | In progress |

## Licence

MIT
