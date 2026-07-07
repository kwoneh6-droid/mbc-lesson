## 요청
Figma 디자인 가이드를 바탕으로, HTML, CSS, Vanilla JavaScript를 사용한 전통적인 MPA(Multi-Page Application) 방식의 웹페이지를 구현해 줘.

[참고 디자인 URL]
https://www.figma.com/design/mXDZcnKTbEab7rUwb8WebS/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C?node-id=6-134&t=UvstkUQf8pKjL0Nv-4

1. 기술 스택 및 아키텍처 (MPA & Legacy Web)
웹 아키텍처: SPA(Single Page Application)가 아닌, 각 페이지가 독립된 HTML 파일로 존재하는 전통적인 MPA(Multi-Page Application) 방식으로 구조를 잡아줘.
HTML5 / CSS3 / Vanilla JS: Webpack, Vite 같은 빌드 도구나 React, Vue 같은 프레임워크/라이브러리를 전혀 사용하지 마. Replit에서 브라우저가 바로 해석할 수 있는 순수 웹 표준 코드로 작성해야 해.
스크립트 분리: 각 HTML 페이지에 필요한 JavaScript는 전역 스코프나 개별 파일로 깔끔하게 분리해서 매핑해 줘.
2. 레이아웃 및 디자인 요구사항
Responsive Layout: Figma 노드(6-134)의 컴포넌트 구조를 바탕으로 하되, 데스크톱과 모바일 환경에서 모두 어색함이 없도록 전통적인 Media Queries를 사용해 반응형으로 만들어줘.
UI & Interaction: 페이지 간 이동은 <a> 태그를 통한 실제 링크 이동 방식을 사용하고, 버튼이나 링크의 hover/active 상태는 pure CSS transition으로 부드럽게 연출해 줘.
3. 디렉토리 및 파일 구조
Replit 환경에서 가볍고 직관적으로 실행될 수 있도록 딱 3개의 기본 파일로만 구성해 줘. 별도의 폴더(css, js 등)를 생성하지 말고 루트(Root) 디렉토리에 나란히 배치해 줘.

index.html (메인 페이지 구조)
style.css (스타일시트)
script.js (인터랙션 및 스크립트)
index.html에서 style.css와 script.js를 전통적인 방식으로 link 및 script 태그로 연결해 줘.