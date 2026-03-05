// ========================================
// 1. 초기화 - 다크모드
// ========================================

function initDarkMode() {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  }
}

initDarkMode();

// ========================================
// 2. 모바일 메뉴 토글
// ========================================

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// 모바일 메뉴 링크 클릭 시 메뉴 닫기
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// ========================================
// 3. 다크모드 토글
// ========================================

function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('darkMode', isDark.toString());
}

const darkModeBtn = document.getElementById('dark-mode-btn');
const darkModeBtnMobile = document.getElementById('dark-mode-btn-mobile');

if (darkModeBtn) {
  darkModeBtn.addEventListener('click', toggleDarkMode);
}

if (darkModeBtnMobile) {
  darkModeBtnMobile.addEventListener('click', toggleDarkMode);
}

// ========================================
// 4. 스무스 스크롤 네비게이션
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========================================
// 5. 스크롤 등장 애니메이션 (Intersection Observer)
// ========================================

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target); // 한 번만 실행
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.fade-in-element').forEach(el => {
  fadeObserver.observe(el);
});

// ========================================
// 6. 네비게이션 스크롤 하이라이트
// ========================================

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 모든 네비게이션 링크에서 active 제거
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
      });

      // 현재 섹션에 해당하는 링크에 active 추가
      const activeLinks = document.querySelectorAll(`.nav-link[href="#${entry.target.id}"]`);
      activeLinks.forEach(link => {
        link.classList.add('active');
      });
    }
  });
}, {
  rootMargin: '-40% 0px -40% 0px',
  threshold: 0
});

// 모든 섹션 관찰
document.querySelectorAll('section[id]').forEach(section => {
  navObserver.observe(section);
});

// ========================================
// 7. 연락처 폼 처리
// ========================================

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const message = document.getElementById('form-message').value.trim();

    // 유효성 검사
    if (!name) {
      showFormStatus('이름을 입력해주세요.', 'error');
      return;
    }

    if (!email || !isValidEmail(email)) {
      showFormStatus('유효한 이메일을 입력해주세요.', 'error');
      return;
    }

    if (!message) {
      showFormStatus('메시지를 입력해주세요.', 'error');
      return;
    }

    // 이메일 전송 (mailto 링크로 처리)
    const subject = encodeURIComponent(`포트폴리오 문의: ${name}`);
    const body = encodeURIComponent(`이름: ${name}\n이메일: ${email}\n\n메시지:\n${message}`);
    const mailtoLink = `mailto:mingjun.kim@email.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    // 성공 메시지 표시
    showFormStatus('메시지 전송 준비 완료! 이메일 앱이 열립니다.', 'success');

    // 폼 초기화
    contactForm.reset();
  });
}

// 이메일 유효성 검사 함수
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 폼 상태 메시지 표시 함수
function showFormStatus(message, type) {
  const statusDiv = document.getElementById('form-status');
  if (!statusDiv) return;

  statusDiv.textContent = message;
  statusDiv.className = 'p-4 rounded-lg text-center text-sm font-semibold';

  if (type === 'success') {
    statusDiv.classList.add('bg-green-100', 'dark:bg-green-900/40', 'text-green-700', 'dark:text-green-300');
  } else if (type === 'error') {
    statusDiv.classList.add('bg-red-100', 'dark:bg-red-900/40', 'text-red-700', 'dark:text-red-300');
  }

  statusDiv.classList.remove('hidden');

  // 5초 후 메시지 숨김
  setTimeout(() => {
    statusDiv.classList.add('hidden');
  }, 5000);
}
