# 개발자 포트폴리오 이력서

개인 웹 포트폴리오 및 이력서 웹사이트입니다.

## 🚀 기술 스택

- **HTML5** - 웹 마크업
- **CSS3 / TailwindCSS** - 스타일링 및 반응형 디자인
- **JavaScript (Vanilla)** - 인터랙티브 기능
- **TailwindCSS** - 유틸리티 기반 CSS 프레임워크

## 📁 프로젝트 구조

```
project-root/
├── index.html              # 메인 페이지
├── styles/
│   ├── input.css           # TailwindCSS 입력 파일
│   └── output.css          # 빌드된 CSS (자동 생성)
├── scripts/
│   └── main.js             # 메인 JavaScript
├── assets/
│   ├── images/             # 이미지 파일
│   └── icons/              # 아이콘 파일
├── tailwind.config.js      # TailwindCSS 설정
├── package.json            # 프로젝트 의존성
├── README.md               # 이 파일
├── ROADMAP.md              # 개발 로드맵
└── CLAUDE.md               # Claude Code 작업 가이드
```

## 🛠️ 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

TailwindCSS가 자동으로 CSS를 생성하고 감시합니다.

### 3. 웹사이트 보기

새 터미널에서:
```bash
npm run serve
```

브라우저에서 `http://localhost:8000` 로 접속합니다.

## 🏗️ 빌드

프로덕션 빌드 (CSS 최소화):

```bash
npm run build
```

## 📝 주요 기능

- ✅ 반응형 디자인 (모바일 우선)
- ✅ 다크모드 지원
- ✅ 스무스 스크롤 네비게이션
- ✅ 모바일 메뉴 토글
- ✅ 접근성 고려

## 🎨 섹션

1. **홈** - 히어로 섹션 및 자기소개
2. **소개** - 경력 및 배경 정보
3. **기술** - 기술 스택 (Frontend, Backend, Tools)
4. **프로젝트** - 주요 프로젝트 포트폴리오
5. **연락처** - 이메일, GitHub, LinkedIn 등

## 🔧 커스터마이징

### 개인정보 수정
`index.html`에서 다음을 수정하세요:
- 이름, 직위
- 자기소개 텍스트
- 프로젝트 정보
- 기술 스택
- 연락처 정보

### 스타일 수정
- `tailwind.config.js` - 색상, 폰트 등 테마 설정
- `styles/input.css` - 커스텀 스타일 추가

### JavaScript 기능 추가
- `scripts/main.js` - 인터랙티브 기능 구현

## 📱 브라우저 호환성

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)

## 🚀 배포

### GitHub Pages
```bash
git push origin main
```

GitHub 저장소 Settings에서 GitHub Pages를 활성화합니다.

### Netlify
1. `netlify.com`에 로그인
2. "New site from Git" 선택
3. 저장소 연결
4. 자동 배포

## 📚 참고 자료

- [TailwindCSS 공식 문서](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [개발 로드맵](./ROADMAP.md)

## 📄 라이센스

MIT License - 자유롭게 사용, 수정, 배포할 수 있습니다.

---

**마지막 업데이트**: 2024년
