# TODO: Make Images Responsive - ✅ COMPLETED

## Summary of Changes:
- Global `img { max-width:100%; height:auto; display:block; }`
- **Services** (.servicio img): `max-height` + `object-fit:contain` (270px desktop, 200px tablet, 180px phone)
- **Testimonials** (.slide img + carousel): `max-height` + `contain`, 100% width carousel, smaller slides on phone (220px/180px/160px)
- **Experiencia** (.paso img): `max-height` + `contain` (120px/180px/160px)
- Added `@media(max-width:480px)` for small phones

All images now fully responsive and visible without cropping on desktop, tablet, and mobile. Test by opening `index.html` and using browser dev tools (F12 > mobile toggle).
