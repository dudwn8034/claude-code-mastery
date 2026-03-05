# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 🌍 언어 및 커뮤니케이션 규칙

**기본 응답 언어**: 한국어
- 사용자와의 모든 커뮤니케이션은 한국어로 진행
- 설명, 질문, 피드백 모두 한국어 사용

**코드 주석**: 한국어로 작성
- JavaScript, CSS 주석은 한국어 작성
- 복잡한 로직에는 상세한 설명 추가

**커밋 메시지**: 한국어로 작성
- 형식: `[타입] 작업 내용` (예: `[추가] 다크모드 기능 구현`)
- 타입 예시: `[추가]`, `[수정]`, `[리팩토링]`, `[문서화]`, `[설정]`

**문서화**: 한국어로 작성
- README.md, ROADMAP.md, 기타 문서는 한국어
- 변수나 함수 설명도 한국어로 작성

**변수명/함수명**: 영어 사용 (코드 표준 준수)
- camelCase: `getUserData()`, `isActive`
- kebab-case: HTML 클래스나 ID `user-profile`, `nav-menu`

---

## 🛠️ 개발 커맨드

### 의존성 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```
- TailwindCSS 감시 모드 활성화
- CSS 자동 생성 및 갱신

### 프로덕션 빌드
```bash
npm run build
```
- CSS 최소화 및 최적화
- 배포용 파일 생성

### 로컬 웹 서버 실행
```bash
npm run serve
```
- `http://localhost:8000`에서 웹사이트 확인

---

## 📁 프로젝트 구조

```
project-root/
├── index.html              # 메인 HTML 파일 (모든 섹션 포함)
├── styles/
│   ├── input.css           # TailwindCSS 디렉티브 및 커스텀 스타일
│   └── output.css          # 빌드된 CSS (자동 생성, git 무시)
├── scripts/
│   └── main.js             # 메인 JavaScript (네비게이션, 스크롤 등)
├── assets/
│   ├── images/             # 프로필 사진, 프로젝트 이미지
│   └── icons/              # 소셜 미디어 아이콘 등
├── tailwind.config.js      # TailwindCSS 설정 (테마, 플러그인)
├── package.json            # NPM 패키지 및 스크립트
├── README.md               # 사용자 가이드
├── ROADMAP.md              # 개발 로드맵
└── CLAUDE.md               # 이 파일
```

---

## 🏗️ 아키텍처

### 단일 페이지 구조 (SPA)
- `index.html` 하나로 모든 콘텐츠 제공
- JavaScript로 스크롤 네비게이션 구현

### 섹션 구성
1. **네비게이션** - 고정 헤더, 모바일 메뉴 지원
2. **홈 (Hero)** - 자기소개, CTA 버튼
3. **소개** - 경력, 배경 정보
4. **기술** - 기술 스택 3단 그리드
5. **프로젝트** - 프로젝트 카드 (2단 그리드)
6. **연락처** - 이메일, 소셜 링크
7. **푸터** - 저작권 정보

### 스타일 시스템
- **TailwindCSS** - 유틸리티 기반 스타일링
- **다크모드** - `dark:` 클래스로 구현
- **반응형** - `md:` 중단점으로 모바일 우선 설계
- **커스텀 컴포넌트** - `@layer components`에 정의

### JavaScript 기능
- **모바일 메뉴** - 버튼 클릭 시 토글
- **스무스 스크롤** - 네비게이션 링크 클릭
- **다크모드** - LocalStorage에 설정 저장 (선택사항)

---

## 🎨 기술 스택

- **HTML5** - 시맨틱 마크업
- **CSS3/TailwindCSS** - 반응형 디자인
- **Vanilla JavaScript** - 프레임워크 미사용, 순수 JS

**장점**:
- 가볍고 빠른 로딩
- 의존성 최소화
- 간단한 배포

---

## 💡 개발 가이드

