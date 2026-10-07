# 마법사의 홀덤

- 웹앱(PWA): `www/` 를 정적 호스팅 (GitHub Pages 등). 오프라인 동작, 홈 화면 설치 가능.
- APK: Capacitor (`app/`)

```bash
cd app
npm i
npx cap sync android
cd android && ./gradlew assembleDebug
```
