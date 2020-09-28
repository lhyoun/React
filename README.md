<!-- html같은거 마크다운? 문서작성용
.md의 문법이 있음
 -->

# Style-Component-연습

### 사진

![main](https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE)

### 설치

- npx create-react-app style-app

### 확장 프로그램 설치

- ESLing
- Prettier
- Reactjs code snippets

### .prettier 파일 생성

```json
{
  "singleQuote": false,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}
```

### 라이브러리

- npm install --save styled-components

### Git 관리

- git init
- git add .
- git commit -m "1. v1"

- github에 저장소 만들기 (www.hello.com)
- git remote add origin www.hello.com

- git push origin master
<!-- 여기서 project 전체가 올라가는게 아니다 .ignore에 맞게 제외 -->

- git pull origin master

<!-- 최초에 다운로드 받았을 때 꼭 해야하는 것 -->

- npm install (의존성 라이브러리 다운로드, node modules download, 최초에는 소스파일만 있고 lib가 없는데 이걸하면 다운)