### 새로운 섹션 추가
1. `index.html`에 새 `<section id="...">` 추가
2. `styles/input.css`에 필요한 컴포넌트 추가
3. 네비게이션 메뉴에 링크 추가
4. `npm run dev` 실행 후 확인

### 스타일 수정
- TailwindCSS 클래스 사용 최우선
- 새로운 스타일은 `styles/input.css`의 `@layer components`에 추가
- 색상은 `tailwind.config.js`에서 정의

### JavaScript 추가
- `scripts/main.js`에 새로운 기능 추가
- 이벤트 리스너는 DOMContentLoaded 후 등록
- 함수는 명확한 영어 이름으로 작성

### 이미지/아이콘 추가
- `assets/images/` - 프로필, 프로젝트 이미지
- `assets/icons/` - SVG 아이콘 등
- HTML에서 상대경로로 참조

---

## 🔄 워크플로우

### 기능 개발 순서
1. `ROADMAP.md`의 체크리스트 확인
2. 기능 구현 (HTML → CSS → JavaScript)
3. 로컬 `npm run serve`에서 테스트
4. Git 커밋 (한국어 메시지)
5. 배포 (GitHub Pages/Netlify)

### 일반적인 작업
| 작업 | 커맨드 | 설명 |
|------|--------|------|
| 개발 시작 | `npm run dev` | TailwindCSS 감시 모드 |
| 빌드 | `npm run build` | 프로덕션 최적화 |
| 보기 | `npm run serve` | 로컬 서버 실행 |
| 배포 | `git push origin main` | GitHub Pages 자동 배포 |

---

## 📋 체크리스트

### 새 기능 추가 시
- [ ] HTML 구조 작성 (시맨틱 태그)
- [ ] 클래스명 작성 (영문, kebab-case)
- [ ] 주석 추가 (필요시, 한국어)
- [ ] TailwindCSS 클래스 적용
- [ ] 모바일 반응형 테스트 (`md:` 클래스)
- [ ] 다크모드 테스트 (`dark:` 클래스)
- [ ] JavaScript 기능 테스트
- [ ] Git 커밋 (한국어 메시지)

### 배포 전
- [ ] `npm run build` 실행
- [ ] 로컬에서 `npm run serve` 확인
- [ ] 모든 링크 동작 확인
- [ ] 이미지 로드 확인
- [ ] 다크모드 테스트
- [ ] 모바일 (iPhone, Android) 테스트

---

## 🚀 배포 옵션

### GitHub Pages (권장)
```bash
git push origin main
# GitHub 저장소 Settings → Pages → main 브랜치 선택
```

### Netlify
1. netlify.com 로그인
2. 저장소 연결
3. 자동 배포

### Vercel
1. vercel.com 로그인
2. 저장소 임포트
3. 자동 배포

---

## 📞 문제 해결

### TailwindCSS 스타일이 적용 안 됨
- `npm run dev` 실행 확인
- `tailwind.config.js`의 `content` 배열에 파일 경로 확인
- 브라우저 캐시 삭제 후 새로고침

### JavaScript 오류
- 브라우저 콘솔에서 에러 확인
- HTML에서 `<script src="scripts/main.js"></script>` 경로 확인
- 요소 ID가 HTML과 JS에서 일치하는지 확인

### 배포 실패
- `.gitignore`에 `styles/output.css` 포함 확인
- `npm run build` 실행 후 배포
- 저장소 설정에서 배포 브랜치 확인

---

## 📚 참고 자료

- [TailwindCSS 공식 문서](https://tailwindcss.com/docs)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [HTML5 시맨틱 마크업](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [프로젝트 로드맵](./ROADMAP.md)
- [사용자 가이드](./README.md)

---

## 🎯 프로젝트 목표

개인 웹 포트폴리오 및 이력서를 통해:
- ✅ 기술 능력 시연
- ✅ 프로젝트 포트폴리오 공개
- ✅ 취업/프리랜싱 기회 확보
- ✅ 온라인 브랜드 구축

---

**마지막 업데이트**: 2024년 3월
