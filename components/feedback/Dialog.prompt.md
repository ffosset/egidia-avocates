Focused overlay for booking a slot or confirming a send. Warm brun scrim with a light blur.

```jsx
<Dialog open={open} title="Confirmer votre rendez-vous" onClose={close}
  footer={<><Button variant="secondary" size="md" onClick={close}>Annuler</Button><Button size="md">Confirmer</Button></>}>
  Mardi 8 avril, 14h00 — 45 minutes, au cabinet ou par téléphone.
</Dialog>
```
