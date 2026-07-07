# 파비콘 추가 프롬프트

## 요청 내용
`index.html` 에 `source/imgs/favicon1.svg` 을 파비콘으로 넣어줘.

## 적용 방법
`index.html`의 `<head>` 섹션에 아래의 코드를 추가합니다.

```html
<link rel="icon" type="image/svg+xml" href="./source/imgs/favicon1.svg" />
```

## 참고 사항
- SVG 파일을 파비콘으로 사용할 때는 `type="image/svg+xml"` 속성을 지정하는 것이 좋습니다.
- 경로가 정확한지 확인해야 합니다.
