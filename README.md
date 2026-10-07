# 마법사의 홀덤

AI와 대결하는 텍사스 홀덤 게임입니다. 안드로이드는 APK, iPhone/PC는 웹으로 사용할 수 있습니다.

## 다운로드 / 접속

| 플랫폼 | 링크 |
| --- | --- |
| **Android APK** | [최신 APK 다운로드](https://github.com/bossxor/game_Wiz_holdem/releases/latest) |
| **iPhone / 웹** | https://bossxor.github.io/game_Wiz_holdem/ |

- Android: Releases에서 APK 설치
- iPhone: Safari로 위 웹 주소 열고 공유 → 홈 화면에 추가 (오프라인 동작)
- 프로젝트 모음 대시보드: https://bossxor.github.io/works-dashboard/

## 구조

- `www/` 게임 소스 (PWA, 웹 배포 대상)
- `app/` Capacitor Android 프로젝트

## 개발

```bash
# APK 빌드
cd app
npm i
npx cap copy android
cd android && ./gradlew assembleDebug

# 웹 배포 (gh-pages 브랜치)
git subtree push --prefix www origin gh-pages
```
